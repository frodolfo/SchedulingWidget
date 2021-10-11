import Component from '@glimmer/component';
import ENV from 'SchedulingWidget/config/environment';

export default class MapComponent extends Component {
  get src() {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${ENV.MAPBOX.ACCESS_TOKEN}`;

    return `${ENV.MAPBOX.BASE_URL}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }
}
