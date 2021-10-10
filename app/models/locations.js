import Model, { attr } from '@ember-data/model';

export default class LocationsModel extends Model {
  @attr('string') id;
  @attr('string') type;
  @attr('object') links;
  @attr('object') attributes;
}
