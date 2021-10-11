import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ServicesRoute extends Route {
  @service store;
  @service router;
  @tracked cid = this.cid;

  queryParams = {
    cid: {
      refreshModel: true,
    },
  };

  model(params) {
    return this.store.query('services', {
      filter: {
        clinicianId: params.cid ? params.cid : null,
      },
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
  }
}
