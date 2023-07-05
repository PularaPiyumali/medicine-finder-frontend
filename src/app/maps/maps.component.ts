import { Component, OnInit } from '@angular/core';

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
    var myLatlng = new google.maps.LatLng(6.9271, 79.8612);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
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

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: 'Hello World!'
    });

    marker.setMap(map);
  }
}
