import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class LocationsController extends Controller {
  @service router;

  @tracked cid = null;
  @tracked address = null;
}
