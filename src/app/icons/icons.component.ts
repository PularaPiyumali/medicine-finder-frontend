import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocationData } from 'app/location';
import { LocationService } from 'app/location.service';

declare const google: any;
declare const L: any;
const ELEMENT_DATA: LocationData[] = [];

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})

export class IconsComponent implements OnInit {



  
  @Output() locationSelected: EventEmitter<{ latitude: number, longitude: number }> = new EventEmitter();


  public latitude: number;
  public longitude: number;
  public location = ELEMENT_DATA;

  markers: LocationData[] = [];

  constructor (private locationService : LocationService) { 
    this.onMapClick = this.onMapClick.bind(this);
  }

  ngOnInit() {
    this.getLocation();
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(latLong, 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);
    this.markers.forEach((location) => {
      const marker = L.marker([location.latitude, location.longitude]).addTo(mymap);
      
    });

    

    });
    this.watchPosition();
  }

  onMapClick(e: { latlng: { lat: number; lng: number } }) {
    const locationData: LocationData = {
      latitude: e.latlng.lat,
      longitude: e.latlng.lng
    };
    this.locationService.addLocation(locationData).subscribe(
      (response: LocationData) => {
        console.log('Location added:', response);
      },
      (error: any) => {
        console.error('Error adding location:', error);
      }
    );
  }

  public getLocation(): void {
    this.locationService.getLocation().subscribe(
      (response: LocationData[]) => {
        this.markers = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

  initializeMap() {
    var mapOptions = {
      zoom: 13,
      center: { lat: 6.9271, lng: 79.8612 },
      scrollwheel: false,
      styles: [
        {
          featureType: 'water',
          stylers: [
            { saturation: 43 },
            { lightness: -11 },
            { hue: '#0088ff' }
          ]
        },
        
      ]
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  map.addListener('click', (event) => {
  this.latitude = event.latLng.lat();
  this.longitude = event.latLng.lng();
  this.locationSelected.emit({ latitude: this.latitude, longitude: this.longitude });
});

    this.markers.forEach(markerData => {
      const marker = new google.maps.Marker({
      });
       marker.setMap(map);
    });

  }

  onLocationSelected(location: { latitude: number, longitude: number }) {
  console.log('Latitude:', location.latitude);
  console.log('Longitude:', location.longitude);
}

}

