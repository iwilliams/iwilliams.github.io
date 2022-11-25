import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

const wallpapers = [
    { name: "None", className: "bg-none" },
    { name: "Marble - Green", className: "bg-marble-green" },
    { name: "Marble - Black", className: "bg-marble-black" },
    { name: "Clouds", className: "bg-clouds" },
    { name: "Stars", className: "bg-stars" },
    { name: "Cyber Lancer", className: "bg-cyber-lancer" },
    { name: "Crystalline Plain", className: "bg-crystalline-plain" },
    { name: "Digital Transcendence", className: "bg-digital-transcendence" },
    { name: "Nuclease", className: "bg-nuclease" }
]

export default class SettingsService extends Service {
    @tracked
    currentWallpaper = wallpapers[1];

    @tracked
    wallpapers = wallpapers;
}
