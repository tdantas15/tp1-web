	var div;
	var imagens = document.getElementsByClassName("img-projeto");
	for ( var i=0; i< imagens.length; i++ ){
		imagens[i].addEventListener('click', function (){
			if (this.width == 200){
				this.parentNode.classList.remove("col-md-3");
				this.parentNode.classList.add("col-md-6");
				div = this.parentNode.nextSibling.nextSibling;
				div.classList.remove("col-md-9");
				div.classList.add("col-md-6");
				this.width = 400;
			} else {
				this.parentNode.classList.remove("col-md-6");
				this.parentNode.classList.add("col-md-3");
				div = this.parentNode.nextSibling.nextSibling;
				div.classList.remove("col-md-6");
				div.classList.add("col-md-9");
				this.width = 200;
			}
		},true);
	}
