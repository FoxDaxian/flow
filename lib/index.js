

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

// flow的alias type。也就是可复用的type
// 也可以使用泛型
// type myType<foo> = {
//     foo: foo
// };
// const obj: myType<string> = {
//     foo: 'fox'
// };

// opaque type aliases 没搞明白，先继续看

// 定义一个接口
// interface common {
//     say(): void;
// }
// 创造一个符合接口的类
// class foo {
//     say() {

//     }
//     go() {
//         return 1;
//     }
// }
// test实例要符合commoe接口，所以foo同理
// const test: common = new foo();

// 实现一个接口的类
// 必须相符合
// class foo implements common {
//     say() {
//     }
// }

// 实现多个接口的类
// 要求严格相符
// interface foo {
//     say(): { name: string };
// }
// interface bar {
//     write(): string;
// }

// class test implements foo, bar {
//     say() {
//         return {
//             name: '12'
//         };
//     }
//     write() {
//         return '123';
//     }
// }

// 接口泛型
// +: 只读
// -: 只写
// interface foo<A, B> {
//     +name: A;
//     -age: B,
//     say(): B;
// }
// const obj: foo<string, number> = {
//     name: 'fox',
//     age: 19,
//     say() {
//         return 1;
//     }
// };

// name前面不加+(只读)会报错。。。
// +允许为name属性执行更多的类型,string | number | array | ..
// interface foo {
//     +name: string | number;
// }
// const obj: foo = {
//     name: '1'
// };

// name前面不加-(只写)会报错。。。
// -允许为name传递任何一个符合结果的类型
// interface foo {
//     -name: boolean;
// }
// const temp = Math.random() > 0.5 ? 1 : false;
// const obj: foo = {
//     name: temp
// };

// type的泛型
// 都相同，函数名后面的T可以自定义，或者不管
// function foo<T>(value: T): T {
//     return value;
// }

// 指定类型，其作用域下所有属性、方法等 都可以使用
// function foo<T1: { name: string }>(value: T1): void {
//     console.log(value);
// }
// foo({age: 1, name: 'fox'});

// 不用泛型的话，即使参数和返回值是相同类型，flow也会报错
// 详见：https://flow.org/en/docs/types/generics/#toc-generic-types-act-as-bounds
// function foo(value: string): string {
//     return value;
// }

// let n: 'fuck' = 'fuck';
// let bar: '123' = foo('123');

// 使用泛型制作可复用类型
// type common<type> = {
//     name: type
// };

// const obj: common<number> = {
//     name: 1
// };
// console.log(obj);

// 下面两种写法效果一样，写法不同
// 并且，type是普通写法，interface是抽象类，这是区别
// type common<type> = {
//     name: type
// };

// interface common<type> {
//     name: type;
// }

// 泛型可以增加默认值
// type foo<obj: string = 'fox'> = {
//     name: obj
// };
// const obj1: foo<> = {
//     name: 'fox'
// };
// const obj2: foo<'test'> = {
//     name: 'test'
// };

// union type 合并类型，任何类型都可以混合
// type type = number | '1';
// const num: type = 123;

// function foo(value: number | string | boolean){
//     if(typeof value === 'number') {
//         return 1
//     }
// }

// 以上写法会出错
// type res = {
//     success: boolean,
//     value?: boolean,
//     error?: string
// };

// function foo(res: res) {
//     if (res.success) {
//             const val: boolean = res.value
//             console.log(val);
//     } else {
//         const err: string = res.error
//         console.log(err);
//     }
// }

// 下面这种并集写法，flow可以识别
// type Success = {
//     success: true,
//     value: boolean
// };
// type Error = {
//     success: false,
//     error: string
// };
// type Res = Success | Error;

// function foo(res: Success | Error) {
//     if (res.success) {
//         const value = res.value;
//     } else {
//         const error = res.error;
//     }
// }
// foo({
//     success: true,
//     value: false
// })

// 要使用相同的key来区分
// type Success = { success: true, value: boolean };
// type Failed  = { error: true, message: string };

// function handleResponse(response:  Success | Failed) {
//   if (response.success) {
//     // $ExpectError
//     var value: boolean = response.value; // Error!
//   }
// }

// 然而，可以使用确定类型的方式来使用相同的key区分
// type suc = {
//     success: true,
//     value: boolean
// };
// type err = {|
//     error: true,
//     message: string
// |};
// function foo(res: suc | err) {
//     if (res.success) {
//         console.log(res.value);
//     } else {
//         console.log(res.message);
//     }
// }

// 并集类型，可用于对象上
// type A = {
//     a: number
// }
// type B = {
//     b: string
// }
// type C = {
//     c: boolean
// }
// type objt = A & B & C

// const obj: objt = {
//     a: 1,
//     b: '2',
//     c: true
// }

// flow 中的 typeof 命令更具有力量
// 下面两个只能设置为{}
// const obj = {};
// const a: typeof obj = {};
// const b: typeof obj = [];

// 类型转换表达式
// 语法：(value: type)，括号必须
// function foo(value) {
//     const obj = {
//         name: (value: string)
//     };
// }

// 使用场景
// function foo(value, t) {
//     return ((value: any): typeof t);
// }
// foo(1, '2')

// 又或者
// function foo(obj: { [a: string]: string }) {
//     console.log(obj);
// };

// foo({
//     name: 'fox'
// });

// type内置的操作
// $Keys
// const Obj = {
//     name: 'fox',
//     age: 23
// };
// type obj = $Keys<typeof Obj>;
// const str: obj = 'age'

// $ReadOnly
// type Props = {
//   name: string,
//   age: number,
// };

// 只读化
// type ReadOnlyProps = $ReadOnly<Props>;

// function render(props: ReadOnlyProps) {
//   const {name, age} = props;
// }

// 取差集，第二个参数中不能出现第一个参数中没有的type键值对
// type Props = { name: string, age: number };
// type DefaultProps = { age: number, other: string | void };
// type RequiredProps = $Diff<Props, DefaultProps>;

// function setProps(props: RequiredProps) {
//     props.name;
// }

// type 模块化，注意一点，所以使用flow的地方顶部都要加上，不然不识别
// import type { num } from './type';
// const test: num = '123';

// type num = number;
// const a: num = 1
"use strict";