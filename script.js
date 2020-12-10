// EXERCICIU 1

// Creati o clasa numita "Cars", care sa contina atributele "name" si "speed" si metodele
// "accelerate" si "brake". Metoda accelerate mareste valoare lui "speed" cu 10,
// iar metoda "brake" micsoreaza viteza lui "speed" cu 10.
// Instantiati(creati) doua masini cu nume si valori ale vitezei diferite. Pentru 
// fiecare masina, apelati cate o metoda, iar apoi afisati la consola valoare rezultata
// a vitezei.s

class Cars {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    accelerate() {
       return this.speed += 10;
    }
    brake() {
        return this.speed -= 10;
    }
}

let Car1 = new Cars("Ford", 30);
let Car2 = new Cars("Volvo", 50);

// console.log(Car1.accelerate(30));
// console.log(Car2.brake(50));

// ------------------------------------------------------------------------------------------------------------

//  EXERCITIU 2

// Se dau urmatoarele obiecte:

const film = {
    name: 'Arriba abajo',
    year: 2019,
    director: 'Fernandinho Navas'
  }
  
  const filmDetails = {
    oscarNomination: true,
    rating: 8.9
  }
  
  // 1. Folosind OBJECT DESTRUCURING si TEMPLATE LITERALS, mai intai extrageti numele
  // si anul din obiectul "film", apoi construiti un mesaj de forma "Filmul {numeFilm}
  // a aparul in anul {anFilm}"

  const {name, year, director} = film;
//   console.log(name, year);
//   console.log(`Filmul ${name} a aparul in anul ${year}.`);
  
  // 2. Folosind SPREAD OPERATOR, creati un nou obiect, care sa contina toate cheile
  // si valorile din primul obiect, dar si toate cheile si valorile din cel de-al doilea

  const filmComplete = {...film, ...filmDetails};
//   console.log(filmComplete);

// ------------------------------------------------------------------------------------------------------------
//  EXERCITIU 3

// Se da urmatorul Array:

const employees = [
    {
      name: 'Savuica Marinela',
      salary: 5500,
      productivityIndex: 7.4
    },
    {
      name: 'Dumitru Dan',
      salary: 7000,
      productivityIndex: 5.6
    },
    {
      name: 'Topor Simona',
      salary: 7500,
      productivityIndex: 9
    }
  ]
  
  // 1. FARA A MODIFICA array-ul initial, creati un array nou in care fiecare angajat
  // sa aiba salariul marit cu 20%.

  const employeesNewSalary = employees.map(elem => {
    const container = {};

    container.name = elem.name;
    container.salary = elem.salary*1.2;
    container.productivityIndex = elem.productivityIndex;

    return container;

  });
  
//   console.log(employeesNewSalary);
  
  // 2. FARA A MODIFICA array-ul initial, creati un array nou in care sa se regaseasca 
  // doar angajatii cu indexul de productivitate peste 7

  const employeesProd = employees.filter(prod => prod.productivityIndex >= 7); 
   
//   console.log(employeesProd);