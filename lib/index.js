

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
function method(func) {}
method(() => [1]);