import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class ServicesController extends Controller {
  @service router;

  @tracked cid = null;

  showLocations(cid = null, ccid = null) {
    this.router.transitionTo(`/locations?cid=${cid}&ccid=${ccid}`);
  }
}
