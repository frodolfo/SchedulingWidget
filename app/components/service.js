import Ember from 'ember';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ServiceComponent extends Component {
  text = "Select";

  get cid() {
    return this.args.cid ?? '';
  }

  @action
  // handleClick(e) {
  //   console.log('ccid: ', e.target.dataset.ccid);
  //   console.log('cid: ', e.target.dataset.cid);
  //   console.log('cid 2: ', this.cid);
  //   // this.transitionTo(`locations?ccid=${id}&cid=${cid}`);
  // }
  handleClick(ccid) {
    console.log('cid: ', this.cid);
    console.log('ccid: ', ccid);
    // this.transitionTo(`locations?ccid=${id}&cid=${cid}`);
  }

}
