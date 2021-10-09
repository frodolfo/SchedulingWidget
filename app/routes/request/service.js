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
    // let modelData = this.store.query('cpt-codes', {
    let modelData = this.store.query('services', {
      filter: {
        clinicianId: params.cid,
      },
    });

    console.log('modelData: ', modelData);

    return modelData;
  }

  // setupController(controller, model) {
  //   super.setupController(controller, model);
  // }
}
