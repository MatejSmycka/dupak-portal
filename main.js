function main() {
names = document.querySelector('input[name="names"]:checked').value;
var url = "93.99.178.183:60607";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = names;

xhr.send(data);

}