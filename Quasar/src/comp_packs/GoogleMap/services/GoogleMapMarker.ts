export interface MarkerConfigInterface {
  lat: number;
  lng: number;
}

export class Marker {
  markerObject: google.maps.Marker;
  map: google.maps.Map;
  config: MarkerConfigInterface;

  constructor(config: MarkerConfigInterface, map: google.maps.Map) {
    this.config = config;
    this.map = map;
    this.markerObject = new google.maps.Marker();
  }

  getMarker() {
    return this.markerObject;
  }

  remove() {
    /**
     * Don't know whym setMap(null) cannot remove the marker from map
     * have to set the marker invisible first. However, this solution
     * may not good for very large amount of map markers.  I  am  not
     * sure if the marker still inside the map or been really removed
     */
    this.markerObject.setVisible(false);
    this.markerObject.setMap(null);
  }

  place() {
    this.markerObject = new google.maps.Marker({
      position: new google.maps.LatLng(this.config.lat, this.config.lng),
    });
    this.markerObject.setMap(this.map);
  }
}
