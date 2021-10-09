import Controller from '@ember/controller';

export default class ServicesController extends Controller {
  get id() {
    return this.model.reduce((acc, item) => {
      console.log('model id item:', item);
      return item.id;
    }, 0);
  }

  get description() {
    return this.model.reduce((acc, item) => {
      return item.description;
    }, 0);
  }

  get duration() {
    return this.model.reduce((acc, item) => {
      return item.duration;
    }, 0);
  }
}
