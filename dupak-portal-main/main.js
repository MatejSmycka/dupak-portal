function main() {

var url = "http://93.99.178.183:60608";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = document.getElementById("names").value;

xhr.send(data);

alert("dikec");
}