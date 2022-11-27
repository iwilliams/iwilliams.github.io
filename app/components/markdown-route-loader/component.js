import Component from '@glimmer/component';
import { service } from '@ember/service';
import { task } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';


export default class MarkdownRouteLoaderComponent extends Component {
    @service markdown;
    @service router;

    fetchMarkdown = task(async () =>{
        const response = await fetch("/posts/" + this.router.currentRouteName.split('.')[1].toLowerCase() + '.md');
        const content = await response.text();
        this.markdownContent = content;
    });

    @tracked
    markdownContent = "";

    get html() {
        return this.markdownContent === "" ? "" : this.markdown.toHtml(this.markdownContent);
    }
}
