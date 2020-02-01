
//Bir tane uygulama yapalım input a veri  girelim girdiğimiz veri yi localStorage a ekleyeleim
//Öncelikle girilen veri yi localStorage da var mı sorgularız eğer yoksa dışarda her girilen değer array içerisine eklenir ondan sonra localStorage a JSON.stringify ile eklenir
//ya da eğer içerde eklemeyi düşündüğümüz veri varsa o zaman da o veriyi dışarı alırız JSON.parse ile ki hangi türde veri ise görelim ve dışarda input içinde girdiğimiz verileri ekleyelim sonra onu da localStorage a gönderelim
localStorage.clear();
let input = document.querySelector("#input");
let form = document.querySelector("#form");

form.addEventListener("submit", addItem);

function addItem(e) {
  let value = input.value;
  let todo1;
  if (localStorage.getItem("todos") === null) {
    todo1 = [];
  } else {
    todo1 = JSON.parse(localStorage.getItem("todos"));
  }

  todo1.push(value);

  localStorage.setItem("todos", JSON.stringify(todo1));

  e.preventDefault();
}

localStorage.setItem("name","john")
localStorage.setItem("surname","Kyller")
//Eğer bu değeri silmek istersek de sizin de tahmin edebileceğiniz üzere removeItem() methodunu kullanabiliriz:
localStorage.removeItem("name")