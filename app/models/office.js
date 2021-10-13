import Model, { attr } from '@ember-data/model';
import ENV from 'SchedulingWidget/config/environment';
// import fetch from 'fetch';
import axios from 'axios';
export default class OfficeModel extends Model {
  @attr('string') name;
  @attr('string') phone;
  @attr('boolean') isVideo;
  @attr('boolean') isPublic;
  @attr officeAddress;
  @attr geolocation;

  // async getAddress() {
  //   let gmapUrl = `${ENV.GOOGLE_MAPS.BASE_URL}?latlng=${this.geolocation.lat},${this.geolocation.lng}&key=${ENV.GOOGLE_MAPS.API_KEY}`;

  //   // return await axios.get(gmapUrl).then((result) => result.data);
  //   return await axios.get(gmapUrl);
  // }
  getAddress() {
    let gmapUrl = `${ENV.GOOGLE_MAPS.BASE_URL}?latlng=${this.geolocation.lat},${this.geolocation.lng}&key=${ENV.GOOGLE_MAPS.API_KEY}`;

    // return await axios.get(gmapUrl).then((result) => result.data);
    axios.get(gmapUrl)
      .then(result => {
        console.log('result: ', result);
        this.officeAddress = result.data.results;
        console.log('this.officeAddress: ', this.officeAddress);
      });
  }

  get address() {
    return this.getAddress();
  }
}
