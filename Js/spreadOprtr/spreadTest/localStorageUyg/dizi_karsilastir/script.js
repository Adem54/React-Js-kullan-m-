dizi1=[1,4,5,6,9]
dizi2=[1,4,5,6,9]
dizi1 === dizi2 ? console.log("Bu diziler eşittir") : console.log("Bu diziler eşit değildir")

if (dizi1 === dizi2) {
    console.log("Diziler birbirine eşittir")
}else{
    console.log("Diziler birbirine eşit değildir")
}

myObject1={
    name:"Ahmet",
    surname:"Keskin",
    age:32
}

myObject2={
    name:"Ahmet",
    surname:"Keskin",
    age:32
}

if (myObject1 === myObject2) {
    console.log("myObject1 myObject2 ye eşittir")
}else{
    console.log("myObject1 myObject2 ile birbirine eşit değildir")
}

//Objeler ve dizilerde karşılaştırmalarda referans adreslerini kıyaslayacaktır değerleri kıyaslamayacak ondan dolayı aynı değerlere sahip olabilir ama referans adresleri farklı olacaktır ondan dolayı eşitliği kabul etmez eşit olabilmesi için bir değişkene atamamız lazım dizi ya da objeyi
//Ancak eğer istersek bu dizilerin içindeki değerleri kıyaslayabiliriz bunun için sıra ile önce uzunluğuna bakarız zaten uzunluğu eşit değilse bu dizi de değerler birbirine eşit değildir

dizi1=[1,4,5,6,9]
dizi2=[1,3,5,6,9]

if (dizi1.length === dizi2.length){
    for (let index = 0; index < dizi1.length; index++) {
        const element = dizi1[index];
        if (dizi2.includes(element)) {
            console.log(element , " elemanı dizi2 de vardır")
        }else {
            break
        }
        
    }

} else {
    console.log("Bu dizilerin eleman sayıları eşit olmadığı için eşit değildir")
}

//every ile bir dizi içerisinde bir elemanı sırayla arayabiliriz ve dizinin her elemanında kontrol eder ve sonuç olarak true veya false olarak döner
//some da ise aradğımız değer i ilk buldğu yerde true olarak döner ve diğerlerini kontrol etmez

let newArray=[]
for (let index=1; index<=10; index++){
  if (index === 7){
    continue
  }else{newArray.push(index)}
  
}
console.log("newArray: ",newArray)