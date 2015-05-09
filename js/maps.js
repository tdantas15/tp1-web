var casa = new google.maps.LatLng(-19.924402,-43.989814);
var trabalho = new google.maps.LatLng(-19.9358852,-43.9350149);
var escola = new google.maps.LatLng(-19.938411,-43.999692);
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
	directionsDisplay = new google.maps.DirectionsRenderer();
	var mapOptions = {
		zoom:7,
		center: casa
	}
	map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
	directionsDisplay.setMap(map);
	navigator.geolocation.getCurrentPosition(calcRoute);
}

function calcRoute(posicao) {
	origem = new google.maps.LatLng(posicao.coords.latitude, posicao.coords.longitude);
	var request = {
		origin:origem,
       		destination:definirLocalizacaoAtual(),
       		travelMode: google.maps.TravelMode.DRIVING
	};
	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		}
	});
	buscarLocalizacao(posicao.coords.latitude, posicao.coords.longitude);
}

function definirLocalizacaoAtual(){
	var horaAtual = new Date().getHours();
	// Entre 7:00 e 13:00
	if (horaAtual >= 7 && horaAtual <= 12){
		return escola;
	} else 
	// Entre 13:00 e 22:00
	if (horaAtual > 12 && horaAtual <= 21){
		return trabalho;
	} else {
		return casa;
	}
}

initialize();
