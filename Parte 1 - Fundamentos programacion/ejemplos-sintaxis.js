var a = 10;
if(a < 20) {
    console.log('verdad');
} else {
    console.log('mentira');
}


var a = 10;
if(a > 20) {
    console.log('verdad');
} else if (a > 0) {
    console.log('positivo');
} else {
    console.log('nada');
}

var vector = [1, 2, 5, "Auto"];

vector[1];
vector.length;
vector[vector.length - 1];
vector[vector.length - 2];

var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  nacimiento: 1990,
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  },
  getEdad : function(año) {
    return año - this.nacimiento;
  }
};

var añoActual = new Date().getFullYear();

person.getEdad(añoActual);
