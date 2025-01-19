// // global
// var a=5
// let a=5
// console.log(window.a==a);

// let ,const
// {
//     let a=5
//     console.log(a);
// }

// console.log(a,"diuh")

// const a=5
// a=5
// a()
// console.log(a);

// var a=56
// {
//     var a=11
//     console.log(a);
// }
// console.log(a)


// function sum(){
//     var a=5
//     console.log(a);
// }
// sum()
// console.log(a)


// function outer(){
//     let a=5
//     function inner (){
//         console.log(a);
//     }
// inner()
// }
// outer()


// let a=5
// function sum(){
//     console.log()
// }


//  topic: call,bind

let obj={
    firstname:"angle",
    lastname:"priya",
    // method
    fullname:function(city,age){
        console.log(this.firstname+" "+this.lastname+" "+city+" "+age)

    }
}
// obj.fullname() // object call

let user={
    firstname:"piyush",
    lastname:"patel",
}
// obj.fullname.call(user,'bhopal')
obj.fullname.apply(user,['bhopal',20])

