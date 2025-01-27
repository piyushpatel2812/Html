// let h1=document.querySelector('h1')
// let h2=document.querySelectorAll('h1')
// // h1.innerText='byeee!!!';
// console.log(h1,"sbidu",)
// // console.log(h1.innerText)
// // console.log(h2)

// let a=document.querySelector('a')
// //  setattribute change the value of key 
// a.setAttribute('href','http://youtube.com')
// //getattribute show the value of key 
// console.log(a.getAttribute('href'))

//  assignment 

// const arr=[
//     'https://plus.unsplash.com/premium_photo-1737731053080-067f31e0c200?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1737903071772-4d20348b4d81?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// ' https://images.unsplash.com/photo-1737749309296-4aacdefecdae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// ]
  
// const image=document.querySelector('img');
// let num =0;
// setInterval(function(){
//     image.setAttribute('src',arr[num]);
//     num=(num+1)%arr.length;

// },2000);


let div=document.querySelector('div')
let h1=document.createElement('h1')
h1.innerText='hello'
div.appendChild(h1)