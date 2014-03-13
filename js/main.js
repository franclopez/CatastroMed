/** 
Retorna elemento
@params id 
*/
function $$(id){
	return document.getElementById(id);
}


/*
Movimiento de opciones en el home
Para que funcione correctamente los elementos deben tener el mismo ancho en el estilo
*/
var opcionesHome = ['ayuda','certificados','consultas','informacion','notificaciones','tramites'];
var opcionesInformacion = ['mapas','indicadores','noticias','novedades'];
var opcionesConsulta = ['predios','mis_predios','mis_tramites','puntos_atencion'];

var regresarAyuda = ['mapas','noticias','indicadores','novedades'];
var regresarConsultas = ['predios','mis-predios','mis-tramites','puntos-atencion'];
var regresarConsultasPredios = ['predios-detalle','predios-filtro'];
var regresarConsultasMisPredios = ['mis-predios-detalle','mis-predios-mapa'];
var regresarConsultasMisTramites = [];
var regresarConsultasPuntosAtencion = [];

function navegar(opciones, destino, fuente){
	
	opciones.forEach(function(opcion){
		var link = fuente+opcion;
		var destinoFinal = '';
		if(destino){
			destinoFinal = destino;
		}else{
			destinoFinal = opcion+'.html';
		}
		$(link)
		.click(function(){
			location.href = destinoFinal;
		});
	});

}


$(function(){

	/*sortable y disableSelection necesarias para el ordenamiento del home*/
	$("#home_main").sortable();
	//$("#home_main").disableSelection()
	/**/
	

	opcionesHome.forEach(function(opcion){
		var link = '#home_'+opcion;
		var destino = 'plantillas/'+opcion+'.html';
		$(link)
		.click(function(){
			location.href = destino;
		});
	});

	opcionesInformacion.forEach(function(opcion){
		var link = '#informacion_'+opcion;
		var destino = opcion+'.html';
		$(link)
		.click(function(){
			location.href = destino;
		});
	});

	opcionesConsulta.forEach(function(opcion){
		var link = '#consultas_'+opcion;
		var destino = opcion+'.html';
		$(link)
		.click(function(){
			location.href = destino;
		});
	});

	regresarAyuda.forEach(function(opcion){
		var link = '#btn-regresar-'+opcion;
		var destino = 'informacion.html';
		$(link)
		.click(function(){
			location.href = destino;
		});
	});

	regresarConsultas.forEach(function(opcion){
		var link = '#btn-regresar-'+opcion;
		var destino = 'consultas.html';
		$(link)
		.click(function(){
			location.href = destino;
		});
	});

});
