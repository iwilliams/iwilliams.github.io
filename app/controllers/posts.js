import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class PostsController extends Controller {
    @service router;

    get windowTitle() {
        const title = `${this.model.icon} ${this.model.name}`;
        if (this.router.currentRouteName !== "posts.index") {
            return `${title} > ${this.router.currentRouteName.split('.')[1].substring(4).replaceAll('-', ' ')}`;
        }
        return title;
    }

    get showPostsLink() {
        return this.router.currentRouteName !== "posts.index";
    }
}
