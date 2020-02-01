function test(){
    alert("Ben burdayım");
}

let dene=document.querySelector("#dene");
dene.addEventListener("click",()=>{
    alert("Bende burdayım ve ben addEventListener ile geldim buraya")
})

memet.onclick=function(e){
    alert("Bende memet ben de burdayım");
}

const staticList = [
    'Get out of bed, Wed Sep 13 2017',
    'Brush teeth, Thu Sep 14 2017',
    'Eat breakfast, Fri Sep 15 2017'
  ]

  staticList.map(item=>{
      console.log(item.toString());
  })

//Slice dizinin bir kopyasını alma
  const state = {
    todos: [
      { id: 1, desc: "Hello", deadline: "23.12.2010", done: false },
      { id: 2, desc: "Hi", deadline: "23.12.2012", done: false },
      { id: 3, desc: "Hiii", deadline: "23.12.2011", done: true },
      { id: 4, desc: "Helloo", deadline: "23.12.2013", done: true },
      { id: 5, desc: "Welcome", deadline: "23.12.2014", done: true },
      { id: 6, desc: "Have a good day", deadline: "23.12.2015", done: false }
]
  };
//spread operatörü ile kopya alma
  const arr=state.todos;
  console.log("Todos kopyası alındı",[...arr]);//Bu şekilde bir dizinin kopyasını alıyoruz

  //slice methodu ile kopya alma
  console.log("arr ",arr);
  let newArr=arr.slice(0);
  console.log("Arr: ",arr); 
 


//Concat birleştirme yapıyor
const arr1=["John",12,true];
const arr2=["Kamil",65,false];

const combin=arr1.concat(arr2);
console.log("Combin: ",combin);
console.log(...arr1);//
console.log(...arr2);
console.log(...combin)
console.log(["Norsk",34,"Engelsk",...arr1]);//Bir dizi ile başka bir diziyi birleştirirken kullanılabilir

function test(a,b,c){
console.log(a+b+c);
}

const arr4=[400,500,600];
test(100,200,300);
test(...arr4);
console.log(...arr4);
console.log([...arr4]);

const data=arr.find(todo=>{
   return todo.id = 2
});

console.log("Data Verisi:",data);
const arr8=["Kazım",3,4,6,2,6,8,8,9,87];
console.log("arr8: ",arr8);
arr8.length=1;
console.log("Dizimizin içindekie elemanlar",arr8);

let mydata=state.todos;
console.log("mydata: ",mydata);
const myNewData=mydata.filter(data=>{
  return data.id !== 4;
});

console.log("myNewData is here!!",myNewData);

let firstname="Adem";
let lastname="Erbaş";
let age=31;
let year=1988;

let myObject={
  firstname,
  lastname,
  age,
  year
}
console.log(myObject);
//Spread operatörünü obje içinde kullanmak
const gut1={
  age:14,
  height:155,
  eye:"green"
}
const voksen1={
  ...gut1,
  profession:"teacher",
  year:1980
}
console.log("voksen1",voksen1);



//Bir obje nin kopyasını alarak kopyası üzerinde değişiklik yapma yani mutable olan referanas tiplerden olan obje üzerinde immutable olarak işlem yapmak için kopyasını almamız gerekir bunları da yapabileceğimiz birkaç yöntem var 1-spread 2-Object.assign 3-Object.concat

const boy={
  eye:"green",
  length:178
}

const newboy={
  ...boy,
  eye:"blue"
}
console.log("boy: ",boy);
console.log("newboy:",newboy);

//Object.assign ile hem kopya alabiliriz hemde iki objeyi birleştirebiliriz
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

console.log("target:",target);
console.log("source:",source);

const returnTarget=Object.assign(target,source);
//Burda şu işlemi yapar source kaynaktaki verileri target e hedef e akatarı ilk yazılan hedeftir 2.yazılan ise kaynaktır ve kaynakta ki properties eğer ki target yani hedefteki properties ile çakışırsa o zaman da kaynaktaki properties in valuesini hedef target taki properties in value sinin üzerine yazacaktır ve soun durumda da birleşmiş olan objenin son hali hedef obje olacaktır ki şu şekilde başlar önce hedef objenin elemanlarından başlar önce onları tek tek yazar daha sonra kaynak source objesinin propertieslerine geçer ve onları yazar onları yazarken de eğer propertiesleri aynı olanlar denk gelirse o zaman kaynaktaki propertiesleri hedefteki lerin üzerine yazacaktır
console.log(returnTarget);
console.log("target:",target);
console.log("source:",source);

const returnTarget1=Object.assign(source,target);
console.log(returnTarget1);

//Object.assign ile Kopya alma

let _obj={
  name:"Kemal",
  lastname:"Sever",
  age:34
}

const _newObj=Object.assign({},_obj);
console.log("_newObj",_newObj);
console.log(Object.values(_newObj));

//Burda şuna dikkat edelim evet.target dediğmiz zamaan bize olay hangi html elemenetinde ise onu veriyor yani aynen sanki o html elementinin id si üzerinden getElementbyId ile o elementi biz dom üzerinde bir değişkene atamış gibi düşünebiliriz ve biz bu şekilde değişkene atadıktan sonra artık o elementin attribute leri o elementin child ı şeklinde düşünebiliriz ondan dolayı biz e.target.value diye input valuesini alabiliyoruz bu şekilde yani


 let input=document.getElementById("input");
 console.log("input.value:",input.value);

 //concat methodu ile bir dizi içerisine eleman eklenebiliyor....burda biz boş bir dizi içerisine obje eklemiş olduk
 const myspeacialArr=[];
 const myArr1=[4,6,"kemal"];
 const myArr2=["zeynep","zehra",true,87];
 const mergeArr=myArr1.concat(myArr2);
 console.log("Concat methodu ile iki diziyi birleştirdik",mergeArr);
  const myspeacialObj={
   id:123,
   text:"This is my text"
 }

console.log("Burda sonuç ne olur? ",myArr1.concat(myspeacialObj));
 const myResult=myspeacialArr.concat(myspeacialObj);
 console.log("myResult:",myResult);

 myspeacialArr.push(myspeacialObj);//push ile eklemeden sonra aynı dizi içerisine veriyi ekler yani biz push işlemi yapıp onu değişkene atamayı düşünürsek yanlış olur ki biz eklediğimi diziyi yazdırınca sonuca ulaşırırz
 console.log("myspecialArr: ",myspeacialArr);


 const API = "https://uinames.com/api/?ext&amount=5";

 async function getdata(url) {
   const response=await fetch(url);
   const data=await response.json();
 return data;
 }

getdata(API).then(data=>{
  const newdata=data.find(inf=>{
    return inf.name="Adela";
  })
  console.log(newdata);
})   
//Property ismi values e verilen değişken ismi ile aynı ise sadece birini yazmamız yeterli olacaktır buna örnek aşağıdaki gibidir
let firstName="Alexandır";
let lastName="Kakao"
let ageAlex=32
let alexMarried=true;

let mySpecialObj={
  firstName,
  lastName,
  ageAlex,
  alexMarried
}
console.log(mySpecialObj.firstName+" | "+mySpecialObj.lastName);

//Destructions olayına örnek.....
let myPersonObj={
  personName:"Mırtaza",
  personeLastname:"Yeteneksiz",
  personAge:34,
  personMarried:false
}

const {personName,personeLastname,personAge,personMarried}=myPersonObj;
console.log(personName,"  | ",personeLastname," | ",personAge," | ",personMarried);

//Constructor
//Constructor içerisinde herhangi bir değişken ya da herhangi bir method yanni fonksiyon yazılmak istenirse this.data ya da this.showInfos şeklinde yazılır ve o şekilde kullanılabilir
function Person(name,surname,age){
  this.name=name;
  this.surname=surname;
  this.age=age;
  this.showInfo=function(){
    this.data=this.name + this.surname + this.age + "yaşındadır";
    return this.data;
  }
}
const myObj23= new Person("Ahmet","Kahya",34);
console.log("myObj23",myObj23);
console.log(myObj23.showInfo())

class myObj322{
  constructor(name,surname,year){ //Constructor içerisinde yazarken mutlaka this. diye kullanalım herşeyi direk kullanamayız
    this.name=name;
    this.surname=surname;
    this.year=year;
    
  }
  //class içerisinde contstructor dışında ise eğer bir fonksiyon ya  da değişken tanımlıyorsak o zaman direk yazarak tanımlayabiliriz ancak şuna dikkat edelim eğer bu tanımladığımız fonksiyon ya da değişkenleri çalıştıracaksak yazdıracaksak,çağıracaksak o zaman kesinlikle this. diye çağırmamız gerekecektir.....
  //Ayrıca fonksiyon tanımlarken başına function da yazmamıza gerek yoktur...
  personName="Frederrik"
  showmyInfos(){
   return 12 +" | " +this.personName
  }
 
  showmyNumbers(){
    console.log(this.showmyInfos());
    const x=34;
    console.log(34);
  }
//const y; burda class içerisinde değişken i normal const,let,var ile tanımladığımız gibi tanımlayamayız....
}

const myObj323=new myObj322("Kamil34","jaskaw",45);
myObj323.showmyNumbers();


people= [1, 5, 7, 9, 12, 34, "Hasan", "Servet", true, "Kazım"]
console.log("People dizisinin uzunluğu: ",people.length);


for(let i=0;i<people.length;i++){
if(i<people.length){
  console.log(i,": ",people[i])
}else{
  console.log(i,". elemanda people dizisinde eleman yoktur!!")
}
}



//Reduce ile bir dizi içerisindeki birden fazla olan elemanı nasıl buluruz.....
//Buna tekrar bakalım...
let books = [
  "javascript",
  "javascript",
  "clojure",
  "clojure",
  "clojure",
  "java",
  "kotlin",
  "kotlin"
];


const firstValue={}
function _test(arr,count){//arr bir objedir
!arr[count] ?//countta objenin properties i dir ve sonucu value yei verir value yoksa eğer 1 yaz diyoruz
arr[count]=1 :
arr[count]=arr[count] + 1;
return arr;
}

let _result=books.reduce(test,firstValue);
console.log("Resulst..",_result);