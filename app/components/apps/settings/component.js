import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class AppsSettingsComponent extends Component {
    @service settings;

    @action
    setWallpaper(event) {
        const wallpaper = this.settings.wallpapers[event.target.value];
        this.settings.setWallpaper(wallpaper);
    }

    @action
    setWallpaperSize(event) {
        const wallpaperSize = this.settings.wallpaperSizes[event.target.value];
        this.settings.setWallpaperSize(wallpaperSize);
    }
}
