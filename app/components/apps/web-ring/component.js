import Component from '@glimmer/component';
import { cached, tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


const links = [
    { url: "https://modusinteractivegames.com/", name: "Modus Interactive Games" },
    { url: "https://nikitavychuz.com/", name: "Nikita Vychuzhanin" },
    { url: "https://warrrkus.itch.io/", name: "Warkus Computer Entertainment" },
    { url: "http://largoinfinite.com/", name: "Largo Infinite: Stuff created by Z.&nbsp;Bill" },
    { url: "https://terradev64.github.io/", name: "Terra Dev 64" },
    { url: "https://www.brycebucher.net/", name: "Bryce Bucher" },
    { url: "https://xena-spectrale.net/", name: "Xena Spectrale" },
    { url: "https://tlalicedev.github.io/", name: "Alice Dev" },
    { url: "https://hauntedps1.itch.io/", name: "The Haunted PS1" },
    { url: "https://yorped.com/horrorgifs/index.html", name: "The Horror GIF Necronomicon" },
    { url: "https://archive.org/details/software", name: "Internet Archive: Software" },
    { url: "https://gifcities.org/", name: "GifCities" },
    { url: "https://developer.mozilla.org/en-US/docs/Web", name: "MDN Web Docs" },
    { url: "https://www.macintoshrepository.org/",name: "Macintosh Repository" }
]

export default class AppsWebRingComponent extends Component {
    @tracked links = links;

    @cached get randomizedLinks() {
        return this.links
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value);
    }

    @tracked index = Math.floor(Math.random() * this.links.length);

    @action
    changeIndex(newIndex) {
        const count = this.links.length;
        this.index = (newIndex % count + count) % count;
    }
}
