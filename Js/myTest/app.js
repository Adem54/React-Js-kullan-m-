array = [1, 2, 3, 4];
array.forEach(function (element) {
  console.log(element);
  
  if (element === 2) 
    return;
  
});
// Output:

/* 
forEach döngüsünde bilmemiz gereken üç şey
1-return forEach döngüsünü durduramaz çünkü forEach mantığında herzaman dizi içerisindeki son elemana kadar döner dizi içerisindeki en son eleman bittikten sonra döngü durur
2-break ile de durdurmazsınız
3-continue de kullanamazsınız


*/

let a=5;
a++;

console.log("a",a);
a+=2;
console.log("a: ",a);