import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { camelize } from '@ember/string';
import { action } from '@ember/object';
import { service } from '@ember/service';


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

    get camelizedName() {
        return camelize(this.name);
    }

    constructor(icon, name, isOpen = false) {
        this.icon = icon;
        this.name = name;

        let storedIsOpen = window.sessionStorage.getItem(`${this.camelizedName}IsOpen`);
        this.isOpen = storedIsOpen === null ? isOpen : storedIsOpen === "true";
    }

    @action
    open() {
        this.isOpen = true;
        window.sessionStorage.setItem(`${this.camelizedName}IsOpen`, true);
    }

    @action
    close() {
        this.isOpen = false;
        window.sessionStorage.setItem(`${this.camelizedName}IsOpen`, false);
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

class PostsApp extends App {
    router = null;

    constructor(router) {
        super("📖", "Posts");
        this.router = router;
    }

    @action
    open() {
        this.router.transitionTo('posts');
    }

    @action
    close() {
        this.router.transitionTo('application');
    }
}

export default class ApplicationRoute extends Route {
    @service router;

    model() {
        return [
            new App("🗣️", "About Me", true),
            new App("🖥️", "System Information"),
            new App("📌", "MOTD", true),
            new PostsApp(this.router),
            new App("🎛️", "Settings"),
            new App("🪐", "Web Ring"),
            new App("🧙‍♂️", "Cohost MTG"),
            new ItchApp("🔌", "Wirez", "https://iwilliams.itch.io/wirez", "https://itch.io/embed-upload/2270446?color=2e222f", 800, 480),
            new ItchApp("🪞", "RELEVƎ⅃ƎЯ", "https://iwilliams.itch.io/releveler", "https://itch.io/embed-upload/2143016?color=000000", 640, 480),
            new ItchApp("🚢", "We Must Go Down With The Ship", "https://iwilliams.itch.io/we-must-go-down-with-the-ship", "https://itch.io/embed-upload/5538635?color=140c1c", 1280, 800),
            new ItchApp("💀", "Planks of Death", "https://iwilliams.itch.io/planks-of-death", "https://itch.io/embed-upload/1810938?color=202020", 320, 480),
        ]
    }
}
