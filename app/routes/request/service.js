import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class RequestServiceRoute extends Route {
  @service store;

  queryParams = {
    cid: {
      refreshModel: true,
    },
  };

  async model(params) {
    return this.store.query('cpt-codes', {
      filter: {
        clinicianId: params.cid,
      },
    });
  }
}
