var figuras =  [];

		$(document).ready(function()
		{
			$(".caja1").draggable({revert:"invalid"});
			$(".circulo").draggable({revert:"invalid"});
			$(".rectangulo").draggable({revert:"invalid"});
			$(".rombo").draggable({revert:"invalid"});

			$(".destino").droppable({ drop:elementoSoltado});
			$(".destino2").droppable({ drop:elementoSoltado});
			$(".destino3").droppable({ drop:elementoSoltado});
			$(".destino4").droppable({ drop:elementoSoltado});

		});

		function elementoSoltado(event,ui){
			var clas = ui.draggable.attr("class");
			var drag = clas.split(' ');

			var drop = this.className.split(' ');
	
			if(drag[0] == 'caja1' && drop[0]=='destino'){
				$(".caja1").css("visibility","hidden");
				$(".destino").css("background-color","#FFC300");
				document.getElementsByClassName("sonido")[0].innerHTML+="<embed src='Sonidos/acierto.mp3' hidden='true' autostart='true' loop='false'>";
				figuras.push('.caja1');
			} else if(drag[0] == 'circulo' && drop[0]=='destino2'){
				$(".circulo").css("visibility","hidden");
				$(".destino2").css("background-color","red");
				document.getElementsByClassName("sonido")[0].innerHTML+="<embed src='Sonidos/acierto.mp3' hidden='true' autostart='true' loop='false'>";
				figuras.push('.circulo');
			} else if(drag[0] == 'rectangulo' && drop[0]=='destino3'){
				$(".rectangulo").css("visibility","hidden");
				$(".destino3").css("background-color","green");
				document.getElementsByClassName("sonido")[0].innerHTML+="<embed src='Sonidos/acierto.mp3' hidden='true' autostart='true' loop='false'>";
				figuras.push('.rectangulo');			
			} else if(drag[0] == 'rombo' && drop[0]=='destino4'){
				$(".rombo").css("visibility","hidden");
				$(".destino4").css("background-color","blue");
				document.getElementsByClassName("sonido")[0].innerHTML+="<embed src='Sonidos/acierto.mp3' hidden='true' autostart='true' loop='false'>";
				figuras.push('.rombo');
			} else {
				$(".caja1").draggable({revert:"valid"});
				$(".circulo").draggable({revert:"valid"});
				$(".rectangulo").draggable({revert:"valid"});
				$(".rombo").draggable({revert:"valid"});
			}

			final();
		}

		function final(){	
			if(figuras.length==4){
				document.getElementById('text').innerHTML="Has ganado!";
				document.getElementsByClassName("sonido")[0].innerHTML+="<embed src='Sonidos/win.mp3' hidden='true' autostart='true' loop='false'>";
				$(".cargar").toggleClass("cargar");
			}

		}

		function recargar(){
			location.reload();
		}