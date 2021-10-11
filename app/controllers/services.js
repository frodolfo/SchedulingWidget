import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
export default class ServicesController extends Controller {
  queryParams = ['filter[clinicianId]'];

  @tracked cid = null;


  // get id() {
  //   return this.model.reduce((acc, item) => {
  //     console.log('model id item:', item);
  //     return item.id;
  //   }, 0);
  // }
  // get description() {
  //   return this.model.reduce((acc, item) => {
  //     return item.description;
  //   }, 0);
  // }
  // get duration() {
  //   return this.model.reduce((acc, item) => {
  //     return item.duration;
  //   }, 0);
  // }
  filteredServices() {
    let cid = this.cid;
    let services = this.model;

    if (cid) {
      return services.filterBy('filter[clinicianId]', cid);
    } else {
      return services;
    }
  }

  showLocations(id) {
    console.log('clicked on ', id);
  }
}
