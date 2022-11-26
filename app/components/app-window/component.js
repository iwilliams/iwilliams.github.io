import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { isEmpty } from '@ember/utils';


export default class AppWindowComponent extends Component {
    @service windowManager;

    currentMousePosX = 0;
    currentMousePosY = 0;

    @tracked
    isDragging = false;

    @tracked
    dragElement = null;

    get currentlyActive() {
        return this.windowManager.currentlyDragging == this;
    }

    get resizable() {
        if (!isEmpty(this.args.resizable)) {
            return this.args.resizable;
        }
        return true;
    }


    @action
    mouseDown(e) {
        if (e.button !== 0) return;
        e.preventDefault();
        this.currentMousePosX = e.clientX;
        this.currentMousePosY = e.clientY;
        this.isDragging = true;
        this.windowManager.currentlyDragging = this;
    }

    @action
    mouseUp(e) {
        if (this.isDragging) {
            e.preventDefault();
            this.isDragging = false;

            const { top, left } = this.dragElement.style;
            window.sessionStorage.setItem(`${this.args.app.camelizedName}Position`, [top, left].join(','));
        }
    }

    @action
    mouseMove(e) {
        if (this.isDragging) {
            e.preventDefault();
            if (e.clientY < 0) {
                return
            }
            // calculate the new cursor position:
            const pos1 = this.currentMousePosX - e.clientX;
            const pos2 = this.currentMousePosY - e.clientY;
            this.currentMousePosX = e.clientX;
            this.currentMousePosY = e.clientY;
            // set the element's new position:
            this.dragElement.style.top = (this.dragElement.offsetTop - pos2) + "px";
            this.dragElement.style.left = (this.dragElement.offsetLeft - pos1) + "px";
        }
    }

    @action
    makeActive(e) {
        this.windowManager.currentlyDragging = this;
    }

    @action
    didInsert(e) {
        this.dragElement = e;
        document.addEventListener("mousemove", this.mouseMove);
        document.addEventListener("mouseup", this.mouseUp);

        this.windowManager.currentlyDragging = this;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const windowBody = this.dragElement.querySelector('.app-window__body');

        const savedSize = window.sessionStorage.getItem(`${this.args.app.camelizedName}Size`);
        if (this.resizable && savedSize !== null) {
            let [ width, height ] = savedSize.split(',');
            width = width.substring(0, width.length - 2);
            height = height.substring(0, height.length - 2);

            width = Math.min(width, windowWidth);

            windowBody.style.width = `${width}px`;
            windowBody.style.height = `${height}px`;
        } else {
            if (this.args.initialWidth) {
                let width = this.args.initialWidth;
                width = Math.min(width, windowWidth);
                windowBody.style.width = `${width}px`;
            } else {
                windowBody.style.width = `${windowBody.offsetWidth}px`;
            }

            if (this.args.initialHeight) {
                windowBody.style.height = `${this.args.initialHeight}px`;
            } else {
                windowBody.style.height = `${windowBody.offsetHeight}px`;
            }
        }

        if (this.resizable) {
            new ResizeObserver(() => {
                const { width, height } = windowBody.style;
                window.sessionStorage.setItem(`${this.args.app.camelizedName}Size`, [width, height].join(','));
            }).observe(windowBody);
        }

        const width = this.dragElement.offsetWidth;
        const height = this.dragElement.offsetHeight;


        if (windowWidth <= 640) {
            this.dragElement.style.top = "0";
            this.dragElement.style.left = "0";
            return;
        }

        const savedPosition = window.sessionStorage.getItem(`${this.args.app.camelizedName}Position`);
        if (savedPosition !== null) {
            let [top, left] = savedPosition.split(',');
            if (top !== undefined && left !== undefined) {
                top = top.substring(0, top.length - 2);
                left = left.substring(0, left.length - 2);

                left = Math.max(0, Math.min(left, windowWidth - width));
                top = Math.max(0, Math.min(top, windowHeight - height));

                this.dragElement.style.top = `${top}px`;
                this.dragElement.style.left = `${left}px`;
                return
            }
        }

        if (this.args.offsetX) {
            let offsetX = this.args.offsetX;
            if (offsetX < 0) {
                offsetX = window.innerWidth - this.dragElement.offsetWidth + offsetX;
            }
            this.dragElement.style.left = `${offsetX}px`;
        } else {
            this.dragElement.style.left = `${(windowWidth - width)*.5}px`;
        }

        if (this.args.offsetY) {
            let offsetY = this.args.offsetY;
            if (offsetY < 0) {
                offsetY = window.innerHeight - this.dragElement.offsetHeight + offsetY;
            }
            this.dragElement.style.top = `${offsetY}px`;
        } else {
            this.dragElement.style.top = `${(windowHeight - height)*.5}px`;
        }

    }

    @action
    willDestroy() {
        document.removeEventListener("mousemove", this.mouseMove);
        document.removeEventListener("mouseup", this.mouseUp);
        if (this.windowManager.currentlyDragging === this) {
            this.windowManager.currentlyDragging = null;
        }
    }
}
