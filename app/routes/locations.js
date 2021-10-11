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
