import { reactive } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';

let google = window.google;

const TOKEN = process.env.G_MAP_API_KEY;

const loader = new Loader({
  apiKey: TOKEN || '',
  version: 'beta',
});

const MapStore = reactive({
  map: <google.maps.Map>{},
});

const GoogleMapService = () => {
  const initMap = async (ele: HTMLElement) => {
    await loader.load();
    google = window.google;
    const mapOptions = {
      center: { lat: 1.357, lng: 103.822 },
      zoom: 9,
    };
    MapStore.map = new google.maps.Map(ele, mapOptions);
  };

  return { initMap };
};

export { GoogleMapService, google };
