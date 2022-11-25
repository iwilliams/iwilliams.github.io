import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class AppsSettingsComponent extends Component {
    @service settings;

    @action
    setWallpaper(event) {
        this.settings.currentWallpaper = this.settings.wallpapers[event.target.value];
        window.localStorage.setItem("wallpaper", this.settings.currentWallpaper.name);
    }
}
