import Model, { attr } from '@ember-data/model';

export default class ServicesModel extends Model {
  @attr('string') id;
  @attr('string') description;
  @attr('number') duration;
  @attr('string') rate;
  @attr('string') callToBook;
}
