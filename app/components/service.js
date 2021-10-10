import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ServiceComponent extends Component {
  @action
  showLocations(id) {
    console.log('id: ', id);
    // TODO: go to /locations
  }
}
