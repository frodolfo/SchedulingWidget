import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LocationsRoute extends Route {
  @service store;
  @tracked cid = this.cid;
  @tracked ccid = this.ccid;

  queryParams = {
    cid: {
      refreshModel: true,
    },
    ccid: {
      refreshModel: true,
    },
  };

  afterModel(model, transition) {
    if (model.get('length') === 1) {
      // this.transitionTo('post', model.get('firstObject'));
      console.log('we got our model');
    }
  }

  model(params) {
    let filterConfig = {
      clinicianId: params.cid ? params.cid : null,
      cptCodeId: params.ccid ? params.ccid : null,
    };

    return this.store.query('locations', {
      filter: {
        ...filterConfig,
      },
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
  }
}
