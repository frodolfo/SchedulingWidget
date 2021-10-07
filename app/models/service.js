import Model, { attr } from '@ember-data/model';

export default class ServiceModel extends Model {
  @attr('string') id;
  @attr('string') description;
  @attr('number') duration;
  @attr('string') link;
}
