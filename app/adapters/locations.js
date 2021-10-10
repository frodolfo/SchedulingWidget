import ApplicationAdapter from './application';

export default class LocationsAdapter extends ApplicationAdapter {
  pathForType() {
    return 'offices';
  }
}
