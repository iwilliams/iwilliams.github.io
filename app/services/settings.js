import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';


const wallpaperSizes = [
    { name: "Auto", className: "bg-auto" },
    { name: "Cover", className: "bg-cover" },
    { name: "Contain", className: "bg-contain" },
    { name: "Stretch", className: "bg-stretch" }
]

const wallpapers = [
    { name: "None", className: "bg-none", defaultSize: wallpaperSizes[0] },
    { name: "Marble - Green", className: "bg-marble-green", defaultSize: wallpaperSizes[0] },
    { name: "Marble - Black", className: "bg-marble-black", defaultSize: wallpaperSizes[0] },
    { name: "Clouds", className: "bg-clouds", defaultSize: wallpaperSizes[0] },
    { name: "Stars", className: "bg-stars", defaultSize: wallpaperSizes[0] },
    { name: "Cyber Lancer", className: "bg-cyber-lancer", defaultSize: wallpaperSizes[2] },
    { name: "Crystalline Plain", className: "bg-crystalline-plain", defaultSize: wallpaperSizes[1] },
    { name: "Digital Transcendence", className: "bg-digital-transcendence", defaultSize: wallpaperSizes[1] },
    { name: "Nuclease", className: "bg-nuclease", defaultSize: wallpaperSizes[1] },
    { name: "Snow 1", className: "bg-snow-1", defaultSize: wallpaperSizes[0] },
    { name: "Snow 2", className: "bg-snow-2", defaultSize: wallpaperSizes[0] }
];

const savedWallpaper = window.localStorage.getItem("wallpaper");
const savedWallpaperSize = window.localStorage.getItem("wallpaperSize");


export default class SettingsService extends Service {
    @tracked
    currentWallpaper = !savedWallpaper ? wallpapers[9] : wallpapers.find(wallpaper => wallpaper.name === savedWallpaper);

    @tracked
    wallpapers = wallpapers;

    setWallpaper(wallpaper) {
        this.currentWallpaper = wallpaper;
        window.localStorage.setItem("wallpaper", this.currentWallpaper.name);
        this.setWallpaperSize(this.currentWallpaper.defaultSize);
    }

    @tracked
    currentWallpaperSize = !savedWallpaperSize ? this.currentWallpaper.defaultSize : wallpaperSizes.find(wallpaperSize => wallpaperSize.name === savedWallpaperSize);

    @tracked
    wallpaperSizes = wallpaperSizes;

    setWallpaperSize(wallpaperSize) {
        this.currentWallpaperSize = wallpaperSize;
        window.localStorage.setItem("wallpaperSize", this.currentWallpaperSize.name);
    }
}
