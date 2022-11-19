import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
    @tracked wirezOpen = false;
    @tracked relevelerOpen = false;
}
