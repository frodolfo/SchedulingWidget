import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class LocationComponent extends Component {
  text = 'Select';

  @tracked officeAddress = null;

  async resolvePromise() {
    return await this.args.address;
  }

  get officeLocation() {
    // console.log('this.geolocation: ', this.args.address.then(data => data));
    let value = this.resolvePromise();
    console.log('value: ', value);
    return value;
  }

  @action
  handleClick(url) {
    console.log('url: ', url.self);
    window.location.href = url.self;
  }
}
