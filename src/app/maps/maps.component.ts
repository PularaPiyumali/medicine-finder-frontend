import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

declare const google: any;

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
    // Load the Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDwMOtsIXLfoUFU6ZqmeD1_2wmSV0dJNeA';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Initialize the map when the API is loaded
    script.onload = () => {
      this.initializeMap();
    };
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
        // Rest of the styles...
      ]
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Inside your map component
    // Inside your map component
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

  // Inside your parent component's class
  onLocationSelected(location: { latitude: number, longitude: number }) {
  // Handle the latitude and longitude values here
  console.log('Latitude:', location.latitude);
  console.log('Longitude:', location.longitude);
  // You can also save the values to the database or perform any other necessary actions
}
}
