/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/* 
Jawaban : 

Syntax Error adalah error yang muncul ketika kita salah memasukan syntax saat melakukan sesuatu, contoh lupa ) atau tutup kurung ketika menulis fungsi. Range Error adalah error yang muncul ketika range dari angka yang kita masukan diluar itu, contoh ketika memasukan angka negatif (-) ke array. Type Error adalah error yang muncul ketika memasukkan fungsi yang tidak berada di javascript, contohnya num.sbtract() akan menghasilkan error. Reference Error muncul ketika referensi kepada variabel yang belum di inisialisasi, contohnya console.log(apa1), namun apa1 belum dideklarasi sebelumnya. */

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/*
Jawaban : 

Akan terjadi error, error nya berupa ReferenceError, hal ini terjadi karena salaryWithVar dan salaryWithConst belum dideklarasi sebelum dipanggil untuk ditampilkan di console, sehingga tidak bisa menunjuk apa-apa. Kalau console.log nya ditaruh dibawah deklarasi varibel maka program akan berjalan dengan semestinya. */


console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
