import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css'; 

import { createApp } from 'vue';
import WeatherComponent from './components/WeatherComponent.vue';

createApp({
    components: {
      'weather-component': WeatherComponent
    }
  }).mount('#app');
