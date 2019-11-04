// CREDITOS

var creditoEfectivo = {
	cantidadCuotas: 12,
	cuotasPagas: 0,
	financiador: "SA",
	importeTotal: 15000.20,
	obtenerImporteDeCuota: function(){
		return this.importeTotal / this.cantidadCuotas;
	},
	pagarCuotas: function (cantidad){
		this.cuotasPagas = this.cuotasPagas + cantidad;
	}
}

var cliente = {
	nombre: "Jona",
	creditos: [creditoEfectivo],
	cancelarDeuda: function(){
		var primerCredito = this.creditos[0];
		var cuotasPendientes = (primerCredito.cantidadCuotas) - (primerCredito.cuotasPagas);
		primerCredito.pagarCuotas(cuotasPendientes);
	}
}

creditoEfectivo.cuotasPagas;

cliente.cancelarDeuda();

creditoEfectivo.cuotasPagas;

// FECHAS

var unaFecha = new Date();
unaFecha.getFullYear();

// Resolución de ejercicio

var creditoConsumo = {
	cantidadCuotas: 6,
	cuotasPagas: 5,
	financiador: "FR",
	importeTotal: 1000,
	obtenerImporteDeCuota: function(){
		return this.importeTotal / this.cantidadCuotas;
	},
	pagarCuotas: function (cantidad){
		this.cuotasPagas = this.cuotasPagas + cantidad;
	}
}

var cliente = {
	nombre: "Jona",
	creditos: [],
	cancelarDeuda: function(){
		for(var indice = 0; indice < this.creditos.length; indice++){
			var creditoActual = this.creditos[indice];
			var cuotasPendientes = (creditoActual.cantidadCuotas) - (creditoActual.cuotasPagas);
			creditoActual.pagarCuotas(cuotasPendientes);
        	}
	},
	adjudicarCredito: function(credito) {
		this.creditos.push(credito);
	}
}
