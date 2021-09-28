/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/* 
Jawaban : 

Javascript memiliki 3 tipe scope, yaitu block, function, dan global scope. Block scope adalah variabel yang hanya bisa diakses di dalam {} saja. Local scope adalah variabel yang hanya bisa diakses di dalam function (){} saja. Sedangkan global scope bisa diakses dimana saja, karena letaknya berada diluar.  */ 

{
  let x = 0
}
// x tidak bisa digunakan lagi disini karena diluar scope. 

function coba() {
  let aku = "Jansen"
}
// aku tidak bisa digunakan lagi disini karena diluar scope, tapi kalau di dalam funsi coba() masih bisa.

let aku1 = "Jansen";
// aku1 bisa digunakan disini dan berisi string Jansen

function coba1() {
// aku1 juga bisa digunakan disini dengan isi yang sama
}


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///

/* 
Jawaban : 

Yang tampil adalah Mariah karena fungsi dari split disitu adalah untuk membagi string menjadi array dengan pembagi " " atau spasi. Jadi hasilnya akan menjadi Mariah sendiri dan Carey sendiri. Ketika kita mengakses [0] atau array ke - 0 maka yang muncul adalah Mariah. 
Lalu kenapa John Watson tidak muncul disebabkan tidak ada yang memanggilnya meskipun varibel nya nama di fungsi printFirstName tapi itu hanya parameter saja. */

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
