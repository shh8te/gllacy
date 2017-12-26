const targetsArr = [...document.querySelectorAll('.class-toggling')];

function toggleActiveClass(input) {
  input.closest('.visibility').classList.toggle('visibility-animation')

  if (input.value) return;

  input.classList.toggle('active');
}

targetsArr.forEach(elem => {
 elem.addEventListener('focus', (event) => toggleActiveClass(event.target));
 elem.addEventListener('blur', (event) => toggleActiveClass(event.target));
});

function initMap() {
	var gllacy = {
		lat: 59.938536,
		lng: 30.322879
	};
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
