import { reactive } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';
import { Marker, MarkerConfigInterface } from './GoogleMapMarker';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

let google = window.google;

const TOKEN = process.env.G_MAP_API_KEY;

const loader = new Loader({
  apiKey: TOKEN || '',
  version: 'beta',
});

const MapStore = reactive({
  map: <google.maps.Map>{},
});

const markers: { [k: string]: google.maps.Marker } = reactive({});

const markerClusterers: { [k: string]: MarkerClusterer } = reactive({});

const mapOptions = {
  // Singapore center location
  center: { lat: 1.357, lng: 103.822 },
  zoom: 11,
};

const GoogleMapService = () => {
  const initMap = async (ele: HTMLElement) => {
    await loader.load();
    google = window.google;

    MapStore.map = new google.maps.Map(ele, mapOptions);
  };

  const placeMarker = (
    config: MarkerConfigInterface,
    id: string
  ): google.maps.Marker | undefined => {
    if (markers[id]) return; // Don't add duplicated markers
    const marker = new Marker(config, MapStore.map);
    marker.place();
    markers[id] = marker.getMarker();

    return marker.getMarker();
  };

  const placeMarkerClusterer = (
    configs: {
      id: string;
      config: MarkerConfigInterface;
    }[],
    clustererId: string
  ) => {
    const markersArr: google.maps.Marker[] = [];
    configs.forEach((e) => {
      const marker = placeMarker(e.config, e.id);
      if (marker) markersArr.push(marker);
    });

    if (markerClusterers[clustererId]) {
      markerClusterers[clustererId].addMarkers(Object.values(markers));
    } else {
      markerClusterers[clustererId] = new MarkerClusterer({
        map: MapStore.map,
        markers: markersArr,
      });
    }
  };

  const removeMarker = (id: string) => {
    // markers[id].remove();
    markers[id].setVisible(false)
    markers[id].setMap(null)
    delete markers[id];
  };

  return { initMap, placeMarker, placeMarkerClusterer, removeMarker };
};

export { GoogleMapService, google };
