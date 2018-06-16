
import { person, sayHello } from './lib';
console.log(person);

let test = () => console.log(person.name);
test();

 console.log(sayHello('Mohammed Ali'));

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data= await response.json();
    return data;
}

getPosts().then(posts => console.log(posts))