// callback
// function callBack(a){
//     console.log('hello');
//     setTimeout(()=>{
//         a()
//     },2000)
 
// }
// callBack(function outer(){
        
// })



// function step1(fn){
//     setTimeout(()=>{
//         console.log('select');
//         fn()
//     },5000)
// }

// function step2(fn){
//     setTimeout(()=>{
//         console.log('filter');
//         fn()

        
//     },4000)
// }

// function step3(fn){
//     setTimeout(()=>{
//         console.log('caption');
//         fn()
//     },3000)
// }

// function step4(){
//     setTimeout(()=>{
//         console.log('post');
        
//     },2000)
// }
// // callBack hell
// // call the function 
// step1(function (){
//     step2(function () {
//         step3(function () {
//             step4()
//         })
//     })
// })


// promise
 let promise= new Promise((res,rej)=>{  // syntax
    // rej()
    let a= false
    if(a){
        res()
    }
    else{
        rej()
    }
 })

//  console.log(promise,'hehheehe');

promise.then(()=>{
    console.log('hello');
    
}).catch(()=>{
    console.log('hiii');
})

 