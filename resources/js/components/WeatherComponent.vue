<template>
  <div class="container mx-auto p-4">
    <div class="input-group mb-3">
      <input v-model="city" type="text" class="form-control" placeholder="Enter city" aria-label="Enter city">
      <button @click="fetchWeather" class="btn btn-primary">
        Search
      </button>
    </div>

    <div v-if="loading" class="d-flex justify-content-center mt-4">
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>

    <div v-if="placeDetails.length > 0" class="mt-4">
      <h3 class="text-center mb-4">Nearby Places and Weather Info</h3>
      <div v-for="place in placeDetails" :key="place.name" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ place.name }}</h5>
          <p class="card-text">{{ place.address }}</p>
          <p class="card-text">
            <strong>Temperature:</strong> {{ place.forecast.temp }}°C <br>
            <strong>Weather:</strong> {{ place.forecast.description }}
          </p>
        </div>
      </div>
    </div>


    <div v-if="error" class="alert alert-danger mt-4">
      {{ error }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: '',
      placeDetails: [], 
      error: null
    };
  },
  methods: {
    async fetchWeather() {
      if (this.city === '') return;
      this.placeDetails = [];
      this.error = null;
      this.loading = true;

      try {
        const response = await axios.get('api/get-weather', {
          params: { search: this.city }
        });
        
        this.placeDetails = response.data.places_info;
      } catch (error) {
        console.error(error);
        this.error = 'Error fetching weather data. Please try again.';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
.input-group {
  display: flex;
  justify-content: center;
}
.card {
  margin-bottom: 15px;
}
.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>