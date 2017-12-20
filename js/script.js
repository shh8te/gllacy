function classListAdd (e) {
	this.classList.add('active');
};

function classListRemove (e) {
	if (this.value.length > 0) {
		return;
	}

	this.classList.remove('active');	
};

var emailFeedback = document.querySelector('.subscribe-email input[type="text"]');

emailFeedback.addEventListener('focus', classListAdd);

emailFeedback.addEventListener('blur', classListRemove);

var search = document.querySelector('.main-header-user_search .search-form input');

search.addEventListener('focus', classListAdd);

search.addEventListener('blur', classListRemove);

var login = document.querySelector('#login-email');

login.addEventListener('focus', classListAdd);

login.addEventListener('blur', classListRemove);

var password = document.querySelector('#login-password');

password.addEventListener('focus', classListAdd);

password.addEventListener('blur', classListRemove);

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
