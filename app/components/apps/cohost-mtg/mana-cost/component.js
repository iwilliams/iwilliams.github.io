import Component from '@glimmer/component';

export default class AppsCohostMtgManaCostComponent extends Component {
    get manaCost() {
        const { mana_cost, layout } = this.args.card;
        let manaCost = mana_cost || "";
        if (layout === "transform" || layout === "modal_dfc") {
            manaCost = this.args.card.card_faces[0].mana_cost;
        }
        return manaCost;
    }

    get manaHtml() {
        return this.manaCost
            .replaceAll("{U}", this.getManaHtml("{U}"))
            .replaceAll("{W}", this.getManaHtml("{W}"))
            .replaceAll("{B}", this.getManaHtml("{B}"))
            .replaceAll("{G}", this.getManaHtml("{G}"))
            .replaceAll("{R}", this.getManaHtml("{R}"))
            .replaceAll(/({[0-9X]*})/g, (match) => {
                return this.getManaHtml(match);
            });
    }

    getManaHtml(textMana) {
        let bg = "#CAC5C0";
        let text = textMana.replace("{", "").replace("}", "");
        let hasShadow = false;

        if (textMana === "{U}") {
            text = "💧";
            bg = "#C1D7E9";
            hasShadow = true;
        }

        if (textMana === "{W}") {
            text = "🌻";
            bg = "#F8F6D8";
            hasShadow = true;
        }

        if (textMana === "{B}") {
            text = "💀";
            bg = "#BAB1AB";
            hasShadow = true;
        }

        if (textMana === "{G}") {
            text = "🌳";
            bg = "#A3C095";
            hasShadow = true;
        }

        if (textMana === "{R}") {
            text = "🔥";
            bg = "#E49977";
            hasShadow = true;
        }

        return `<span style="${hasShadow ? 'text-shadow: -1px 1px black;' : ''} border-radius: 100%;background: ${bg};box-shadow: 0px 1px 0 rgb(0 0 0 / 80%);padding: 2.5px;width: 1.5em;height: 1.5em;vertical-align: middle;margin-left: 2px;display: flex;justify-content: center;align-items: center;">${text}</span>`;
    }
}
