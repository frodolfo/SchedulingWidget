import Model, { attr } from '@ember-data/model';
import ENV from 'SchedulingWidget/config/environment';
// import fetch from 'fetch';
import axios from 'axios';
export default class OfficeModel extends Model {
  @attr('string') name;
  @attr('string') phone;
  @attr('boolean') isVideo;
  @attr('boolean') isPublic;
  @attr('string') officeAddress;
  @attr geolocation;

  async getAddress() {
    let gmapUrl = `${ENV.GOOGLE_MAPS.BASE_URL}?latlng=${this.geolocation.lat},${this.geolocation.lng}&key=${ENV.GOOGLE_MAPS.API_KEY}`;

    return await axios.get(gmapUrl)
      .then(result => {
        // this.officeAddress = result.data;
        // console.log('officeAddress: ', this.officeAddress);
        return result.data;
      });
  }

  get address() {
    // fetch(`${ENV.GOOGLE_MAPS.BASE_URL}?latlng=${this.geolocation.lat},${this.geolocation.lng}&key=${ENV.GOOGLE_MAPS.API_KEY}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     let location = data.results.length > 0 ? data.results : 'Address unknown';
    //     console.log(location);
    //     // this.officeAddress = data.results;
    //     return location;
    //   });
    // let location = this.getAddress().then(data => data);
    // console.log('location: ', location);

    // let gmapUrl = `${ENV.GOOGLE_MAPS.BASE_URL}?latlng=${this.geolocation.lat},${this.geolocation.lng}&key=${ENV.GOOGLE_MAPS.API_KEY}`;

    // return axios.get(gmapUrl)
    //   .then(result => {
    //     // this.address = result.data;
    //     // console.log('officeAddress: ', this.address);
    //     return result.data;
    //   });

    return this.getAddress();
  }

}
