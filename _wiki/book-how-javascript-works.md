---
name: 자바스크립트는 왜 그 모양일까? 
title: 자바스크립트는 왜 그 모양일까?
layout: page
permalink: book-how-javascript-works.html
sidebar: other_sidebar
collection: wiki
summary: "더글라스 크락포드가 알려주는"
tags: [web, regex, javascript]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-10-19 4:09 AM
toc: true
public: true
parent: [[Books-Category]] 
latex: false
simple_map: true
map_name: javascript
box_number: 1
folder: wiki
series: "JAVASCRIPT series"
weight: 1
---

{% include custom/series_javascript_next.html %}

* TOC
{:toc}

# Thi

{% assign img-url = '/img/post/js' %}

Quick references for fundamental things in JavaScript.

:point_right: Notion note: [JS 101](https://www.notion.so/dinhanhthi/JS-101-986f4079607641d49ca8e149a1d29cec).
[js 101]({{ site.baseurl }}2021-10-19-Javascript-101.html)

## Miscellaneous

- Using `//` for 1 line comment, `/* */` for multi-line comment.
- End of each command by `;`.
- Variables and function name are case sensitive.
- Variables / functions should be named in the form of `nameOfVariable`.
  - Naming a constant: `const FAV_PET = 'Cat';`.
  - `UpperCamelCase` should be used by convention for ES6 class names.
- Using `\` for special characters, for example, `\"` for a `"` inside a `""`.
- `''` can be used inside a `""` and vice versa.

## Practice directly on the browser

Open the browser (I use [Chrome](https://www.google.com/chrome/)), press <kbd>F12</kbd> to open the ***Inspect*** window, then choose tab ***Console***. Now, you can practice on this console window, for example, try with `1+1` and press <kbd>Enter</kbd>.

## ES6

- "ES" = "ECMAScript" ~ "Javascript".
- Most of browsers use ES6 but not all.
- ES6 = ES2015
- [JS timeline]({{img-url}}/js_timeline.svg){:target="_blank"}.
- **New features**: [Arrow functions](https://www.w3schools.com/js/js_arrow_function.asp), Classes, Modules, Promises, Generators, `let` and `const`.
- Read [more about ES6 on w3schools](https://www.w3schools.com/js/js_es6.asp).

### Concise things

```js
// Concise Object Literal Declarations
const getMousePosition = (x, y) => ({ x, y });
~~~

```js
// Concise Declarative Functions
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
~~~

### Getters and setters

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
~~~

### Export/Import to share code blocks

```js
// file ./math_funcs.js
const add = (x, y) => {return x + y};
const subtract = (x, y) => {return x - y};
export { add, subtract }; // can be imported in other scripts

// file ./math_default.js only has 1 export
export default function(x, y) { // without name
  return x + y;
}
~~~

```js
// main.js
import {add, subtract } from './math_funcs.js';
import * as myMathModule from "./math_functions.js"; // everything

import anything from './math_default.js'; // from export default
~~~

## Declare variables & Scopes

<div class="col-2-equal">

```js
var varName; // global scope
let varName; // ES6, block scope (inside {} or function,...)
const varName; // ES6, can't be changed
~~~

```js
function funcName(){
  oopsGlobal = 5;  // without `var`, it's a global variable
}
oppsGlobal; // returns 5
~~~
</div>

Difference between `var`, `let` and `const`,

<div class="col-2-equal">

```js
var a = 1;
var a = 2; // ok, a=2 now
a = 5; // a=5 now
~~~

```js
let c = 1;
let c = 2; // error
c = 3; // c=3 now
~~~

```js
const b = 1;
const b = 2; // error
b = 2 // error
~~~

```js
const s = [1, 2, 3];
s = [1, 2, 4]; // error
s[2] = 4; // OK
~~~
</div>

`var` is "function" scope whereas `log` and `const` are "block" scope.

::: col-2-equal
```js
function someFn() {
  if (true) {
    var localVar=1000
    console.log(localVar)      //ok
  }
  console.log(localVar)        //ok
  function nested() {
    console.log(localVar)      //ok
  }
}
console.log(localVar)      //error
```

```js
function someFn() {
  if (true) {
    let localVar=1000
    console.log(localVar)      //ok
  }
  console.log(localVar)        //error
  function nested() {
    console.log(localVar)      //error
  }
}
console.log(localVar)      //error
```
:::

## Output

```js
myName = "Thi"
console.log("I'm " + myName + ".");
console.log(`I'm ${myName}.`); // ES6
~~~

## Basic operators

Check [more operators](https://www.w3schools.com/jsref/jsref_operators.asp) & [more operators with `Math`](https://www.w3schools.com/jsref/jsref_obj_math.asp).

<div class="col-2-equal">

```js
i = i + 1; // i++; // i += 1;
i = i - 1; // i--; // i -= 1;
i = i * 3; // i *= 3;
i = i / 2; // i /= 2;

11 % 3 // = 2, remainder
~~~

```js
Math.random(); // give a random number between 0 and 1
Math.floor(); // round to its nearest whole number

parseInt("007a"); // give number 7
parseInt("11", 2); // give number 3, "2" is radix
~~~
</div>

## Conditional statements `if` / `switch`

- **Comparison Operators**: `<`, `==`, `===` (strict equality), `>`, `>=`, `<=`, `!=`, `!==` (strict inequality).
  - Difference between `==` and `===`: `3=='3'` (true), `3==='3'` (false).
  - Difference between `!=` and `!==`: `3!='3'` (false), `3!=='3'` (true).
- **Logical operators**: `&&`, `||`, `!`.
- **Short-circuit evaluation**: `let a = b || 'Thi';` (if `b` isn't defined yet, `a` takes value `'Thi'`)
- **Ternary Operator**: `isNightTime ? console.log('Yes!') : console.log('No!');`. We can use multiple nested ternary.

<div class="col-2-equal">

```js
if (true){
  // commands
}

if (true){
  // commands
} else if (true){
  // commands
} else{
  // commands
}
~~~

```js
let var = 'papaya';
switch (var) {
  case 'val1':
    // commands
    break;
  case 'val2':
    // commands
    break;
  default:
    // commands
    break;
}
~~~
</div>

You can remove `break;` to apply the same result for multiple cases.

## Functions

<div class="col-2-equal">

```js
// ES6 way
const rectangleArea = (width=10, height=5) => {
  let area = width * height;
  return area;
};
~~~

```js
// if there is no parameter
const <func> = () => {};

// if there is only one parameter
const <func> = <para> => {};

// single line: no need "{}"
const sumNumbers = number => number + number;
~~~
</div>

Older ways (ES5),

```js
function <funcName>(<para>){
  // commands
}
~~~

<div class="col-2-equal">


<div>

Rest parameter (ES6)

```js
const last_element = (...args) => {
  return args[-1];
}
last_element(1,2,3); // 3
~~~
</div>

<div>

Spread Operator (ES6)

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // 89
~~~
</div>
</div>

## Strings

Check [more methods](https://www.w3schools.com/jsref/jsref_obj_string.asp).

```js
var a = 'Anh-Thi' + 'Dinh'; // plus the strings
a.length; // length of the string
a[0]; // first letter of the string
a[3]; // 4th letter
a[a.length - 1]; // last letter

a[0] = 'D'; // !!! CAN'T change an individual word
~~~

**Special characters**: `\'` (single quote), `\"` (double quote), `\\`(backslash), `\n` (newline), `\r` (carriage return), `\t` (tab), `\b` (word boundary), `\f` (form feed).

## Arrays

Check [more methods](https://www.w3schools.com/jsref/jsref_obj_array.asp).

```js
var arrName = ['a', 1, 'c'];
var nestedArr = [[1, 2], [3, 4]];

arrName[0] = 2; // 1st element is changed (different from string!)
nestedArr[1]; // gives [3, 4]

arrName.push(5); // add 5 at the END of an array
arrName.unshift(6); // add 6 at the BEGINNING of an array

popedElement = arrName.pop() // remove the LAST element of an array
shiftedElement = arrName.shift() // remove the FIRST element of an array
~~~

## Objects

<div class="col-2-equal">

```js
var myObj = {
  top: "hat",
  "bottom": "pants"
};

// CHECK PROPERTIES
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
~~~

```js
// Accessing Object Properties
myObj.top; // dot
myObj["bottom"]; // bracket

var pos = "top";
myObj[pos]; // via a variable
~~~
</div>

```js
myObj.top = "T-shirt"; // Update object properties
myObj.middle = "New shoe"; // Add new properties
delete myObj.middle; // Delete a property
~~~

We can use object for lookups instead of using `if..else` or `switch`,

```js
var alpha = {1:"A", 2:"B", 3:"C"};
value = 2;
alpha[value]; // instead of using if value==2 or switch value...
~~~

We can create a **nested object** inside an object.

Prevent object mutation,

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj); // obj can't be changed
~~~

## Destructuring Assignment (ES6)

Extract values from object,

```js
const user = {name: "Thi", age: 30};
const {name, age} = user; // name="Thi", age=30
~~~

Assign variable from object,

```js
const {name: uName, age: uAge} = user; // uName="Thi", uAge=30
~~~

Assign Variables from Nested Objects,

```js
const user = {
  anhThi: {
    age: 30,
    email: 'dinhanhthi@gmail.com'
  }
};
const {anhThi: {age, email}} = user;
const {anhThi: {age: userAge, email: userEmail}} = user;
~~~

Assign Variables from Arrays,

<div class="col-2-equal">

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
~~~

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
~~~
</div>

Assignment with the Rest Parameter to Reassign Array Elements,

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
~~~

Pass an Object as a Function's Parameters,

```js
const profileUpdate = ({ name, age, nationality, location }) => {
  // do something with these fields
}
~~~


## JSON

**JavaScript Object Notation** or JSON is a related data interchange format used to store data,

```js
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [
      "CD",
      "Cassette",
      "LP"
    ],
    "gold": true
  }, // first artist
  {
  ...
  } // second artist
];
~~~

To access `"CD"`: `ourMusic[0].formats[0]`.

## Iterate with `while` / `for` / `do..while` loops

Check [more statements](https://www.w3schools.com/jsref/jsref_statements.asp).

<div class="col-2-equal">

```js
while (<conditions>){
  // commands
}
~~~

```js
do{
  // commands
} while (<conditions>);
~~~

```js
for (var i=0; i<5; i++){
  // commands
}
~~~

```js
// Iterate odd numbers
for (var i=0; i<5; i+=2){
  // commands
}
~~~

```js
// Count backwards
for (var i=10; i?5; i-=2){
  // commands
}
~~~
</div>

## References

- **freeCodeCamp** -- [JavaScript Algorithms and Data Structures Certification](https://www.freecodecamp.org/learn) (300 hours).
- **w3schools** -- [JavaScript Tutorial](https://www.w3schools.com/js/default.asp).
- [Event bubbling and capture](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)

## 개요

| ![표지](http://image.kyobobook.co.kr/images/book/xlarge/595/x9788966262595.jpg) | 저자: 더글러스 크락포드 (Douglas Crockford) <br> 책제목 : 자바스크립트는 왜 그 모양일까? (원제 : How JavaScript Works) <br> 부제 : 더글러스 크락포드가 알려주는 <br> 위험한 자바스크립트를 안전하게 사용하는 법 <br> 출판사 : 인사이트 <br> ISBN 한글 : 978-89-6626-259-5 <br> ISBN 영문 : 978-1949815009 <br> <br> 값: 28,000원 |

#### 저자 설명

#### 더글러스 크락포드

* 더글러스 크락포드는 자바스크립트 구루(Guru)라고 불리지만, 구루보다는 사실 성인(Mahatma)에 가깝다
  * (내생각) 번역한 책을 읽어보면 말하는 스타일이 ... 그런 스타일이라는 걸 알 수 있다.
* JSON 창시자, JSLint, JSMin 도구 개발
* [Douglas Crockford, 영문위키](https://en.wikipedia.org/wiki/Douglas_Crockford)
* [더글러스 크록포드, 한글위키](https://ko.wikipedia.org/wiki/더글라스_크록포드)
* [관련기사 : Douglas Crockford and his book "How JavaScript works"](https://www.codemotion.com/magazine/dev-hub/web-developer/douglas-crockford-presents-his-new-book-how-javascript-works/)
* [Douglas Crockford, github](https://github.com/douglascrockford)
* [Douglas Crockford, homepage](https://www.crockford.com/isbn-13.html)
  * [Douglas Crockford, 소개페이지](https://www.crockford.com/about.html)

### 시작하기 전에

* 제가 사용하는 프로그래밍 언어를 다루는 스킬을 향상시키는 가장 효과적인 방법은 다음과 같습니다
  > 이따금 유용하지만 때때로 위험한 기능과 안전하면서 더 나은 다른 기능이 있다면, 항상 더 나은 다른 기능을 사용하라
* (내생각) 현재 Javascript 표준에 대해 대단히 비판적인 관점을 가지고 있다. 
  * 십년 전과 비교했을 때 자바스크립트의 좋은 부분은 점점 더 적어지긴 했지만, 대행히 좋은 부분은 훨씬 더 좋아지고 있습니다.
  * ECMA-Script 표준 개정안은 자바스크립트의 본질적인 문제를 해결하지 않고, 오히려 새로운 문제를 일으키기도 합니다.

#### 이단

* 더글라스 크락포드는 공격받는데 익숙하지만 대체로 옳았다고 본인이 생각함 ( Javascirpt를 옹호했을때, JSON을 창시했을 때)
* 이 책의 관점이 이단이라고 공격받을 수 있다는 점을 암시

#### 코드

* 코드는 공개되어 있음
* [원서의 정오표](http://howjavascriptworks.com/erratums/) - 2020-12-01 현재 발견된 에러가 없다고 한다....
* [번역서의 정오표](https://bit.ly/33d6t0R) - 2020-12-01 2개 있음
* [my_code](https://github.com/aiegoo/how-javascript-works)

#### 다음 세대 언어

* 전 아이들이 미래라고 믿습니다. 아, 물론 로봇도요. ( 로봇 예찬론자인가..)
* 다음 프로그래밍 패러다임은 `분산 비동기 프로그래밍`
  * 기존의 패러다임은 지역적, 불안전하며, 순차적인 패러다임, Javascript도 마찬가지

#### 이 단락을 읽어보면 이 사람 성격및 고집 정도를 알 수 있다....

* (내생각) 이사람의 코딩 예제 중에 `wun` 혹은 `wunth`로 명명한 이름이 있는데 구글에 물어봐도 의미를 알기어렵다. 이 단락에 설명이 되어있다
* one → wun
  * 숫자 1에 대한 영어 단어인 one은 제가 일부러 다른 철자를 사용하고 있습니다
  * 저는 `wun`이 올바른 철자라고 생각합니다 
    * one의 발음은 그 어떤 영어 발음 방식과도 들어맞지 않습니다
    * (내생각)`원`이라는 발음에 맞춰 본인이 단어를 만든건가??? 
  * 숫자 1을 의미하는 단어가 숫자 0으로 보이는 알파벳으로 시작하는 건 버그처럼 보임
  * wun이 익숙하지 않아 불편하겠지만 불편이 잘못이 아니라는 걸 보여주기 위해 계속 사용할테니 니들이 참으셈..
* through → thru
  * through 철자는 절반이 묵음이며 언어를 배우는 학생에게 불필요한 부담을 주고 있음
  * thru가 더 낫지 않음?
  * 철자를 바꾸는 것은 전통과 이유간의 대립, 가끔 이유가 이기기도 함
  * one → wun 바꾸는 운동에 당신도 동참하길 ... (선동중임)
* 개발자와 비개발자의 차이점
  * 1 to 10?
    * 개발자 : 1 ~ 9 ( 10제외 , 0 부터 시작하는 인덱싱 버릇)
    * 일반인 : 1 ~ 10 ( 10포함 )
  * 더.크가 앞으로 사용할 지침
    * 0 to 3 = 0, 1, 2 포함 (개발자의 to 의미)
    * 0 thru 3 = 0, 1, 2, 3 포함 ( 일반인의 to 의미)

#### 예제

* 정규표현식은 공백이 없어 이해하기 힘듬
* 이해를 돕기 위해 정규표현식에 공백을 추가함
* 실제 적용하려면 공백문자를 없애고 사용하셈


### 이름

* 모든 이름은 문자로 시작하여 문자로 끝낼것
  * _(밑줄)로 시작하는 이름은 일반적으로 public 속성이나 전역변수
    * 이런 변수는 모두 private으로 할 수 있음.
    * 앞이나 뒤에 밑줄을 쓰는 것 개발자의 무능을 의미
  * $(달러) 기호는 코드 생성기에서 사용할 목적으로 추가됨
    * 당신이 코드 생성기가 아니라면 사용하지 말것
  * 이름에 숫자가 들어가는 경우는 개발자가 이름에 대해 충분히 생각하지 않았다는 증거
    * 순서를 나타내는 서수형 변수 : thing_nr => person_one
    * 크기를 나타내는 기수형 변수 : nr_things => two_persons
  * Javascript가 위의 이름을 허용하는 것은 해서는 안될일
* 이름에 공백이 허용되어야 한다고 생각 ( 내 생각은 지금이 더 좋은듯 한데 ... keyword와 구별이 안될 수 있을듯)
  * 차선으로 단어간 연결을 _(밑줄)로 연결 ( 나중에 공백으로 바뀌면 바꾸기 더 좋기 때문에)
  * (내생각) 나는 CamelCase 파임.
* 모든 이름은 소문자로 시작해야함 - 잘 이해가 안되는 부분..
  * new 연산자 때문
  * 함수 호출문이 new로 시작하면 해당 함수는 생성자로서 호출됨. 아니면 그냥 함수로 호출
  * 생성자와 함수의 기능은 완전히 다르고 잘못 호출할 경우 문제 발생.
  * 더 안좋은 상황은 생성자와 함수는 겉보기가 같아 자동으로 감지하기가 힘듬 (JSLint같은 도구??)
  * 에러를 감지하기 위한 시작적인 표시의 제안
    > 모든 생성자 함수의 이름은 대문자로 시작되어야 하며, 그렇지 않은 모든 경우에는 소문자로 시작되어야 함
* 좀 더 믿을 만한 방법 - 극단적인 방법??
  * 절대 new를 사용하지 말것
  * new를 쓰지 않으면 대문자로 시작할 일이 없음
  * 때문에 모든 이름을 소문자로 쓸 것...

#### 예약어

* 예약어는 컴퓨터 메모리가 부족하던 50~60년대의 어쩔수 없는 선택
* 현재는 의미없는 제한된 사고 방식
* 불안정한 예약어 전략은 언어에 새로운 기능을 깔끔하고 직관적으로 추가하기 어렵게 만듬
* 앞으로는 예약어 없는 언어가 개발되길..

#### 숫자

* 자바스크립트는 숫자형이 number 하나라는 이유로 자주 비판받았습니다
  * 하지만 이는 자바스크립트의 아주 큰 강점중 하나입니다
  * 어떤 숫자형을 사용할 지 고민할 필요가 없어 생산성 증가
  * 타입 변환 오류, int형의 오버플로우 오류에서 자유로움
  * 자바의 정수보다 훨씬 안정적
    ```js
    자바스크립트 : 2147483647 + 1      // 2147483648 정확하게 맞음
    자바         : 2147483647 + 1      // -2147483648 완전히 잘못됨 
    ```
  * 위의 경우 자바는 아무런 경고없이 언제든 잘못될 수 있는 숫자 시스템임 
    * int형은 오류를 방지하지 못하며 오히려 오류를 유발함
* number는 IEEE 754 부동소수점 연산 표준을 따름 
  * IEEE 754 표준 전체가 아니라 일부분중 일부분만 사용 
  * 자바스크립트의 number는 자바의 double과 아주 밀접
    * 64비트 2진 부동소수점 타입

#### 영(0)

* 0이 하나만 존재하는 것이 제대로 된 시스템
* 두 개의 0
  * 이상한 현상 : IEEE 754 표준에는 0과 -0 이라는 두 개의 0이 존재
  * 아래의 경우를 제외하면 -0의 존재를 무시해도 됨
    ```js
    (1 / 0) === (1 / -0)    // false
    Object.is(0, -0)        // false
    ```
* 0으로 무언가를 나누거나 Object.is()를 굳이 사용할 필요도 없으니 무시해도 됨

#### 숫자 리터럴

* 자바스크립트에는 18437736874454810627개의 불변 숫자 객체가 내장되어 있음
  * 어떤 경우에는 딱 맞는 값이고
  * 또 어떤 경우는 9.979...e+291만큼 차이가 나기도 함
* 정수에 대한 숫자 리터럴은 연속한 10진수 숫자들
* 다음 표현은 2018이라는 숫자에 대한 참조를 생성
  * 2진수: 0b11111100010
  * 8진수: 0o3742
  * 10진수: 2018.00
  * 16진수: 0x7E2
* Infinity는 표현하기에는 너무 큰 모든 숫자
  * [Infinity, MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
  * ∞ 와 Infinity는 같지 않다 - 자세한 내용은 [Number.POSITIVE_INFINITY](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY) 참조
* NaN은 숫자가 아닌 숫자 - 'Not a Number'
  * typeof 연산자가 NaN을 "number"형으로 표시하여 혼동을 줌
  * 문자열을 숫자로 변경하려다 실패하는 경우 반환되기도 함
  * 가장 혼동을 주는 부분
    * NaN과 NaN을 동등연산자로 비교하면 항상 실패함 ( IEEE 754 때문임 )
    * 값이 NaN인지를 테스트 하려면 Number.isNaN(value)를 사용해야함
    * [Number.isFinite(value)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isFinite)는 value = NaN, Infinity, -Infinity인 경우 false를 반환

#### Number

* Number : 숫자를 만드는 함수
  * Number에 new를 사용하면 안됨 - 기대하는 결과가 나오지 않음
* number : 수에 대한 typeof 연산자가 반환하는 type
* 몇가지 상수
  * [Number.EPSILON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON)
    * 가장 작은 양수 - 이보다 작으면 0으로 취급 
  * [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
    * 약 9천조의 값, 9007199254740991
    * +,- 로 이 값의 범위에서만 안전한 연산이 가능
    * Number.isSafeInteger(number)로 숫자의 연산안전성 확인가능
  * [Number.MAX_VALUE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE), [Number.MIN_VALUE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE)
    * 계산 결과로 Safe를 넘는 값은 안전하지 않으므로 주의해야함
    * Safe의 기준 : [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
    * Number.MIN_VALUE는 0보다 큰 가장 작은 양수, 보다 작은 양수는 영과 구별이 안됨 
* 그 외 Number.prototype의 메서드들은 그다지 유용하지 않음 ( 내 생각: 정말 그런가 ? )
  * [Number.isSafeInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) 는 어떻지?
    * Safe Integer란 ?
      * IEEE-754 double precision으로 정확히 표현가능한 수
      * 그 수의 IEEE-754 표현이 다른 정수를 IEEE-754 사양으로 반올림한 결과가 나오지 않는 수
    * 예를 들면, $ 2 ^ {53} - 1 $ 은 Safe Integer임
      * 이 숫자는 정확히 표현될 수 있는 숫자이며
      * IEEE-754 rounding 모드에서 다른 정수가 이 숫자로 반올림 되지 않음.
    * 반면에, $ 2 ^ {53} $ 은 Safe Interger가 아님.
      * 이 숫자는 IEEE-754로 정확히 표현될 수는 있지만, 
      * $ 2 ^ {53} + 1 $ 이 `round-to-nearset`와 `round-to-zero` rounding  모드에서 $ 2 ^ {53} $ 으로 반올림 되기 때문
    * 여기에 사용한 `Mathjax`가 렌더링 안되고 있는데 [현재 문의중임](https://github.com/jeffreytse/jekyll-spaceship/issues/50). 
      * [2021-04-02 고쳐짐](https://github.com/jeffreytse/jekyll-spaceship/issues/50#issuecomment-812444737)

### 연산자

##### 전위 연산자

* [Unary plus (+), MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus) , 전위 연산자 타입
  * 문자열 숫자를 숫자타입으로 바꾸는 가장 빠르고 선호되는 방법 ( unary negation 보다 선호됨)
    * 책에는 [Number 함수, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)가 명확하기 때문에 더 선호된다고 나옴
  * 피연산자를 숫자로 바꾸는 것외에 다른 동작을 하지 않는다.
  * 변환에 실패하면 NaN을 반환
* [Unary negation (-), MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation) , 전위 연산자 타입
  * 부호 변환이 주요 동작
  * Javascript의 숫자 리터럴은 부호가 없음
    * (-1) 표현식에서 - 부호는 연산자이지 숫자 리터럴의 일부가 아님 
* [typeof, MDN Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#typeof), [typeof, MDN Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof), 전위 연산자 타입
  * 피연산자의 타입을 알려주는 문자열을 반환함
  * 피연산자가 [NaN(Not a Number)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)일 때도 "number"를 반환한다는 것을 주의할 것. `Number.NaN` 과 같은 값. 

#####  중위 연산자

* [ Addition (+) 연산자, MDN Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
  * `+` 연산자는 문자열 연결에도 사용하기 때문에 아주 위험함
  * 하나의 피연산자가 문자열이면 `묻지도 따지지도 않고` 나머지 연산자를 문자열로 변환하여 연결함
  * 자바스크립트에는 더하기를 할 수있는 다른 방법도 없음
  * 피 연산자들이 숫자로서 제대로 더하기 연산이 되는지 확인하려면 Number 함수를 사용할 것
* [ Division (/) 연산자, MDN Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division)
  * `정수` 나누기가 아님에 주의. 예를 들면 5/2 는 2가 아니라 2.5임에 주의
* [ Remainder (%) 연산자, MDN Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
  * [Modulo 연산자, Real Python](https://realpython.com/python-modulo-operator/#modulo-operator-with-a-negative-operand)가 아님에 주의. Remainder(나머지) 연산자임 (Javascript는 Modulo 연산자가 없음)
  * 더글라스 크락포드는 Modulo 연산자가 훨씬 쓸모있다고 생각
    * Javascript의 Remainder 연산자의 결과는 divideend(피제수, 나눠지는 수)의 부호를 따름
      * 예를 들면, 8 % -3 = 2 
    * Python및 다른 언어의 Modulo 연산 결과는 divisor(제수, 나누는 수)의 부호를 따름. 
      * 예를 들면, 8 % -3 = -1
  * 설명을 읽어봐도 어느게 더 좋은지는 잘 모르겠지만...
    * 결과가 달라지는 부분에 대한 설명은 위의 Real Python 링크를 읽어볼것 
   
#### 참고링크

* [Expressions and operators, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
  * 전위 / 후위 연산자 = unary operator
  * 중위 연산자 = binary operator

#### 비트 단위 연산자

* [Bitwise operators, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)
  * 피연산자들을 32 bits binary 수 (zeros and ones)로 변환.
  * 결과는 표쥰 Javascript numerical values로 반환

### Javascript Bitwise Operator 잘 쓰이지 않는 이유

* 안전하게 하려면 54 bit 정수형으로 변환해서 사용하는게 좋은데 Javascript는 안 그러고 있음
  * 그 결과 상위 22 bit는 경고없이 사라질 수 있음
  * 참고 : [Bitwise logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise_logical_Operators)

#### 다른 언어에서는 되는데 Javascript에서는 안되는 것들

* [몇몇 언어에서 Shift는 곱하기나 나누기의 대용으로 사용됨, Python의 예, Real Python](https://realpython.com/python-bitwise-operators/#bitwise-shift-operators)
* [bitwise `and`는 modulot 연산자로 사용하기도 함](https://mziccard.me/2015/05/08/modulo-and-division-vs-bitwise-operations/)
* 하지만, Javascript에서는 이렇게 할 수 없음.
  * 최상위 22개비트를 버리는 꼴

#### 심지어 사용하지 않는데도 위험을 초래

* `&`(앰퍼샌드)와 `|`(수직바)는 `&&`(앰퍼샌드 두개)와 `||`(수직바 두개)와 혼동하기 쉬움
* `<<`와 `>>`역시 `<`, `>`와 헷갈림
* (더글라스 크록포드 생각) `>>`가 왜 부호를 확장하는 오른쪽 Shift 연산자이고 `>>>`는 왜 아닌지 모르겠음.
* C 언어의 경우, 부호의 확장은 자료형에 따라 결정됨. [Sign Extension, C User's Guide, Oracle](https://docs.oracle.com/cd/E19205-01/819-5265/bjamz/index.html)
* Java의 경우, 부호의 확장은 연산자에 의해 정해짐. [Java Sign Extension, mkyong's blog](https://mkyong.com/java/java-sign-extension/)
  * Javascript는 Java의 잘못된 결정을 그대로 따름. 조심해야 함. [Unsigned right shift (>>>), MDN Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)

### 배열 

* 배열에 관한 몇가지 흥미로운 사실
  * 자바스크립트 초기 배포시에는 배열이 없었다
    * 객체가 너무 강력했고, 성능문제만 뺀다면 객체는 배열이 할 수 있는 모든것을 할 수 있다. 
  * 배열의 색인으로 어떤 문자열이나 사용가능
  * 배열은 real 객체
* Javascript의 배열이 객체와 다른 4가지 포인트 
  1. 배열은 length 속성을 가짐
    * Array.length는 요소의 갯수가 아님 - 가장의 큰 index보다 1 큰 수
      * Javascript의 배열이 진짜 배열인 것 같은 환상을 보여줌. for 문 처리 가능
  1. 배열은 Object.prototype 보다 훨씬 더 좋은 메서드들을 가진 Array.prototype을 상속 
  1. 배열은 Object literal이 아닌 Array literal로 생성됨
    * Array literal이 훨씬 더 간단, [ ] 혹은 [1, 2] 로 간단하게 생성됨 
  1. JSON은 배열과 객체를 다르게 취급, Javascript는 둘을 비슷하게 처리
* Javascript로 배열과 객체를 구분하는 법
  * typedof 연산자로는 배열과 객체를 구분할 수 없음. 모두 실질적으로 객체임 
  * 배열이 배열인지 확인하려면 Array.isArray(value)를 사용해야 함

#### 배열의 원점

* 인덱스를 0 부터 시작해야하는지 1 부터 시작해야하는지에 대한 논쟁
  * 배열을 처리할 때 하나씩 처리하기보다, 함수로 처리하면 원점에 대한 논쟁이 필요없음
  * 배열의 첫번째 요소를 지칭할 때 `first` 보다는 `zeroth` 라는 용어가 적당 (저자의 개인적 의견..)

#### 초기화

* 배열을 만드는 두 가지 방법
  ```js
  let my_little_array = new Array(10).fill(0);      // 방법 1. new Array(정수)
                      // my_little_arra is [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let same_thing = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]   // 방법 2. 배열 리터럴

  my_little_array === same_thing      // false
  ```
* 같은 값으로 초기화되지만, 따로 선언되어 서로 다른 배열임
* 다른 객체와 마찬가지로 실제 같은 배열인 경우에만 같은 것으로 판정

#### 스택과 큐

* push, pop 메서드로 배열을 stack처럼 쓸 수 있음
* 스택의 사용법, 아래 처럼 스택은 인터프리터나 계산기에서 주로 사용
<script async src="//jsfiddle.net/honggaruy/3wc9ybht/12/embed/js,result/dark/"></script>

* shift, unshift 메소드
  * shift : pop 메서드와 유사, 배열의 마지막 요소대신 0번째 요소를 제거하고 반환
  * unshift : push와는 달리 배열의 가장 앞에 새로운 요소를 추가 
  * shift / unshift 는 pop과 push에 비해 많이 느림. 배열이 길수록 심하게 느림
  * shift / push를 사용하여 배열의 가장 뒤에 새로운 아이템을 추가하고 가장 앞에서 아이템을 꺼내 쓰는 Queue를 구현할 수 있음. 
  * 관련링크
    * [push와 shift로 구현한 queue, 퍼포먼스를 논하는 댓글들을 확인할것](https://stackoverflow.com/a/1590262/9457247) 
    * [JavaScript queues, shift를 사용하지 않고 performance를 높인 Queue](https://code.iamkate.com/javascript/queues/)
    

### 다른 채프터

## Chapter 9
### 9-1 web message push notification mechanism

> Plese refer to the original text [here](https://blog.sessionstack.com/how-javascript-works-the-mechanics-of-web-push-notifications-290176c5c55d), with slight cuts.

Now let's turn our attention to web push notifications: we will look at its building components, explore the process behind sending/receiving notifications, and finally share how we plan to use these features to create new product features at [SessionStack](sessisonstack.com).

The function of push notifications is already very common on the mobile terminal. For some reason, push notifications on the web side are coming out every time, even if most developers strongly demand this feature.

### 9-2 overview

Web push notifications allow users to choose to get news updates from web applications in a timely manner. It aims to re-engage users through important and appropriate content that users may feel.

The push service is a service worker based on the service worker, which was explained in detail in the previous article [ch8](#8) .

In this case, the service worker is used because it runs in the background so that it does not block the rendering of the interface. For push notifications, this is quite important, because it means that only when the user interacts with the push notification itself will the code related to the push notification be executed.

### 9-3 message push and notification
Message push and notification are two different interfaces. 
* message push - called when the message push serer pushes a messate to a service
* message notification - the service worker or script in the web application operates to display a message notification to the user.

Thre are roughly three steps to implement message push:
  * interface-add client-side lgoic to let users subscribe to push servcies. Write javascript code logic in the web application inteface to allow users to register for the push message service
  * send message-implment inteface calls on the server side to trigger the push to the user's devcie.
  * receive a message in the browser.



{% include links.html %}
