'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'SchedulingWidget',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },
    contentSecurityPolicy: {
      // ... other stuff here
      'connect-src': "'self' https://johnny-appleseed.clientsecure.me",
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      clientPortalEndpoint: 'https://johnny-appleseed.clientsecure.me',
      clientPortalNamespace: 'client-portal-api',
      clientPortalHeaders: {
        Accept: 'application/vnd.api+json',
        'Api-Version': '2020-01-01',
        'Application-Build-Version': '0.0.1',
        'Application-Platform': 'web',
      },
    },
    GOOGLE_MAPS: {
      API_KEY: 'AIzaSyCjumT8NNt9ldhffQ-hkRa0nV6ZrVr5x-g',
      BASE_URL: 'https://maps.googleapis.com/maps/api/geocode/json'
    },
    MAPBOX: {
      ACCESS_TOKEN: 'pk.eyJ1IjoiZnJvZG9sZm82MTkiLCJhIjoiY2t1bWVrNml6M3I4MTJ6bW5lOGxnZTRuaCJ9.YymQgdSLqYPDJfffTjJM3Q',
      BASE_URL: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static'
    },
  };

  if (environment === 'development') {
    ENV.APP.rootElement = '#content';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com';
    ENV.APP.contentSecurityPolicy = {
      // ... other stuff here
      'connect-src': "'self' https://johnny-appleseed.clientsecure.me",
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.APP.rootElement = '#content';
    ENV.rootURL = '/SchedulingWidget/';
  }

  return ENV;
};
