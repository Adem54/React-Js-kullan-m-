//Her iki şekilde de dizi içerisindeki tüm elemanları sildiğimizi görebilirsizniz

const arr=["a",1,true,"b",4,5]
arr.splice(0,arr.length)
console.log("arr: ",arr)
const myArr=[1,2,4,5,6,7]
myArr.length=0;
console.log("myArr: ",myArr)

localStorage.setItem("name", "Ahmet");
localStorage.setItem("lastname", "Yılmaz");
localStorage.setItem("year", 1990);
let value = localStorage.getItem("year");
console.log(typeof value);
//Eklediğmiz değerleri getItem ile alabiliriz

//LocalStorage temizleme
localStorage.clear();
//Peki herhangi bir key değerinin olup olmadığını nasıl sorgularız
let sport = localStorage.getItem("sport");
console.log(sport); //Olmadığı için null gelir
localStorage.setItem("name", "Kemal");
//Bunu farklı bir şekilde de test edebiliriz
console.log(localStorage);
let name = localStorage.hasOwnProperty("name");
console.log(name); //var ise true gelir yoksa false gelir
if (localStorage.getItem("lastname") === null) {
  console.log("Sorguladığınız değer bulunamadı!");
} else {
  console.log("Sorguladığınız değer bulundu");
}

//LocalStorage ye Array Yazma

let todos = ["Todos1", "Todos2", "Todos3"];
localStorage.setItem("todo", todos);
console.log(localStorage.getItem("todo")); //Bu şekilde ekleyince string olarak ekliyor yani localStorage herşeyi string olarak ekliyor.O zaman önce stringe çevirip daha sonra localStorage a ekleriz ki içerde array gibi olsun
//Json.stringfy ile string e çevirerek array i localStorage ye alabiliriz
localStorage.setItem("todo1", JSON.stringify(todos)); //Bu şekilde aynı string gibi eklenmiş olurlar

//Peki bu array i nasıl alırız localStorage den aynı JSON daki mantığımzla önce veriyi alıp değişkene atarız daha sonra o değişkenden ise JSON.parse ile veriyi alırız
let myArray = localStorage.getItem("todo1");
console.log(JSON.parse(myArray));
