import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LocationsRoute extends Route {
  @service store;

  model() {
    return this.store.query('locations', {
      filter: {
        clinicianId: params.cid,
        cptCodeId: params.ccid
      },
    });
  }
}
