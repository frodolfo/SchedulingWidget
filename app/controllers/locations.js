import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'SchedulingWidget/config/environment';
import fetch from 'fetch';

export default class LocationsController extends Controller {
  @service router;

  @tracked cid = null;
  @tracked address = null;
}
