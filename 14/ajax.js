//Membuat Objek Ajax
var xhr = new XMLHttpRequest();

//Menentukan Fungsi Handler untuk Event
xhr.onreadystatechange = function() {  };
xhr.onload = function() {  };
xhr.onerror = function() {  };
xhr.onprogress = function() {  };

//Menentukan Method dan URL
xhr.open("GET", url, true);

//Mengirim Request
xhr.send();