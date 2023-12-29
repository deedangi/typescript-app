// let firstName:string="fruit" // give implicitly default type

// let count:number=0
// let isLoading:boolean=true

// let numbers:any  // any will take all values like num, string.

// let numm:undefined=undefined

// let age:null=null

// // ##  union - give multiple values  - 
// let namee:null|string=null

// // ## object define -

// const user:{name:string, age:number, id?:number}={  // question mark denote as optional value 
//   name: "deepika",
//   age: 20,
//   id:1
// }

// // Array - 

// const fruits:string[] = ["apple", "orange"]

// const num:number[] = [1,2,3,4]

// // Object of array (interface)

// const users:{id:number, name:string}[] = [{id:1, name:"ram"}]

// // functions - 

// const sum = (a:number,b:number)=>{
//   return a+b
// }

// sum(1,2)


// const handleResponse=(payload:{userId:number}, callback:(a:number,b:number)=>number)=>{

// }

// // handleResponse({userId:1}, sum)

// // const handleResponse=(payload:{userId:number}, callback:(a:number,b:number)=>void)=>{

// // }



// // #Interface -

// interface User extends persion{
//   name:string,
//   id:number,
//   getUser:()=>void
// }

// interface persion{
//   department:string
// }

// let data:User={
//   name:"fruit",
//   id:1,
//   getUser:()=>{},
//   department: "It"
// }


// //  Type -

// type employee={
//   id:number,
//   name:string
// }

// type manager={
//   department: string
// } &employee

// let employeewithmanager:manager={
//   department: "A",
//   id:2,
//   name:"surea"
// }






