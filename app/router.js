import EmberRouter from '@ember/routing/router';
import config from 'SchedulingWidget/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('services');
  this.route('locations');
});
