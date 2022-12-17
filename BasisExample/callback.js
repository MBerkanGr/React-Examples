//setTimeout(() => {
//    console.log("Hello")
//}, 2000)

//setInterval(() => {
//    console.log("Hello, I will work every second")
//},1000)

const sayHi = (cb) => {
    cb();
};

sayHi(() => {
    console.log("Hi");
});

import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//     console.log("User uploaded", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => data.json())
//     .then((post) => console.log("Post uploaded", post))
// });

// async function getData(){
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users").json);
//     const post1 = await (await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json());
//     const post2 = await (await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json());


//     console.log(users);
//     console.log(post1);
//     console.log(post2);
// }

// getData();

// (async ()=> {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users").json);
//     const post1 = await (await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json());
//     const post2 = await (await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json());
// })();

// (async ()=> {
//     const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");
//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();

// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         console.log("comments");

//         resolve(number);
//     });
// };

// getComments(2).then((data) => console.log(data)).catch((e) => console.log(e));

