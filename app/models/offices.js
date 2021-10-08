import Model, { attr } from '@ember-data/model';

export default class OfficesModel extends Model {
  @attr('string') id;
  @attr('string') name;
  @attr('string') phone;
  @attr('boolean') isVideo;
  @attr('object') geolocation;
  @attr('boolean') isPublic;
}
