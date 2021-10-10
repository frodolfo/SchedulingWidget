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
  }

  return ENV;
};
