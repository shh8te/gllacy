const targetsArr = [...document.querySelectorAll('.class-toggling')];

function toggleActiveClass(target, isBlur) {

  if (isBlur) {
    target.closest('.visibility').style.visibility="";
    target.closest('.visibility').style.transform="";
  } else {
    target.closest('.visibility').style.visibility="visible";
    target.closest('.visibility').style.transform="scale(1, 1)";
    console.log(target);
    console.log(target.closest('.button-link'));
    console.log(target.closest('.button-link').parentNode.classList.contains('main-header-user_login'));

    if (target.closest('.button-link').parentNode.classList.contains('main-header-user_login')) {
      target.closest('.button-link').style.backgroundPosition="0 -112px";
    } else {
      target.closest('.button-link').style.backgroundPosition="0px -252px";
    };
  };

  if (target.value) return;

  target.classList.toggle('active');
}

targetsArr.forEach(elem => {
 elem.addEventListener('focus', (event) => toggleActiveClass(event.target, false));
 elem.addEventListener('blur', (event) => toggleActiveClass(event.target, true));
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
