import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ServiceAdapter extends JSONAPIAdapter {
  host = 'https://johnny-appleseed.clientsecure.me';
  namespace = '/client-portal-api/';
  // /client-portal-api/cpt-codes?filter[clinicianId]=2
}
