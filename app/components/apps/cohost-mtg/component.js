import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { isEmpty } from '@ember/utils';
import { schedule } from '@ember/runloop';

const cardCache = new Map();

const sortByCmc = (a, b) => {
    if (a.cmc === b.cmc) {
        return a.name.localeCompare(b.name);
    } 
    return a.cmc - b.cmc 
};
const fixName = (name) => {
    if (name.includes(" // ")) {
        return name.split(" // ")[0];
    }
    return name;
};

export default class AppsCohostMtgComponent extends Component {
    @tracked textareaOutput = null;
    @action setTextareaOutput(element) {
        this.textareaOutput = element;
    }

    @tracked decklist = null;
    @action setDecklist(element) {
        this.decklist = element;
    }
    @tracked decklistHtml = null;

    @tracked commander = window.sessionStorage.getItem('commander');
    @action setCommander(event) {
        this.commander = fixName(event.target.value);
        window.sessionStorage.setItem('commander', this.commander);
    }

    @tracked partner = window.sessionStorage.getItem('partner');
    @action setPartner(event) {
        this.partner = fixName(event.target.value);
        window.sessionStorage.setItem('partner', this.partner);
    }

    @tracked companion = window.sessionStorage.getItem('companion');
    @action setCompanion(event) {
        this.companion = fixName(event.target.value);
        window.sessionStorage.setItem('companion', this.companion);
    }

    @tracked fetchedCards = [];

    sectionNames = ["Commander", "Companion", "Creatures", "Planeswalkers", "Spells", "Artifacts", "Enchantments", "Lands", "Sideboard", "Other"];

    get cardSections() {
        return this.fetchedCards.reduce(
            (sections, card) => {
                const { type_line, name } = card;
                let sectionName = "Other";
                if ((!isEmpty(this.commander) && fixName(name) === this.commander) || (!isEmpty(this.partner) && fixName(name) === this.partner)) {
                    sectionName = "Commander";
                } else if (!isEmpty(this.companion) && fixName(name) === this.companion) {
                    sectionName = "Companion";
                } else if (card.isSideboard) {
                    sectionName = "Sideboard";
                } else if (type_line.includes("Creature")) {
                    sectionName = "Creatures";
                } else if (type_line.includes("Planeswalker")) {
                    sectionName = "Planeswalkers";
                } else if (type_line.includes("Instant") || type_line.includes("Sorcery")) {
                    sectionName = "Spells";
                } else if (type_line.includes("Land")) {
                    sectionName = "Lands";
                } else if (type_line.includes("Artifact")) {
                    sectionName = "Artifacts";
                } else if (type_line.includes("Enchantment")) {
                    sectionName = "Enchantments";
                }
                sections[sectionName].cards.push(card);
                sections[sectionName].count += card.count;
                sections.total += card.count;
                return sections;
            }, 
            this.sectionNames.reduce((sections, name) => {
                sections[name] = { count: 0, cards: [] };
                return sections;
            }, { "total": 0 })
        )
    }

    @tracked cardList = window.sessionStorage.getItem('cardList') || "";
    @action setCardList(event) {
        this.cardList = event.target.value;
        window.sessionStorage.setItem('cardList', this.cardList);
    }

    @tracked sideboardList = window.sessionStorage.getItem('sideboardList') || "";
    @action setSideboardList(event) {
        this.sideboardList = event.target.value;
        window.sessionStorage.setItem('sideboardList', this.sideboardList);
    }

    @tracked deckTech = window.sessionStorage.getItem('cohostmtg:deckTech') || "";
    @action setDeckTech(event) {
        this.deckTech = event.target.value;
        window.sessionStorage.setItem('cohostmtg:deckTech', this.deckTech);
    }

    @tracked deckTechHtml = '';

    @action async fetchCards() {
        const matches = this.deckTech.matchAll(/\[{2}[A-z',\-\.\ ]+?\]{2}/g);
        let match = matches.next();
        const deckTechCards = [];
        while (!match.done) {
            let matchString = match.value[0];
            matchString = matchString.substring(2, matchString.length - 2);
            if(!deckTechCards.includes(matchString)) {
                deckTechCards.push(fixName(matchString));
            }
            match = matches.next();
        }

        const cards = this.cardList
            .trim()
            .split('\n')
            .filter(row => !isEmpty(row))
            .map((row) => {
                const stringCount = row.match(/(^[0-9]*)/g)[0];
                const count = parseInt(stringCount);

                let name = isNaN(count) ? row : row.substring(stringCount.length + 1);
                name = fixName(name);

                return {
                    count: isNaN(count) ? 1 : count,
                    name
                }
            });

        const sideboardCards = this.sideboardList
            .trim()
            .split('\n')
            .filter(row => !isEmpty(row))
            .map((row) => {
                const stringCount = row.match(/(^[0-9]*)/g)[0];
                const count = parseInt(stringCount);

                let name = isNaN(count) ? row : row.substring(stringCount.length + 1);
                name = fixName(name);

                return {
                    count: isNaN(count) ? 1 : count,
                    name
                }
            });

        if (!isEmpty(this.commander) && isEmpty(cards.findBy('name', this.commander))) {
            cards.push({ count: 1, name: fixName(this.commander)});
        }

        if (!isEmpty(this.partner) && isEmpty(cards.findBy('name', this.partner))) {
            cards.push({ count: 1, name: fixName(this.partner)});
        }

        if (!isEmpty(this.companion) && isEmpty(cards.findBy('name', this.companion))) {
            cards.push({ count: 1, name: fixName(this.companion)});
        }

        let cardsToFetch = [];
        [...cards, ...sideboardCards].map(card => card.name).concat(deckTechCards).forEach(name => {
            if (cardCache.has(name)) return;

            let windowCache = window.sessionStorage.getItem(`scryfall:${name}`);
            if (windowCache !== null) {
                cardCache.set(name, JSON.parse(windowCache));
            }

            if (!isEmpty(name) && !cardCache.has(name)) {
                cardsToFetch.push(name);
            }
        });

        let fetchPromises = [];

        while (cardsToFetch.length > 0) {
            let currentlyFetching = cardsToFetch.slice(0, 75);
            cardsToFetch = cardsToFetch.slice(75);

            fetchPromises.push(fetch("https://api.scryfall.com/cards/collection", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "identifiers": currentlyFetching.map(name => { return { name }}) })
            }));
        }

        const responses = await Promise.all(fetchPromises);
        const jsonResponses = await Promise.all(responses.map(response => response.json()));
        const cardResponses = jsonResponses.reduce((allCards, jsonResponse) => { return allCards.concat(jsonResponse.data) }, []);

        cardResponses.forEach(cardResponse => {
            let { name } = cardResponse;
            name = fixName(name);
            cardCache.set(name, cardResponse);
            window.sessionStorage.setItem(`scryfall:${name}`, JSON.stringify(cardResponse));
        });

        this.fetchedCards = [...cards, ...sideboardCards].map(card => {
            let { name } = card;
            const scryfallCard = cardCache.get(name);
            scryfallCard.count = card.count || 1;
            scryfallCard.isSideboard = sideboardCards.findBy('name', name);
            return scryfallCard;
        }).sort(sortByCmc);

        let deckTechString = `<p style="display:inline;">`;
        for(let i = 0; i < this.deckTech.length; i++) {
            let currentChar = this.deckTech.charAt(i);
            let nextChar = this.deckTech.charAt(i + 1);

            if (currentChar === "\n") {
                if (nextChar !== "\n") {
                    deckTechString = `${deckTechString}</p><p style="display:inline;">`;
                }
            } else if (currentChar === "[" && nextChar === "[") {
                let cardString = this.deckTech.substring(i);
                let endBracketIndex = cardString.indexOf("]]") + i;
                cardString = this.deckTech.substring(i + 2, endBracketIndex);
                const imageUri = cardCache.get(fixName(cardString)).image_uris.normal;
                deckTechString = `${deckTechString}<details style="display:inline;"><summary style="text-decoration:underline;display:inline;cursor:pointer;">${cardString}</summary><div style="width:60%;position:absolute;left:20%;"><img src="${imageUri}" alt="${cardString}" style="width:100%;margin:10px 0 0 0;box-shadow:0px 0px 20px black;border-radius:5%;"></div></details>`;
                i = endBracketIndex + 1;
            } else {
                deckTechString = `${deckTechString}${currentChar}`;
            }
        }
        deckTechString = `${deckTechString}</p>`;

        schedule('afterRender', this, function() {
            this.deckTechHtml = deckTechString;
            this.decklistHtml = this.decklist.outerHTML.replace(' open=""', '').replaceAll('\n', '').replaceAll(/\>( )*\</g, '><').replaceAll('\x3C!---->', '').trim();
            this.decklistHtml = `<!-- Decklist begin -->\n${deckTechString}\n\n${this.decklistHtml}\n<!-- Decklist end -->`;
        });
    }

    @action copyText() {
        const textarea = this.textareaOutput;

        textarea.select();
        textarea.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(textarea.value);
    }
}
