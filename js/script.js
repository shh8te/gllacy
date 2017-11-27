function initMap() {
  var gllacy = {lat: 59.938536, lng: 30.322879};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: gllacy
  });
  var marker = new google.maps.Marker({
    position: gllacy,
    map: map,
    icon: 'img/map_pin.png'
  });
};
initMap();
