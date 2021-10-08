import ApplicationAdapter from './application';
import ENV from 'SchedulingWidget/config/environment';

export default class OfficesAdapter extends ApplicationAdapter {
  host = ENV.APP.clientPortalEndpoint;
  namespace = 'client-portal-api';
  headers = {
    Accept: 'application/vnd.api+json',
    'Api-Version': '2020-01-01',
    'Application-Build-Version': '0.0.1',
    'Application-Platform': 'web',
  };
}
