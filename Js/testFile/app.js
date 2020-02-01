const InitalState = [
    {
      quotes: {},
      fethcing: false,
      fetching_message:"",
      error: false,
      error_message:""
    }
  ];
console.log("InitalState: ",InitalState)
  
//Biz eğer bir obje içerisine eleman bir eleman ekleyeceksek ve o eleman haricindeki obje elemanlarının da aynen eksilmeden gelmesini istiyorsak spread operatörü kullanıyorduk ancak dizi içi obje gibi karışık ifadelerde kafamız biraz karışabilir ancak şu şekilde düşünmeliyiz mesela ekleyeceğimiz obje properties i ve values unu içerisine ekleyeceğimiz obje nin yazarken o objenin başına da o obje yi temsil eden değişken ne ise onu yazmalıyız bu çok önemliiiiiii
const combineData=[{ ...InitalState[0], fetching: true, fetching_message: "Verimiz Yükeniyor!" }]
console.log("combineData: ",combineData)

const combineOther=[...InitalState];
console.log("combineOther:",combineOther)


const combineDif=[{fetching: true, fetching_message: "Verimiz Yükeniyor!" }]
console.log("CombineDif: ",combineDif)