/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let count = 1
let p = 0
for (let i = 0; i <= 100; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}



/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 1;
let fiftiethPrime;

/// EDIT HERE
 p = 0
 i = 0
while ( i <= 500) { 
    let flag = 0;
    i++
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        p = primeCounter++
        if(p == 50){
          fiftiethPrime = i
          console.log(fiftiethPrime)
        }
    }
}



/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

 i = 0
let y = 0
let k = 1 
let l = 1
 p = 0
do {

  if (i%2 != 0 ) {
  // console.log(i)
  l = k++
  // console.log(`Ini ke - ${l} `)
  p = i
  } i++
}

while (i <= 100){
  // console.log(p)
  console.log(`${p} Ini bilangan ganjil ke - ${l}`)
}

