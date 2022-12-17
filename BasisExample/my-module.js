export default (name) => {
    console.log(`Hello ${name}`);
};

const sum =  (a,  b) => a + b;

const subtraction =  (a,  b) => a - b;

const text = "text";

const object = {
    name: "Mehmet Berkan",
    surname: "Gorel",
    age: 21,
 };

const users = [
    {
        name: "Mehmet Berkan",
        surname: "Gorel",
        age: 21,
     },
     {
        name: "Mehmet Berkan2",
        surname: "Gorel2",
        age: 21,
     }
];

 export {
   sum, subtraction, object, users, text,
 };


