const InitalState={
    fetching:false,
    error:false,
    users:[]
  }

  const data=[{name:"Hasan",surname:"Kaya"}]

  console.log(
      {...InitalState,users:data}
  )

  const myObject=[]

  const newObject={
    name:"Kayahan",
      surname:"Kandemir"
  }

  console.log("combine Object: ",[...myObject,newObject] )