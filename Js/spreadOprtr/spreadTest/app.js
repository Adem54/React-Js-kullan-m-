//Burda spread operatörünün farklı farklı denemelerini yaparak spread operatörünü nasıl kullandğımıza dikkat edeceğiz
//Öncelikle mantığımız şu olmalı en baştaki verimizin yapısı hiç değişmeden biz veri içerisindeki değerlerden birini değiştirince spread ile en baştaki verinin bir kopyasını alarak içerisindeki veriyi değiştirmiş yenilemiş veya güncellemiş olacağız burda şuna dikkat verinin en baştaki yapısına dokunmayacağız yani örneğin dizi içerisinde obje ise aynı şekilde olacak spread sonrası veya obje içinde dizi ve o dizi içinde de obje varsa spread yaptıktan sonra aynı şekilde veri yapısını almalıyız bu önemli

const people = {
  person1: [
    {
      name: "Ahmet",
      surname: "Yılmaz"
    }
  ]
};

// 1) Yukardaki verinin içerisindeki name değerini Fatih olarak değişitrip veriyi aynı şekilde spread ile geri döndürelim



const students = [
  {
    name: "John",
    surname: "Kyller"
  }
];

// 2)Yukardaki verinin içindeki surname verisini Ferguson olarak spread operatörü ile değişitirin

const workers = {
  worker1: {
    name: "Selim",
    surname: "Sancak"
  }
};

//3)Yukardaki verinin name i Serkan surname i de Sakarya diye spread operatörü ile değiştiriniz

const myValues={
    name:"Sercan",
    surname:"Kara"
}
const name=myValues.name;
const surname=myValues.surname

const details={}
console.log("details: ",{...details,name,surname})