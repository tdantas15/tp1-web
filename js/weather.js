// Retorna a temperatura atual de Belo Horizonte
function atualizarTela(){
	var temperatura, resposta;
	var r = new XMLHttpRequest();
	var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D455821&format=json"


	r.open("GET", url, true);
	r.onreadystatechange = function () {
  		if (r.readyState != 4 || r.status != 200) return null;
  		resposta = JSON.parse(r.responseText);
  		temperatura = convertToC(resposta.query.results.channel.item.condition.temp);
  		return temperatura;
	};
	r.send();
}

function convertToC(temperatura) {
    return (temperatura - 32) * (5 / 9);
}

function buscarTemperatura(latitude,longitude){
	var resposta, woeid;
	var r = new XMLHttpRequest();
	var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.placefinder%20where%20text%3D%22"+latitude+"%2C%20"+longitude+"%22%20and%20gflags%3D%22R%22&appid=test"

	r.open("GET", url, true);
	r.onreadystatechange = function () {
  		if (r.readyState != 4 || r.status != 200) return null;
  		resposta = JSON.parse(r.responseText);
  		temperatura = convertToC(resposta.query.results.channel.item.condition.temp);
  		return temperatura;
	};
	r.send();
}