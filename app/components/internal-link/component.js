import Component from '@glimmer/component';
import { service } from '@ember/service';


export default class InternalLinkComponent extends Component {
    @service router;

    get title() {
        return `${window.location.origin}/${this.router.urlFor(this.args.route)}`;
    }
}
