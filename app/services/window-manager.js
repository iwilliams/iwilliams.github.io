import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class WindowManagerService extends Service {
    @tracked currentlyDragging = null
}
