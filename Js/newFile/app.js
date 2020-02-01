console.log("Burası App.js dir")

const myData=[{text:"My Data is here",isCompleted:false}]
console.log("myData:",myData);
console.log("myDatat1: ",[...myData])


const copyMyData=[...myData];
console.log("copyMyData",copyMyData);
copyMyData[0].isCompleted=true;
console.log("copyMyData",copyMyData);

const newCopyMyData=[...myData];
newCopyMyData[0].text="This New Data";

console.log("newCopyMyData:",newCopyMyData)

//Dizi içerisinde obje olan dizi verisine obje ekleme
const addObj=[...myData,{text:"Add my Data",isCompleted:false}]
console.log("addObj: ",addObj    );

const myObj={text:"What do you say!",isCompleted:false}

const newMyObj={...myObj,myNumber:23};
console.log("newMyObj",newMyObj);
console.log({})

const InitalState=[
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Built really cool todo app",
      isCompleted: false
    },
    {
        text: "Yes we can meet",
        isCompleted: false
      }
  ]; 

  //Filter ile Dizi içerisinden eleman silme...
  const remove=InitalState.filter((dataObj,index)=>{
    //return !(index===1);
    return InitalState[1];
})

console.log("InitalState: ",InitalState);
console.log("Remove: ",remove);
