---
path: "/blog/var-let-const"
date: "2019-09-01"
title: "The Difference Between Var, Let, And Const"
tags: ["javascript", "fundementals"]
---

### The Differences

**`var`** - _The scope of **“var”** is limited to the “function” in which it's defined. If it's defined outside of any function, the scope of the variable is global scope._

- **Lexical Scope:** Function
- Can be re-assigned
- **Initialization:** `undefined`

**`let`** - _The scope of **“let”** is limited to the “block” defined by curly braces._

- **Lexical Scope:** Block
- Can be re-assigned
- **Initialization:** none

**`const`** - _The scope of **“const”** is the same as **"let"**. Additionally, a variable defined with const can't be re-assigned._

- **Lexical Scope:** Block
- Cannot be re-assigned (_**can** be mutated_ )
- **Initialization:** none

### Variable Declarations

You can intentionally declare your variables within a specific scope.

We can do it within **global scope**:

```javascript
var x
console.log(x) // undefined
```

We can do it within **function scope**:

```javascript
function marco() {
  var x
  console.log(x)
}

marco() // undefined
```

And we can do it within **block scope**:

```javascript
function marco() {
  if (true) {
    var x
    console.log(x)
  }
}

marco() // undefined
```

If we declare `var x` in both the global scope and a function's scope, everything is fine.

```javascript
var x = "outside"

function marco() {
  var x = "inside"
  console.log(x) // "inside"
}

marco()
console.log(x) // "outside"
```

But what if we change the `var x` declaration inside the function into a re-assignment?

```javascript
var x = "outside"

function marco() {
  x = "inside"
  console.log(x) // "inside"
}

marco()
console.log(x) // "inside"
```

oops.

`var x` outside of the function will get overwritten by the re-assignment inside the function if we remove `var` from the inside variable. We need to specify that `x` is supposed to be scoped only in function `marco()`, or else this will happen.

### Function Scope

In JavaScript, you limit the scope of a variable by defining it within a function. This is called **function scope**.

```javascript
function marco() {
  var text = "it works"
  console.log(text) // "it works"
}

marco()
console.log(text) // nothing 🤷‍♀
```

Since `var` is function scope, it only respects its scope when it's within a function. So that means the following will also work:

```javascript
function marco() {
  var text = "it works"
  if (true) {
    var text = "no it doesn't"
  }
  console.log(text) // no it doesn't
}

marco()
```

Thats no good.

I created an `if` statement inside the function, added a `var` with the same name as the previous one and accidentally re-assigned its value. An obvious solution would be to use a different variable name, but lets use a better solution to avoid this situation all-together.

### Block Scope

Unlike **var**, **let** & **const** are block scoped.

That means as long as the variable is created within a set of curly braces, it's scope will be limited to the block of code within those curly braces. This applies to functions, for loops, if statements, switch statements, and so on.

```javascript
function marco() {
  let text = "it works"
  if (true) {
    let text = "let is neat!"
    console.log(text) // let is neat!
  }
  console.log(text) // it works
}

marco()
```

Hey, thats pretty good. We can create multiple variables within a function block without any issues. No accidental re-assignments, no confusion. You should still practice proper naming conventions though. Try not to name two variables the same name if they're in the same function scope.

### Thou Shall Not Re-Assign

**const** will **not** let you re-assign variables.

```javascript
const marco = "polo"

marco = "solo" // Hey, thats illegal
```

It isn't entirely immutable though. You **can mutate** variables declared with `const`.

#### Array Mutation

```javascript
const arr = [1]

arr.push(2)

console.log(arr) // [1, 2]
```

#### Object Mutation

```javascript
const obj = {
  saying: "marco",
}

obj.saying = "polo"

console.log(obj.saying) // polo
```

### Let & Const Hoisting

All three types of variables _(var, let and const)_ **are** hoisted. _Hoisting_ means that variables are moved to the top of their scope before the code executes.

##### Note: All variables [are "hoisted"](https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6)

Unlike `var`, `let` and `const` declarations are **not** initialized to anything.

`var` is initialized to `undefined`.

```javascript
console.log(a) // undefined
console.log(b) // Error: That's Illegal

var a = 0
let b = 0
```

Note how the logs do not output what were inside the variables we declared. Heres how the interpreter executed it:

```javascript
var a
let b

console.log(a) // undefined
console.log(b) // Error: That's Illegal

a = 0
b = 0
```

The interpreter hoisted the variable declarations to the top of the scope, but the variable was not assigned to `0` yet until the interpreter got to that point.

Using `let` and `const` are nice because if you get into a situation where you call a variable before you declared it, you would get a clear `Uncaught ReferenceError: b is not defined`, instead of a silent `undefined`.
