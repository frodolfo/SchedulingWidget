import Controller from '@ember/controller';
import ENV from 'SchedulingWidget/config/environment';

export default class ServiceController extends Controller {
  queryParams = ['filter', 'clinicianId'];
  clinicianId = ENV.APP.clinicianId;
}
