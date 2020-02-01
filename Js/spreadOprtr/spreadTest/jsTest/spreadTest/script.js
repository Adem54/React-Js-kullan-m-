const initalState=[
    {
    fetching:false,
    error:false,
    quotes:{}
    }
]

const copyInitalState={...(initalState[0]),fetching:true}
console.log("copyInitalState: ",copyInitalState);

const myObject1={name:"Ahmet",surname:"Kayaalp"}
console.log("myObjectProperties: ",Object.keys(myObject1)[0]);
const myObject2={}
console.log("myObject2Properties: ",Object.keys(myObject2))

const state=[]

const newState=[]


newState.push({name:"hasan",surname:"Salı"})
console.log("State: ",{...state,newState})
newState.push({name:"Kamil",surname:"Keser"})
console.log("State: ",{...state,newState})
newState.push({name:"Serdar",surname:"Çalım"})


console.log("State: ",{...state,newState})
const newArr=[...state,newState]
console.log("newArr: ",newArr[0][0])

const mytestArr= []
const myTestObj1={id:1,year:1992}
const myTestObj2={id:2,year:1999}

console.log("myTestArr: ",[...mytestArr,myTestObj1])
console.log("myTestArr: ",[...mytestArr,myTestObj2])


console.log("localStorage de values var mı? ",localStorage.getItem("values"))

if (localStorage.getItem("values") !== null) {
    console.log("localStorage de zaten values verisi mevcuttur!")
}else{
    localStorage.setItem("values","Ahmet")
}