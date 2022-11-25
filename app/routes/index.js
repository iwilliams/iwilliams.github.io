import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';


class App {
    @tracked
    icon = "";

    @tracked
    name = "";

    @tracked
    isOpen = false;

    get componentName() {
        return this.name.toLowerCase().replace(/ /g, '-');
    }

    constructor(icon, name, isOpen = false) {
        this.icon = icon;
        this.name = name;
        this.isOpen = isOpen;
    }
}


class ItchApp extends App {
    @tracked
    embedUrl = "";

    @tracked
    url = "";

    @tracked
    width = 0;

    @tracked
    height = 0;

    get componentName() {
        return "itch-embed";
    }

    constructor(icon, name, url, embedUrl, width, height, isOpen = false) {
        super(icon, name, isOpen);
        this.url = url;
        this.embedUrl = embedUrl;
        this.width = width;
        this.height = height;
    }
}

export default class IndexRoute extends Route {
    model() {
        return [
            new App("🗣️", "About Me", true),
            new App("🖥️", "System Information"),
            new App("🎛️", "Settings"),
            new App("🪐", "Web Ring"),
            new ItchApp("🔌", "Wirez", "https://iwilliams.itch.io/wirez", "https://itch.io/embed-upload/2270446?color=2e222f", 800, 480),
            new ItchApp("🪞", "RELEVƎ⅃ƎЯ", "https://iwilliams.itch.io/releveler", "https://itch.io/embed-upload/2143016?color=000000", 640, 480),
            new ItchApp("🚢", "We Must Go Down With The Ship", "https://iwilliams.itch.io/we-must-go-down-with-the-ship", "https://itch.io/embed-upload/5538635?color=140c1c", 1280, 800),
            new ItchApp("💀", "Planks of Death", "https://iwilliams.itch.io/planks-of-death", "https://itch.io/embed-upload/1810938?color=202020", 320, 480),
        ]
    }
}
