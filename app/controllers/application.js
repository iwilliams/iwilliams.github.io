import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
    @tracked wirezOpen = false;
    @tracked relevelerOpen = false;
    @tracked aboutOpen = true;
    @tracked deathOpen = false;
    @tracked systemOpen = false;
    @tracked portalOpen = false;
}
