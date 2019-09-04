---
path: "/blog/what-is-typescript"
date: "2019-09-02"
title: "What is Typescript?"
---

_Taken from Wikipedia:_

> TypeScript is an open-source programming language developed and maintained by Microsoft.
> It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.

The word **"superset"** is something that contains all features of the original, but enhanced to include additional features.

This means that TypeScript is basically JavaScript with some with some extra features (aka: static types) that make JavaScript more pleasurable to work with.

> TypeScript is designed for development of large applications and transcompiles into JavaScript.

The reason why TypeScript is designed for large applications is because JavaScript is a loosely typed language.

A **"Loosely typed"** language is one that does not require types to be specified. This basically means you can do whatever you want with your expressions.

Let's take a look at this example. Let's use **JavaScript** to create a greeting variable with a string with a value of `"hey"`.

```javascript
/* JavaScript */
let greeting = "Hey"
```

We want the type to only be a string even if the value gets changed. JavaScript knows the value is a string, but it doesn't care.

```javascript
/* JavaScript */
let greeting = "Hey" // ¯\_(ツ)_/¯
```

Now let's change the value to a number. JavaScript knows that the greeting value turned into a number, but again, it doesn't care.)

```javascript
/* JavaScript */
let greeting = "Hey" // ¯\_(ツ)_/¯

greeting = 1 // ¯\_(ツ)_/¯
```

This basically means JavaScript doesn't care what gets returned. This sucks because you can unintentionally change the value type of something, break your code, and JavaScript will just let it slide.

Now let's use **TypeScript** to create a variable called greeting and give it a type of `string`, and make the value the same string.

```typescript
/* TypeScript */
let greeting: string = "Hey"
```

Since we set a type, the value of that variable WILL stay that type. The compiler will yell at you if you do otherwise.

```typescript
/* TypeScript */
let greeting: string = "Hey" // This is a string.
```

Lets say we try to change this value to a number, TypeScript will raise an error and pretty much say that this is illegal.

```typescript
/* TypeScript */
let greeting: string = "Hey" // This is a string.

greeting = 1 // Hey, thats illegal.
```

This is why TypeScript is very helpful, to prevent insanity-inducing errors as your application gets larger.

##### _Summary:_ TypeScript is a strongly typed JavaScript

(You can also omit semicolons in TypeScript)

## Why

So why use TypeScript?

- To provide an optional type system for JavaScript. If you don't want to pull your hair with runtime errors as your application gets larger, its very nice to have a language with a type system)
- To increase your agility when doing refactoring. The TypeScript compiler will catch errors across your entire codebase whenever you make changes.
- Types are documentation. By annotating the code with types, it will always be in sync with how your code is behaving. So now you don't have to comment your code or read through READMEs (or maintain them either).

## How

**To install TypeScript:**

```zsh
> npm install -g typescript
```

Lets write some basic JavaScript.

```typescript
/* index.ts */

let sentence = "Proud cat owner"

function welcomePerson(title) {
  return "Welcome, " + title
}

console.log(welcomePerson(sentence)) // Welcome, Proud cat owner
```

**To compile TypeScript:**

```zsh
> tsc index.ts
```

The compiled code will look the same as the `.ts` file, but this was just to showcase that you can write regular JavaScript without any issues.

## Basic Types

Now let's take advantage of what TypeScript has to offer.

```typescript
let sentence = "Proud cat owner"

function welcomePerson(title: string) {
  return "Welcome, " + title
}

console.log(welcomePerson(sentence)) // Welcome, Proud cat owner
```

So here, we just added a `string` type annotation to the `title` argument. This tells us that we want that argument to **only** be a string, **nothing else.** If you pass anything other than a string to that argument, the compiler will give you a nice little error.

For example, if I change the value of `let sentence` into an array:

```typescript
let sentence = [0, 1, 2]

function welcomePerson(title: string) {
  return "Welcome, " + title
}

console.log(welcomePerson(sentence)) // You did something illegal
```

I will get a nice little error in the compiler.

```zsh
error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

## Interfaces

So an **interface** is pretty much a typed object. An interface defines the properties and its types for a concept.

For example, a person. A person has a name and an age. Both of those properties are related to a person. So let's create a `Person` interface.

```typescript
interface Person {
  name: string
  age: number
  title: string
}
```

Now by creating this interface, We now have all the properties that we need for a concept, along with their types. It can be used as a static (or dynamic?) type for our `person` function parameter, and we can access any property that we need from the interface.

```typescript
interface Person {
  name: string
  age: number
  title: string
}

let sentence = { title: "Proud cat owner" }

function welcomePerson(person: Person) {
  return "Welcome, " + person.title
}

console.log(welcomePerson(sentence)) // Welcome, Proud cat owner
```
