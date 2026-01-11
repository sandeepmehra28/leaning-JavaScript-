//console.log('DOM script loaded');
//alert('Welcome to DOM Manipulation!');
//window.console.log('This is a message from the DOM script file.');
//window.alert('This alert is triggered by the DOM script file.');

// console.dir(document.body.style.backgroundColor="green");

//accessing id 
//let idStore = document.getElementById("heading");
//*/console.dir(idStore);

//let idStore1 = document.getElementById("keyTitle");
//console.dir(idStore1);


//accessing class
//let classStore = document.getElementsByClassName("heading");
//console.dir(classStore);

//let classStore1 = document.getElementsByClassName("keyTitle");
//console.dir(classStore1);

//accessing paragraph tag
//let pTagStore = document.getElementsByTagName("p");
//console.dir(pTagStore);


//querySelector
//let element = document.querySelector("p");
//console.dir(element);

//let element1 = document.querySelector("div").children;
//console.dir(element1);


//property
//let div = document.querySelector("div");
//console.dir(div.children);
//console.dir(div.childNodes);
//console.dir(div.innerHTML);
//console.dir(div.innerText);
//console.dir(div.textContent);


// let access = document.querySelector("div");
// console.dir(access);

// let value = access.getAttribute("id");
// console.dir(value);


// let para = document.querySelector("p");
// console.log(para.setAttribute("class","myClass"));


//Q
// let newBtn = document.createElement("button");
// newBtn.innerText="Click Me!";
// newBtn.style.color="white";
// newBtn.style.backgroundColor="red";

// document.querySelector("body").prepend(newBtn);

//Q
let para = document.querySelector("p");
console.dir(para);
console.dir(para.getAttribute("id"));
console.dir(para.setAttribute("myClass","newClass"));