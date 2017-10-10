class productos {
  vende (p1, p2,) {
    this.p1 = Azucar; //Asignación
    this.p2 = Aceite;

  }

  getName() {
    return this.name;
    console.log(eli)
  }

  getFinalNote() {
    return (this.ep1 + this.ep2) / 2;
  }
}

const alumn1 = new Alumn("Oliver", 20, 18); // Referencia
//console.log(`La nota final de ${alumn1.getName()} es: ${alumn1.getFinalNote()}`);
const alumn2 = new Alumn("Paola", 17, 18);
const alumn3 = new Alumn("Javier", 15, 12);

class Course {
  constructor(name) {
    this.name = name;
    this.alumns = new Array();
  }

  getName() {
  	return this.name;
  }

  addAlumn(alumn) {
    this.alumns.push(alumn);
  }

  print() {
    let sumProms = 0;
    console.log(this.getName());
    console.log("----------------");
    for (let alumn of this.alumns) {
      console.log(`${alumn.getName()}: ${alumn.getFinalNote()}`);
      sumProms = sumProms + alumn.getFinalNote();
    }
    console.log(`La suma es: ${sumProms}`);
    console.log(`El promedio es: ${Math.round(sumProms / this.alumns.length)}`);
  }
}

const course1 = new Course("Fundamentos de Programación");
course1.addAlumn(alumn1);
course1.addAlumn(alumn2);
course1.addAlumn(alumn3);
course1.print();
