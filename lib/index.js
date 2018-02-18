

// 返回值和传入的值类型一致，固定写法
// function identity<T>(value: T): T {
//     return value;
// }

// let foo = 42;

// function mutate() {
//     foo = true;
//     foo = 'hello';
// }

// mutate();
// let name: string | number | boolean = foo;

// function foo(name: string, age?: number, ...other: Array<number>) {
//     console.log(name);
//     console.log(age);
//     console.log(other);
// }
// foo('fox', null, 1, 2, 3);

// function foo(a, b): boolean {
//     return !!a && !!b; 必须转为布尔
// }
// foo('1', '2');

// function isString(y): %checks {
//     return typeof y === 'string';
// }

// function isNumber(y): %checks {
//     return typeof y === 'number';
// }

// function isNumberOrString(y): %checks {
//     return isString(y) || isNumber(y);
// }

// function foo(x): string | number {
//     if (isNumberOrString(x)) {
//         return x + x;
//     } else {
//         return x.length;
//     }
// }

// foo('a');
// foo(5);
// console.log(foo({}), 1);

// 函数参数为函数时，可以用() => void | number | ...(类型)表示
// function method(func: () => Array<number>) {

// }
// method(() => [1])

// 指定key，不允许有额外的
// const obj: {|name: string|} = {name: '123', age: 2}

// indexer property类型，指定key的类型的操作
// const obj: {[string]: number} = {}
// obj['1'] = 2

// const arr: Array<mixed> = [1, 2]

// 数组简写
// let arr: number[]
// arr = [1]

// 属性可选
// let arr: ?number[] = undefined; // 要么为数字类型数组，要么为空
// let arr2: (?number)[] = [undefined] // 数组内容要么数字，要么空

// 数组访问不安全，因为即使是undefined，flow也不会报错
// const arr: number[] = [];
// let value: number | void = arr[0];
// console.log(value);

//元组类型 => Tuple
// 就是有具体个数限制的数组
// 下面的例子string | void 意味着arr只能是字符串或者undfined
// const arr = ['1'];
// let value: string | void = arr[1];

// 基本类类型操作
// class Person {
//     name: number = 1;
//     say() {
//         console.log(this.name);
//     }
// }
// const person: Person = new Person()

// 为类增加泛型
// class Person<A, B> {
//     constructor() {

//     }
//     say(name: A, age: B): A {
//         console.log(name);
//         console.log(age);
//         return name;

//     }
// }
// 不要忽略<string, number>
// const person: Person<string, number> = new Person();
"use strict";