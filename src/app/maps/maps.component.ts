import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

declare const google: any;
declare const L: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  
  @Output() locationSelected: EventEmitter<{ latitude: number, longitude: number }> = new EventEmitter();


  public latitude: number;
  public longitude: number;


  

  markers: Marker[] = [
    { lat: 6.9271, lng: 79.8612, label: 'Marker 1' },
    { lat: 6.9128, lng: 79.8507, label: 'Marker 2' },
    { lat: 6.9044, lng: 79.8540, label: 'Marker 3' },
  
  ];

  constructor() { }

  ngOnInit() {
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
    let marker1 = L.marker([6.9271, 79.8612]).addTo(mymap);
    let marker2 = L.marker([6.9128, 79.8507]).addTo(mymap); 
    let marker3 = L.marker([6.9044, 79.8540]).addTo(mymap);
    let marker4 = L.marker(latLong).addTo(mymap);

    let popup = L.popup();

function onMapClick(e: { latlng: { toString: () => string; }; }) {
  
        console.log(e.latlng);
}

mymap.on('click', onMapClick);
    });
    this.watchPosition();
    // //Load the Google Maps API script dynamically
    // const script = document.createElement('script');
    // script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDwMOtsIXLfoUFU6ZqmeD1_2wmSV0dJNeA';
    // script.async = true;
    // script.defer = true;
    // document.head.appendChild(script);

    // //Initialize the map when the API is loaded
    // script.onload = () => {
    //   this.initializeMap();
    // };
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
    //var myLatlng = new google.maps.LatLng(6.9271, 79.8612);
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

    //Inside your map component
    //Inside your map component
  map.addListener('click', (event) => {
  this.latitude = event.latLng.lat();
  this.longitude = event.latLng.lng();
  this.locationSelected.emit({ latitude: this.latitude, longitude: this.longitude });
});

    this.markers.forEach(markerData => {
      const marker = new google.maps.Marker({
        position: { lat: markerData.lat, lng: markerData.lng },
        title: markerData.label
      });

      marker.setMap(map);
    });

  }

  //Inside your parent component's class
  onLocationSelected(location: { latitude: number, longitude: number }) {
  //Handle the latitude and longitude values here
  console.log('Latitude:', location.latitude);
  console.log('Longitude:', location.longitude);
  //You can also save the values to the database or perform any other necessary actions
}
}
