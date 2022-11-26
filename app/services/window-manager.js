import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class WindowManagerService extends Service {
    @tracked currentlyDragging = null

    get desktopElement() {
        return document.querySelector('.desktop');
    }

    @action
    getWindowForGrid(columns, rows, gap, gridX, gridY, gridWidth, gridHeight) {
        const { offsetWidth: desktopWidth, offsetHeight: desktopHeight } = this.desktopElement;
        
        const columnWidth = (desktopWidth - (gap * (columns + 1))) / columns;
        const rowHeight = (desktopHeight - (gap * (rows + 1))) / rows;

        const x = (columnWidth * (gridX - 1)) + (gap * gridX);
        const y = (rowHeight * (gridY - 1)) + (gap * gridY);

        const width = (columnWidth * gridWidth) + (gap * (gridWidth - 1));
        const height = (rowHeight * gridHeight) + (gap * (gridHeight - 1));

        return { x, y, width, height };
    }
}
