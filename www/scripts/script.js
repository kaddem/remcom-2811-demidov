console.log('script work!');

let myName;
console.log(myName);

myName = 'Kirill';
console.log(myName);

myName = 'Katja';
console.log(myName.length);


const PiNumber = 3.141592;
console.log(PiNumber);


let petsName = ['Kesha', 'Gans', 'Rayan', 'Fiona'];
console.log(petsName);

//            массив        4    -     1
console.log( petsName[petsName.length - 1] );

let cat = {
  name: 'Kesha',
  age: '12',
  weight: 'zhirniy'
}

console.log(cat.name);

console.log( 4 * '5d' );

let index = 0;
index++;
console.log(index);

index++;
console.log(index);

index++;
console.log(index);

index--;
console.log(index);

index--;
console.log(index);

index--;
console.log(index);

let age = 66;
if (age < 18) {
  console.log('Держи сок');
} else if (age >= 65) {
  console.log('Вяжи носки');
} else {
  console.log('зарабатывай на дормоедов выше');
}


let name = ' ';

if (name.length) {
  console.log('Здравствуйте, ' + name);
} else {
  console.log('Здравствуйте, товарищ!');
}


for ( let i = 0 ; i < petsName.length ; i++) {
  if (petsName[i].length > 4) {
    console.log('Привет, ' + petsName[i]);
  } else {
    console.log('Хелло, ' + petsName[i]);
  }
}

function hello(name, date) {
  if (name) {
    console.log('Привет, ' + name);
  } else {
    console.log('Привет, товарищ!');
  }

  console.log('родился ты: ' + date);
}

hello(myName, '89');
hello('Kirill', '85');
hello('', '1910');


console.log('===============');
for (let i = 0; i < petsName.length; i++) {
  hello(petsName[i]);
}






















function test() {
  console.log('test');
}

test();


let test2 = function() {
  console.log('test2');
}

test2();

let dog = {
  name: 'Robin',
  age: '13',
  masters: [
    {
      name: 'Kirill',
      age: 37
    },
    {
      name: 'Anya',
      age: 'Не скажу'
    }
  ],
  gaf: function() {
    console.log('Дай жрать кожанный мешок, ' + this.masters[0].name);
  }
}

console.log(dog);

dog.gaf();
console.log();



let btnBurger = document.querySelector('.burger');
console.log(btnBurger);

// let servicesItems = document.querySelectorAll('.services-item');

// for (let i = 0; i < servicesItems.length; i++) {
//   servicesItems[i].style.color = 'red'
// }

$('.services-item').css({"color":"red"});

