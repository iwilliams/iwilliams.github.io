import EmberRouter from '@ember/routing/router';
import config from 'iwilliams/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('posts', function() {
    this.route('001-I-Think-You-Should-Make-a-Website');
  });
});
