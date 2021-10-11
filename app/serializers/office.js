import ApplicationSerializer from './application';

export default class OfficeSerializer extends ApplicationSerializer {
  // handle dasherized attributes
  keyForAttribute(key) {
    return key;
  }
}
