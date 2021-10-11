import RESTAdapter from '@ember-data/adapter/rest';
import ENV from 'SchedulingWidget/config/environment';
export default class ApplicationAdapter extends RESTAdapter {
  host =
    ENV.environment === 'development'
      ? `${ENV.APP.corsAnywhereUrl}/${ENV.APP.clientPortalEndpoint}`
      : ENV.APP.clientPortalEndpoint;

  namespace = ENV.APP.clientPortalNamespace;

  headers = ENV.APP.clientPortalHeaders;
}
