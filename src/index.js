// @flow

function foo(person: { name: string, age?: number }) {
    const { age } = person;
    console.log(age);
}
foo({ name: 'fox', age: 23 })
