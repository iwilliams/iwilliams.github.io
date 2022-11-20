import Component from '@glimmer/component';
import { DateTime } from "luxon";
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class TaskBarComponent extends Component {
    @tracked now = null;

    get time() {
        if (this.now == null) return "";
        return this.now.toLocaleString(DateTime.TIME_WITH_SECONDS);
    }

    get fullDate() {
        if (this.now == null) return "";
        return this.now.toLocaleString(DateTime.DATE_HUGE);
    }

    constructor() {
        super(...arguments);
        requestAnimationFrame(this.setTime);
    }

    @action
    setTime() {
        this.now = DateTime.now();
        requestAnimationFrame(this.setTime);
    }
}
