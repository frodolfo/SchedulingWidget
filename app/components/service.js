import Component from '@glimmer/component';
// import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ServiceComponent extends Component {
  // @service router;

  text = 'Select';

  get cid() {
    return this.args.cid ?? '';
  }

  @action
  handleClick(ccid) {
    let controller = this.args.controller;

    if (typeof controller === 'object' && controller.showLocations) {
      controller.showLocations(this.cid, ccid);
    }

    // Retrieve current route name
    // console.log(Ember.getOwner(this).lookup('router:main').get('currentRouteName'));
  }
}
