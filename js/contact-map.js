function initMap() {
  var saude = {
      lat: -23.5515,
      lng: -46.5978
  };
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: saude,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var styles = [
      {
          stylers: [
              {
                  saturation: -100
              }
        ]
      }, {
          featureType: "road",
          elementType: "geometry",
          stylers: [
              {
                  lightness: 100
              },
              {
                  visibility: "simplified"
              }
        ]
      }, {
          featureType: "road",
          elementType: "labels",
          stylers: [
              {
                  visibility: "off"
              }
        ]
      }
    ];

  map.setOptions({
      draggable: false,
      zoomControl: false,
      scrollwheel: false,
      styles: styles
  });

  var contentString = "<div class = 'gmaps-info'><p>Universidade São Judas Tadeu<br>Rua.Taquari, 546<br>Mooca, SP</p></div>";

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200,
  });

  var pinColor = "0393CA";
  var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
      new google.maps.Size(21, 34),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 34));
  var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
      new google.maps.Size(40, 37),
      new google.maps.Point(0, 0),
      new google.maps.Point(12, 35));

  var marker = new google.maps.Marker({
      position: saude,
      draggable: true,
      icon: pinImage,
      map: map
  });

  infowindow.open(map, marker);
}