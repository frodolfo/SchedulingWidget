import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ServicesRoute extends Route {
  @service store;
  @tracked cid = this.cid;

  queryParams = {
    cid: {
      refreshModel: true,
    },
  };

  model(params) {
    // const payload = await this.store.queryRecord('services', {
    // // const payload = await this.store.findAll('services', {
    //   filter: {
    //     clinicianId: params.cid,
    //   },
    // });

    // return payload;

    // return this.store.findAll('services', {
    //   filter: {
    //     clinicianId: params.cid,
    //   },
    // });

    // this.store.queryRecord('services', {
    //   filter: {
    //     clinicianId: params.cid,
    //   },
    // }).then(payload => {
    //   // let data = user.get('data');
    //   let data = payload;
    //   console.log(`data is ${data}`);
    // });

    // return this.store.queryRecord('services', {
    //     filter: {
    //       clinicianId: params.cid,
    //     },
    //   });

    // return this.store.findAll('services');

    // this.store
    //   .query('services', {
    //     filter: {
    //       clinicianId: params.cid,
    //     },
    //   })
    //   .then(function (data) {
    //     // Do something with `peters`
    //     console.log('data: ', data);
    //   })
    //   .then(result => {
    //     console.log('result: ', result);
    //   });

    // WORKING
    return this.store.query('services', {
      filter: {
        clinicianId: params.cid,
      },
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
  }
}
