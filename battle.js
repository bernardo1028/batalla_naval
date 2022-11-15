var checkJ1 = 0;
let sumJ1 = 0;
var checkJ2 = 0;
let sumJ2 = 0;
class Juego {
	constructor(inicio, fin){
		this.inico = inicio;
		this.fin = fin;
	}

	getplay(){
		alert("Que empieze la partida");
	}

	getEndgame(){
		alert("Fin de la partida");
	}
}

class Jugador1 {
	constructor (name, I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11, I12, I13, I14, I15, I16, I17, I18, I19, I20, I21, I22, I23, I24, I25, I26, I27, I28, I29, I30, I31, I32 ){
		this.name = name;
		this.I1 = I1;
		this.I2 = I2;
		this.I3 = I3;
		this.I4 = I4;
		this.I5 = I5;
		this.I6 = I6;
		this.I7 = I7;
		this.I8 = I8;
		this.I9 = I9;
		this.I10 = I10;
		this.I11 = I11;
		this.I12 = I12;
		this.I13 = I13;
		this.I14 = I14;
		this.I15 = I15;
		this.I16 = I16;
		this.I17 = I17;
		this.I18 = I18;
		this.I19 = I19;
		this.I20 = I20;
		this.I21 = I21;
		this.I22 = I22;
		this.I23 = I23;
		this.I24 = I24;
		this.I25 = I25;
		this.I26 = I26;
		this.I27 = I27;
		this.I28 = I28;
		this.I29 = I29;
		this.I30 = I30;
		this.I31 = I31;
		this.I32 = I32;
	}

	getMatrizJ1(){
		let tableroJ1 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
		tableroJ1[this.I1][this.I2] = 1;
		tableroJ1[this.I3][this.I4] = 1;
		tableroJ1[this.I5][this.I6] = 1;
		tableroJ1[this.I7][this.I8] = 1;
		tableroJ1[this.I9][this.I10] = 1;
		tableroJ1[this.I11][this.I12] = 1;
		tableroJ1[this.I13][this.I14] = 1;
		tableroJ1[this.I15][this.I16] = 1;
		tableroJ1[this.I17][this.I18] = 1;
		tableroJ1[this.I19][this.I20] = 1;
		tableroJ1[this.I21][this.I22] = 1;
		tableroJ1[this.I23][this.I24] = 1;
		tableroJ1[this.I25][this.I26] = 1;
		tableroJ1[this.I27][this.I28] = 1;
		tableroJ1[this.I29][this.I30] = 1;
		tableroJ1[this.I31][this.I32] = 1;
		alert("El tablero del jugador 1 se creo correctamente");		
	}

	getName(){
		alert(this.name + " ¡Has ganado!");
	}
}

class barcosJugador1 extends Jugador1{
	constructor(I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11, I12, I13, I14, I15, I16, I17, I18, I19, I20, I21, I22, I23, I24, I25, I26, I27, I28, I29, I30, I31, I32, elimCoor1, elimCoor2){
		super(I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11, I12, I13, I14, I15, I16, I17, I18, I19, I20, I21, I22, I23, I24, I25, I26, I27, I28, I29, I30, I31, I32);
		this.elimCoor1 = elimCoor1;
		this.elimCoor2 = elimCoor2;
	}

	getEliminarBarcos(){
		let tableroJ1 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
		tableroJ1[this.I1][this.I2] = 1;
		tableroJ1[this.I3][this.I4] = 1;
		tableroJ1[this.I5][this.I6] = 1;
		tableroJ1[this.I7][this.I8] = 1;
		tableroJ1[this.I9][this.I10] = 1;
		tableroJ1[this.I11][this.I12] = 1;
		tableroJ1[this.I13][this.I14] = 1;
		tableroJ1[this.I15][this.I16] = 1;
		tableroJ1[this.I17][this.I18] = 1;
		tableroJ1[this.I19][this.I20] = 1;
		tableroJ1[this.I21][this.I22] = 1;
		tableroJ1[this.I23][this.I24] = 1;
		tableroJ1[this.I25][this.I26] = 1;
		tableroJ1[this.I27][this.I28] = 1;
		tableroJ1[this.I29][this.I30] = 1;
		tableroJ1[this.I31][this.I32] = 1;
		if (tableroJ1[this.elimCoor1][this.elimCoor2] == 1) {
			tableroJ1[this.elimCoor1][this.elimCoor2] = 0;
			checkJ1 = checkJ1 + 1;
			return checkJ1;
		} else {
			for (var i = 0; i < 15; i++) {
				for (var j = 0; j < 15; j++) {
					sumJ1 = sumJ1 + tableroJ1[i][j];
				}
			}
			return (checkJ1, sumJ1);
		}
	}

	setElimininarCoor1(elimCoor1){
		this.elimCoor1 = elimCoor1; 
	}

	setElimininarCoor2(elimCoor2){
		this.elimCoor2 = elimCoor2;
	}
}

class Jugador2 {
	constructor(name, J1, J2, J3, J4, J5, J6, J7, J8, J9, J10, J11, J12, J13, J14, J15, J16, J17, J18, J19, J20, J21, J22, J23, J24, J25, J26, J27, J28, J29, J30, J31, J32){
		this.name = name;
		this.J1 = J1;
		this.J2 = J2;
		this.J3 = J3;
		this.J4 = J4;
		this.J5 = J5;
		this.J6 = J6;
		this.J7 = J7;
		this.J8 = J8;
		this.J9 = J9;
		this.J10 = J10;
		this.J11 = J11;
		this.J12 = J12;
		this.J13 = J13;
		this.J14 = J14;
		this.J15 = J15;
		this.J16 = J16;
		this.J17 = J17;
		this.J18 = J18;
		this.J19 = J19;
		this.J20 = J20;
		this.J21 = J21;
		this.J22 = J22;
		this.J23 = J23;
		this.J24 = J24;
		this.J25 = J25;
		this.J26 = J26;
		this.J27 = J27;
		this.J28 = J28;
		this.J29 = J29;
		this.J30 = J30;
		this.J31 = J31;
		this.J32 = J32;
	}

	getMatrizJ2(){
		let tableroJ2 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
		tableroJ2[this.J1][this.J2] = 1;
		tableroJ2[this.J3][this.J4] = 1;
		tableroJ2[this.J5][this.J6] = 1;
		tableroJ2[this.J7][this.J8] = 1;
		tableroJ2[this.J9][this.J10] = 1;
		tableroJ2[this.J11][this.J12] = 1;
		tableroJ2[this.J13][this.J14] = 1;
		tableroJ2[this.J15][this.J16] = 1;
		tableroJ2[this.J17][this.J18] = 1;
		tableroJ2[this.J19][this.J20] = 1;
		tableroJ2[this.J21][this.J22] = 1;
		tableroJ2[this.J23][this.J24] = 1;
		tableroJ2[this.J25][this.J26] = 1;
		tableroJ2[this.J27][this.J28] = 1;
		tableroJ2[this.J29][this.J30] = 1;
		tableroJ2[this.J31][this.J32] = 1;
		alert("El tablero del jugador 2 se creo correctamente");	
	}

	getName(){
		alert(this.name + " ¡Has ganado!");
	}
}

class barcosJugador2 extends Jugador2{
	constructor(J1, J2, J3, J4, J5, J6, J7, J8, J9, J10, J11, J12, J13, J14, J15, J16, J17, J18, J19, J20, J21, J22, J23, J24, J25, J26, J27, J28, J29, J30, J31, J32, elimCoor1, elimCoor2){
		super(J1, J2, J3, J4, J5, J6, J7, J8, J9, J10, J11, J12, J13, J14, J15, J16, J17, J18, J19, J20, J21, J22, J23, J24, J25, J26, J27, J28, J29, J30, J31, J32);
		this.elimCoor1 = elimCoor1;
		this.elimCoor2 = elimCoor2;
	}

	getEliminarBarcos(){
		let tableroJ2 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
		tableroJ2[this.J1][this.J2] = 1;
		tableroJ2[this.J3][this.J4] = 1;
		tableroJ2[this.J5][this.J6] = 1;
		tableroJ2[this.J7][this.J8] = 1;
		tableroJ2[this.J9][this.J10] = 1;
		tableroJ2[this.J11][this.J12] = 1;
		tableroJ2[this.J13][this.J14] = 1;
		tableroJ2[this.J15][this.J16] = 1;
		tableroJ2[this.J17][this.J18] = 1;
		tableroJ2[this.J19][this.J20] = 1;
		tableroJ2[this.J21][this.J22] = 1;
		tableroJ2[this.J23][this.J24] = 1;
		tableroJ2[this.J25][this.J26] = 1;
		tableroJ2[this.J27][this.J28] = 1;
		tableroJ2[this.J29][this.J30] = 1;
		tableroJ2[this.J31][this.J32] = 1;
		if (tableroJ2[this.elimCoor1][this.elimCoor2] == 1) {
			tableroJ2[this.elimCoor1][this.elimCoor2] = 0;
			checkJ2 = checkJ2 + 1;
			return checkJ2;
		} else {
			for (var i = 0; i < 15; i++) {
				for (var j = 0; j < 15; j++) {
					sumJ2 = sumJ2 + tableroJ2[i][j];
				}
			}
			return (checkJ2, sumJ2);
		}
	}

	setElimininarCoor1(elimCoor1){
		this.elimCoor1 = elimCoor1;
	}

	setElimininarCoor2(elimCoor2){
		this.elimCoor2 = elimCoor2;
	}
}

function inicia(){
	var checkP1 = 0;
	var checkP2 = 0;
	var name1 = document.getElementById("name1").value;
	var I1 = parseFloat(document.getElementById("J1B1C1C1").value);
	var I2 = parseFloat(document.getElementById("J1B1C1C2").value);
	var I3 = parseFloat(document.getElementById("J1B1C2C1").value);
	var I4 = parseFloat(document.getElementById("J1B1C2C2").value);
	var I5 = parseFloat(document.getElementById("J1B2C1C1").value);
	var I6 = parseFloat(document.getElementById("J1B2C1C2").value);
	var I7 = parseFloat(document.getElementById("J1B2C2C1").value);
	var I8 = parseFloat(document.getElementById("J1B2C2C2").value);
	var I9 = parseFloat(document.getElementById("J1B3C1C1").value);
	var I10 = parseFloat(document.getElementById("J1B3C1C2").value);
	var I11 = parseFloat(document.getElementById("J1B3C2C1").value);
	var I12 = parseFloat(document.getElementById("J1B3C2C2").value);
	var I13 = parseFloat(document.getElementById("J1B4C1C1").value);
	var I14 = parseFloat(document.getElementById("J1B4C1C2").value);
	var I15 = parseFloat(document.getElementById("J1B4C2C1").value);
	var I16 = parseFloat(document.getElementById("J1B4C2C2").value);
	var I17 = parseFloat(document.getElementById("J1B5C1C1").value);
	var I18 = parseFloat(document.getElementById("J1B5C1C2").value);
	var I19 = parseFloat(document.getElementById("J1B5C2C1").value);
	var I20 = parseFloat(document.getElementById("J1B5C2C2").value);
	var I21 = parseFloat(document.getElementById("J1B6C1C1").value);
	var I22 = parseFloat(document.getElementById("J1B6C1C2").value);
	var I23 = parseFloat(document.getElementById("J1B6C2C1").value);
	var I24 = parseFloat(document.getElementById("J1B6C2C2").value);
	var I25 = parseFloat(document.getElementById("J1B7C1C1").value);
	var I26 = parseFloat(document.getElementById("J1B7C1C2").value);
	var I27 = parseFloat(document.getElementById("J1B7C2C1").value);
	var I28 = parseFloat(document.getElementById("J1B7C2C2").value);
	var I29 = parseFloat(document.getElementById("J1B8C1C1").value);
	var I30 = parseFloat(document.getElementById("J1B8C1C2").value);
	var I31 = parseFloat(document.getElementById("J1B8C2C1").value);
	var I32 = parseFloat(document.getElementById("J1B8C2C2").value);
	var nombre2 = document.getElementById("nombre2").value;
	var J1 = parseFloat(document.getElementById("J2B1C1C1").value);
	var J2 = parseFloat(document.getElementById("J2B1C1C2").value);
	var J3 = parseFloat(document.getElementById("J2B1C2C1").value);
	var J4 = parseFloat(document.getElementById("J2B1C2C2").value);
	var J5 = parseFloat(document.getElementById("J2B2C1C1").value);
	var J6 = parseFloat(document.getElementById("J2B2C1C2").value);
	var J7 = parseFloat(document.getElementById("J2B2C2C1").value);
	var J8 = parseFloat(document.getElementById("J2B2C2C2").value);
	var J9 = parseFloat(document.getElementById("J2B3C1C1").value);
	var J10 = parseFloat(document.getElementById("J2B3C1C2").value);
	var J11 = parseFloat(document.getElementById("J2B3C2C1").value);
	var J12 = parseFloat(document.getElementById("J2B3C2C2").value);
	var J13 = parseFloat(document.getElementById("J2B4C1C1").value);
	var J14 = parseFloat(document.getElementById("J2B4C1C2").value);
	var J15 = parseFloat(document.getElementById("J2B4C2C1").value);
	var J16 = parseFloat(document.getElementById("J2B4C2C2").value);
	var J17 = parseFloat(document.getElementById("J2B5C1C1").value);
	var J18 = parseFloat(document.getElementById("J2B5C1C2").value);
	var J19 = parseFloat(document.getElementById("J2B5C2C1").value);
	var J20 = parseFloat(document.getElementById("J2B5C2C2").value);
	var J21 = parseFloat(document.getElementById("J2B6C1C1").value);
	var J22 = parseFloat(document.getElementById("J2B6C1C2").value);
	var J23 = parseFloat(document.getElementById("J2B6C2C1").value);
	var J24 = parseFloat(document.getElementById("J2B6C2C2").value);
	var J25 = parseFloat(document.getElementById("J2B7C1C1").value);
	var J26 = parseFloat(document.getElementById("J2B7C1C2").value);
	var J27 = parseFloat(document.getElementById("J2B7C2C1").value);
	var J28 = parseFloat(document.getElementById("J2B7C2C2").value);
	var J29 = parseFloat(document.getElementById("J2B8C1C1").value);
	var J30 = parseFloat(document.getElementById("J2B8C1C2").value);
	var J31 = parseFloat(document.getElementById("J2B8C2C1").value);
	var J32 = parseFloat(document.getElementById("J2B8C2C2").value);

	
	let barc1 = [I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11, I12, I13, I14, I15, I16, I17, I18, I19, I20, I21, I22, I23, I24, I25, I26, I27, I28, I29, I30, I31, I32];
	for (var i = 0; i < 32; i++) {
		if (isNaN(barc1[i]) || barc1[i]<0 || barc1[i]>14) {
			checkP1 = checkP1 +1;
		}
	}

	do{
		if (checkP1 > 0) {
			alert(" JUGADOR 1 \nNo se aceptan numeros mayores a 14 o menores a 0 o que no introduzca algun valor.");
			alert("Introduzca coordenadas validas");
		} else{
			let jugadorn1 = new Jugador1(name1, I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11, I12, I13, I14, I15, I16, I17, I18, I19, I20, I21, I22, I23, I24, I25, I26, I27, I28, I29, I30, I31, I32);
			jugadorn1.getMatrizJ1();
		}
	} while(checkP1 > 0);

	do{
		let barc2 = [J1, J2, J3, J4, J5, J6, J7, J8, J9, J10, J11, J12, J13, J14, J15, J16, J17, J18, J19, J20, J21, J22, J23, J24, J25, J26, J27, J28, J29, J30, J31, J32];
		var checkP2 = 0
		for (var i = 0; i < 32; i++) {
			if (isNaN(barc2[i]) || barc2[i]<0 || barc2[i]>14){
				checkP2 = check + 1;
			}
		}

		if (checkP2 > 0) {
			alert("JUGADOR 2 \nNo se aceptan numeros mayores a 14 o menores a 0 o que no introduzca algun valor.");
			alert("Introduzca coordenadas validas");
		} else{
			let jugadorn2 = new Jugador2(nombre2, J1, J2, J3, J4, J5, J6, J7, J8, J9, J10, J11, J12, J13, J14, J15, J16, J17, J18, J19, J20, J21, J22, J23, J24, J25, J26, J27, J28, J29, J30, J31, J32);
			jugadorn2.getMatrizJ2();	
		}
	} while (checkP2 > 0);

	let jugadorn1 = new Jugador1(name1, I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11, I12, I13, I14, I15, I16, I17, I18, I19, I20, I21, I22, I23, I24, I25, I26, I27, I28, I29, I30, I31, I32);
	let jugadorn2 = new Jugador2(nombre2, J1, J2, J3, J4, J5, J6, J7, J8, J9, J10, J11, J12, J13, J14, J15, J16, J17, J18, J19, J20, J21, J22, J23, J24, J25, J26, J27, J28, J29, J30, J31, J32);
	let barcosJ1 = new barcosJugador1 (I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11, I12, I13, I14, I15, I16, I17, I18, I19, I20, I21, I22, I23, I24, I25, I26, I27, I28, I29, I30, I31, I32, 0, 0);
	let barcosJ2 = new barcosJugador2 (J1, J2, J3, J4, J5, J6, J7, J8, J9, J10, J11, J12, J13, J14, J15, J16, J17, J18, J19, J20, J21, J22, J23, J24, J25, J26, J27, J28, J29, J30, J31, J32, 0, 0);

	let coorXJ1 = 0;
	let coorYJ1 = 0;
	let coorXJ2 = 0;
	let coorYJ2 = 0;

	var sumaJ1 = 0;
	var capCheckJ1 = 0;
	var sumaJ1 = 0;
	var capCheckJ1 = 0;

	let inicia = new Juego("incio", "fin");
	inicia.getplay();
	do{
		do{
			do{
				coorXJ1 = prompt("Jugador 1 \nColoque la coordenada X");
				if (isNaN(coorXJ1) || coorXJ1<0 || coorXJ1>14) {
					alert("No se aceptan esos valores");
				}
			} while(isNaN(coorXJ1) || coorXJ1<0 || coorXJ1>14);

			do{
				coorYJ1 = prompt("ahora coloca la coordenada Y");
				if (isNaN(coorYJ1) || coorYJ1<0 || coorYJ1>14) {
					alert("No se acepta ese valor");
				}
			} while(isNaN(coorYJ1) || coorYJ1<0 || coorYJ1>14);
			barcosJ2.setElimininarCoor1(coorXJ1);
			barcosJ2.setElimininarCoor2(coorYJ1);
			barcosJ2.getEliminarBarcos();
			
			sumaJ2 = sumJ2;
			capCheckJ2 = checkJ2;

			if (capCheckJ2 == 1) {
				swal ( " ¡Buen trabajo! " , " ¡Hiciste clic en el botón! " , " Éxito " )   ;
			} else {
				alert("No le diste a algun barco");
			}
		} while(capCheckJ2 == 1);

		do{
			do{
				coorXJ2 = prompt("Jugador 2 \nColoque la coordenada X");
				if (isNaN(coorXJ2) || coorXJ2<0 || coorXJ2>14) {
					alert("No se acepta ese valor")
				}
			} while(isNaN(coorXJ2) || coorXJ2<0 || coorXJ2>14);

			do{
				coorYJ2 = prompt("ahora coloca la coordenada Y");
				if (isNaN(coorYJ2) || coorYJ2<0 || coorYJ2>14) {
					alert("No se acepta ese valor")
				}
			} while(isNaN(coorYJ2) || coorYJ2<0 || coorYJ2>14);
			barcosJ1.setElimininarCoor1(coorXJ2);
			barcosJ1.setElimininarCoor2(coorYJ2);
			barcosJ1.getEliminarBarcos();
			sumaJ1 = sumJ1;
			capCheckJ1 = checkJ1;

			if (capCheckJ1 == 1) {
				alert("Le diste a un barco");
			} else {
				alert("No le diste a algun barco");
			}
		}while(capCheckJ1 == 1);

	} while(sumaJ1 > 0 || sumaJ2 > 0);


	if (sumaJ1 == 0) {
		jugadorn2.getName();
	} else if (sumaJ2 == 0){
		jugadorn1.getName();
	}

	let partida = new Juego("inicio", "fin");
	partida.getEndgame();
}