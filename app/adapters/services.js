import ApplicationAdapter from './application';
// import fetch from 'fetch';
// import ENV from 'SchedulingWidget/config/environment';
export default class ServicesAdapter extends ApplicationAdapter {
  pathForType() {
    return 'cpt-codes';
  }

  // queryRecord(store, type, query) {
  //   const config = {
  //     headers: {
  //       Accept: 'application/vnd.api+json',
  //       'Api-Version': '2020-01-01',
  //       'Application-Build-Version': '0.0.1',
  //       'Application-Platform': 'web',
  //     }
  //   };

  //   return fetch(`${ENV.APP.corsAnywhereUrl}/${ENV.APP.clientPortalEndpoint}/client-portal-api/`, config);
  // }
}
