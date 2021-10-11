import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LocationComponent extends Component {
  text = 'Select';

  @action
  handleClick(ccid) {
    console.log('ccid: ', ccid);
    // TODO: go to Links.self value
  }
}
