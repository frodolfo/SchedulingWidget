import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ServiceRoute extends Route {
  @service store;

  queryParams = {
    cid: {
      refreshModel: true,
    },
  };

  async model(params) {
    // return this.store.query('cpt-codes', {
    return this.store.query('sevices', {
      filter: {
        clinicianId: params.cid,
      },
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
  }
}
