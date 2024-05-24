## What is React?

- It's frontend JS `library` developed by FB in 2011.
- used to build any complex and interactive responsive web apps.
- Follows component based approach which helps in building resusable UIs.
- Invented by Jordan Walke

## What is the difference b/w a library and framework?

- `Library` - Pre-written code for achieving the specific task that you can use as required,
  also it allows you to control your code's structure.

- `Framework` - A ready-made structure and toolkit that helps to build the UI apps
  but you need to follow certain rules and patterns.

## What is component in React?

- It's an independent and resuable piece of code.
- They are just like JS functions, but work in isolation and returns the JSX element.

## What is JSX elements?

- JSX stands for `Javascrit XML` or syntactical extension of JS.
- JSX = HTML + JS

## What does the ReactDOM do?

- ReactDOM is a JS library that is used to render the react elements/components into the real DOM of a web page.

## What is props in react?

- props stands for properties.
- A way to pass data from one component to another components.
- It is similar to function parameters.
- Props are passed to the component in same like function aruments,params.
- Props are immutable so we cannot modify inside component.

## what is component composition?

- putting all small and resuable component together to a complex UI.

## Setting up the react dev env using cdn links.

1. react is a ui manipulation (logic)library
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>

2. React DOM:
   <!-- react dom -> To get the actual changes in the DOM with the help of react DOM library  -->
   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

3. Components -> JSX -> HTML + JS
   <!-- to convert jsx to js  -->
   <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
