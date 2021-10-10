import Model, { attr } from '@ember-data/model';

export default class ServicesModel extends Model {
  // @attr attributes;
  // @attr('string') id;
  // @attr links;
  // @attr('string') type;
  @attr('string') description;
  @attr('number') duration;
  @attr rate;
  @attr callToBook;

  // @attr data;
  // @attr links;

  // get services() {
  //   return this.data;
  // }
}
