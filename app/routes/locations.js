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

  model(params) {
    return this.store.query('locations', {
      filter: {
        clinicianId: params.cid,
        cptCodeId: params.ccid,
      },
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
  }
}
