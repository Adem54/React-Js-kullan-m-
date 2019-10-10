let _arr34 = [
    { name: "Ahmet", surname: "Kara", country: "Turkey" },
    { name: "Adem", surname: "Kara", country: "Algeria" },
    { name: "Ali", surname: "Kara", country: "Turkey" },
    { name: "Serkan", surname: "Kara", country: "England" },
    { name: "Mahmut", surname: "Kara", country: "Turkey" },
    { name: "Jackson", surname: "Kara", country: "England" },
    { name: "Anderson", surname: "Kara", country: "Algeria" },
    { name: "Frederik", surname: "Kara", country: "England" },
    { name: "Fernando", surname: "Kara", country: "Algeria" },
    { name: "Kristian", surname: "Kara", country: "Turkey" }
  ];
  console.log("Dizi içerisinde objenin elemanı: ", _arr34[0]["name"]);
  //filter ile kaç tane şarta uyan varsa hepsini getirecek ama find ile o şarta uyan ilk bulduğu elemanı getirecektir....
  
  const myCountry = "Turkey";
  const findCountry = _arr34.find((item, index) => {
    return item.country === myCountry;
  });
  
  console.log("FindCountry: ", findCountry); //Sadece bir tane objeyi getiriyor karşımıza ilk bulduğu Turkey countr olan objeyi karşımza getirir ama direk obje olarak getiriyor
  
  filterCountry = _arr34.filter(item => {
    return item.country === myCountry;
  });
  console.log("FilterCountry: ", filterCountry); //Ülkesi Turkey olan 4 tane objeyi dizi içerisinde karşımıza getirecektir
  
  let _myMapArr = _arr34.map((item, index) => {
    return item.country;
    //   return item.country
  });
  
  console.log("_myMapArr:  ", _myMapArr);
  
  let myFirstArr1 = ["Turkey", "Greece", "French", "Turkey", "French", "Greece"];
  console.log("myFirstArr1: ", myFirstArr1);
  let firstElement = ["Turkey"];
  //DİZİ İÇERİSİNDE UNİQ ELEMAN OLACAK ŞEKİLDE FAZLALIKLARI ÇIKARTAN FONKSİYON...
  let myFunc = (acc, curr) => {
    let i = 0;
    let myArr = acc.filter(item => item == curr);
    //İÇERİSİNDE VERİ OLMAYAN BİR DİZİ NİN O. VEYA HERHANGİ BİR ELEMANI UNDEFİNED GELİR BİZ BÖYLE YADA LENGTH İLE SORGULAYABİLİRİZ.... acc[i].length == 0 da yazılabilir...
    
    if (typeof acc[i] == "undefined" || myArr.length < 1) {//Eğer acc içerisinde curr yani dizi içindeki eleman varsa o zaman acc dizisine hiçbirşey yapmadan aynen getir ama yoksa eğer o elemanı ekle demiş oldum burda..
      i++;
      //return acc.concat(curr);//push ile yapmıyor ekleme işlemini çünkü dışardan veriye müdahele var lenght değişiyor ve verinin içeriğine müdahele ediliyor oysa concat sadece birleştirme yapıyor
      return [...acc,curr];
    } else {
      return acc;
    }
  };
  
  const Uniq = myFirstArr1.reduce(myFunc, []);
  
  console.log("Uniq", Uniq);
  
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
  
    const booksUniq=books.reduce(myFunc,[]);
    console.log("books:",books);
    console.log("booksUniq:",booksUniq);
  
    const myPreviousCountry=_arr34.map((item,index)=>{//Her döndüğünde veriyi alır ve dizi içerisine atar dolayısı ile biz eğer li veya başka birşeyle alt alta sıralamak istesek en mantıklı yöntem dir diyebiliriz...
        return item.country;
    })
  
    console.log("myPreviousCountry:",myPreviousCountry);
    console.log("LengthmyPreviousCountry:",myPreviousCountry.length);
  
    //Every:Dizi içerisindeki tüm elemanlar şartları sağlarsa true gelir
    //some:Dizi içerisindeki elemanlardan bir tanesi bile şart sağlasa true gelir...
    //map
    //filter
    //find
    //reduce
    //Bu methodları iyi öğrenelim ki bunlarla çok işimiz olacak....
  
    //Çalışılacaklar
    //1- https://medium.com/@thrkardak/javascript-map-reduce-ve-filter-b%C3%B6l%C3%BCm-1-bfc7cd18f1e  bu sitedeki 10 tane exercisi yapalım....
    //2- Every ve some methodlarını kullanalım...
  
    //Array.some() Sonucu true veya false olarak döner bu önemli.....veri getirmez bir koşul soruglamamıza yarayacaktır
  //Bu method ile yapacağımız şey çok basit. Belirli bir array içerisinde vereceğimiz koşula uyan tek bir eleman dahi bulsa true dönecek olan bir method.
  //Burada some methodu bir callback ve index alıyor parametre olarak. Callback fonksiyonu içerisindeki koşul true dönene kadar çalışır. Truthy dediğimiz değeri bulduğu an çalışmayı durdurur ve true döner. Eğer öyle bir değer bulamazsa false döner.
  const years = [1989, 2000, 2018, 1970]; // 4 adet sene içeren bir arrayimiz olsun.
  const resutlSome=years.some((item,index)=>{
    console.log(index);//2.elemanda bitirir.
    return item >= 2000;
  })
  console.log("resutlSome: ",resutlSome);//İlk olarak koşulu sağlayan bir sayı bulur bulmaz fonksiyonu bitirir....
  const resultEvery=years.every((item,index)=>{
    console.log(index);
    return item>1989;//İçindeki şartlardan birisi bile uymazsa false gelir tüm dizi elemanları aynı anda şarta uyması gerekir içindeki lerden bir tanesi bile şarta uymazsa direk false döner...ve orda bitirir fonksiyonu....
  })
  console.log("resultEvery:",resultEvery);
  
  let resultEvery1=books.every((item,index)=>{
    return item === "javascript"
  })
  console.log("resultEvery1: ",resultEvery1)
  
  //DİZİ İÇİNDEKİ SAYILARIN TOPLAMI VE HERHANGİ DİZİ İÇERİSİNDEKİ SAYILARIN BİRBİRİ İLE ÇARPIMI GİBİ ŞEYLERİ BİZ REDUCE İLE ÇOK KOLAY BİRŞEKİLDE YAPABİLİR...
  //Bir dizi içerisindeki sayıların toplamını alma...
  const mySpecialArr=[1,3,5,7,9,11,13];
  let sum;
  let total=0;//İlk değeri vermezsen eğer o zaman yanlış olur...
  for(sum of mySpecialArr){
     total+=sum
     console.log(total);
    
  }  
  console.log("total:",total);
  //0 dan 10 a kadar olan sayıların faktöriyelini alma...
  let fakt=1;
  for(let i=1; i<=10;i++){
  fakt*=i;
  console.log(fakt);
  }
  console.log("FAKT: ",fakt);