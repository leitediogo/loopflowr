console.log('call-api started');

var xhr = new XMLHttpRequest();
//xhr.open("GET", "https://www.codecademy.com/", false);
xhr.open("GET", "http://localhost:3000/api/decisions/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
console.log(xhr.response);