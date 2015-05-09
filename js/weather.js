function buscarLocalizacao(latitude,longitude){
	var woeid;
	var r = new XMLHttpRequest();
	var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.placefinder%20where%20text%3D%22"+latitude+"%2C%20"+longitude+"%22%20and%20gflags%3D%22R%22&appid=test"

	r.open("GET", url, true);
	r.onreadystatechange = function () {
  		if (r.readyState != 4 || r.status != 200) return null;
		parser=new DOMParser();
		xmlDoc=parser.parseFromString(r.responseText,"text/xml");
		woeid = xmlDoc.getElementsByTagName("woeid")[0].childNodes[0].nodeValue;
  		buscarTemperatura(woeid);
	};
	r.send();
}

function buscarTemperatura(woeid){
	var temperatura, resposta;
	var r = new XMLHttpRequest();
	var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D"+woeid+"&format=json";


	r.open("GET", url, true);
	r.onreadystatechange = function () {
  		if (r.readyState != 4 || r.status != 200) return null;
  		resposta = JSON.parse(r.responseText);
  		temperatura = converterParaCelsius(resposta.query.results.channel.item.condition.temp);
  		atualizarTela(temperatura, resposta.query.results.channel.item.condition.text);
	};
	r.send();
}

function converterParaCelsius(temperatura) {
    return (temperatura - 32) * (5 / 9);
}

function atualizarTela(temperatura, condicaoAtual){
	var texto = "";
	var temperaturaMostrar = Math.round(temperatura);
	if (condicaoAtual.toUpperCase().indexOf("SUN") > -1 || condicaoAtual.toUpperCase().indexOf("FAIR") > -1 || condicaoAtual.toUpperCase().indexOf("HOT") > -1 || condicaoAtual.toUpperCase().indexOf("CLEAR") > -1){
		texto =  "Pode vir tomar um cafezinho comigo, o clima está ótimo! (" + temperaturaMostrar+"º C)";
	} else
	if (condicaoAtual.toUpperCase().indexOf("CLOUD") > -1 || condicaoAtual.toUpperCase().indexOf("COLD") > -1){
		texto =  "Pode vir tomar um cafezinho comigo, mas traga um guarda-chuva, pode ser que chova (" + temperaturaMostrar+"º C)";
	} else
	if (condicaoAtual.toUpperCase().indexOf("THUNDER") > -1 || condicaoAtual.toUpperCase().indexOf("STORM") > -1 || condicaoAtual.toUpperCase().indexOf("RAIN") > -1){
		texto =  "Pode vir tomar um cafezinho comigo, mas traga um guarda-chuva e esteja preparado para a chuva! (" + temperaturaMostrar+"º C)";
	} else {
		texto =  "Pode vir tomar um cafezinho comigo! (" + temperaturaMostrar+"º C)";
	}
	document.getElementById("tempo-atual").innerHTML = texto;
}
