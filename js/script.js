var emailFeedback = document.querySelector('.subscribe-email input[type="text"]');

emailFeedback.addEventListener('focus', function(e) {
	this.classList.add('active');
});

emailFeedback.addEventListener('blur', function(e) {
	if (this.value.length > 0) {
		return;
	}

	this.classList.remove('active');
});

var search = document.querySelector('.main-header-user_search .search-form input');

search.addEventListener('focus', function(e) {
	this.classList.add('active');
});

search.addEventListener('blur', function(e) {
	if (this.value.length > 0) {
		return;
	}

	this.classList.remove('active');
});

var login = document.querySelector('.main-header-user_login .login-form input');

login.addEventListener('focus', function(e) {
	this.classList.add('active');
});

login.addEventListener('blur', function(e) {
	if (this.value.length > 0) {
		return;
	}

	this.classList.remove('active');
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
