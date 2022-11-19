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


    get resizable() {
        if (!isEmpty(this.args.resizable)) {
            return this.args.resizable;
        }
        return true;
    }


    @action
    mouseDown(e) {
        // if (e.target != this.dragElement) return;
        e.preventDefault();
        this.currentMousePosX = e.clientX;
        this.currentMousePosY = e.clientY;
        this.isDragging = true;
        this.windowManager.currentlyDragging = this;
    }

    @action
    mouseUp(e) {
        e.preventDefault();
        this.isDragging = false;
    }

    @action
    mouseMove(e) {
        if (this.isDragging) {
            e.preventDefault();
            // calculate the new cursor position:
            const pos1 = this.currentMousePosX - e.clientX;
            const pos2 = this.currentMousePosY - e.clientY;
            this.currentMousePosX = e.clientX;
            this.currentMousePosY = e.clientY;
            // set the element's new position:
            this.dragElement.style.top = (this.dragElement.offsetTop - pos2) + "px";
            this.dragElement.style.left = (this.dragElement.offsetLeft - pos1) + "px";
            console.log("weee");
        }
    }

    @action
    didInsert(e) {
        this.dragElement = e;
        document.addEventListener("mousemove", this.mouseMove);
        document.addEventListener("mouseup", this.mouseUp);
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
