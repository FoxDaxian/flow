function foo(person) {
    const { age } = person;
    console.log(age);
}
foo({ name: 'fox', age: 23 });