import Model, { attr } from '@ember-data/model';
import ENV from 'SchedulingWidget/config/environment';
// import fetch from 'fetch';
import axios from 'axios';
export default class OfficeModel extends Model {
  @attr('string') name;
  @attr('string') phone;
  @attr('boolean') isVideo;
  @attr('boolean') isPublic;
  // @attr('string') officeAddress;
  @attr geolocation;

  // officeAddress: computed(this.geolocation.lat, this.geolocation.lng, function() {
  //   let gmapUrl = `${ENV.GOOGLE_MAPS.BASE_URL}?latlng=${this.geolocation.lat},${this.geolocation.lng}&key=${ENV.GOOGLE_MAPS.API_KEY}`;

  //   return axios.get(gmapUrl)
  //     .then(result => result.data);
  // });

  async getAddress() {
    let gmapUrl = `${ENV.GOOGLE_MAPS.BASE_URL}?latlng=${this.geolocation.lat},${this.geolocation.lng}&key=${ENV.GOOGLE_MAPS.API_KEY}`;

    return await axios.get(gmapUrl)
      .then(result => result.data);
  }

  get address() {
    return this.getAddress();
  }
}
