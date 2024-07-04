## How does React work?

React creates a virtual DOM. When state changes in a component it firstly runs a `diffing` algorithm, which identifies what has changed in the virtual DOM. The second step is `reconciliation`, where it updates the DOM with the results of the difference.

## What are React Hooks?

Hooks are a new addition to React 16.8. They let you use state and other React features without writing a class.

With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

## What is Context API in ReactJS?

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

## Preserving and resetting state

Same component at the same position preserves state
eg:
{isFancy ? <Counter isFancy={true} />:
<Counter isFancy={false} />}
if the states were decalred in the counter comp it will be preserved eventhough if we change isFancy state . bcos -- Same component at the same position(it’s the position in the UI tree—not in the JSX markup) preserves state

go with the below doc 👌
`https://react.dev/learn/preserving-and-resetting-state#same-component-at-the-same-position-preserves-state`

## There are two ways to reset state when switching between them:

Render components in different positions
Give each component an explicit identity with key

## Code Splitting- React.lazy(); - suspence

Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

## https://legacy.reactjs.org/docs/code-splitting.html#code-splitting

## Synthetic events **_IMP_**

https://medium.com/@sagnik.das2/what-is-react-synthetic-events-8d7ad766d821#:~:text=Synthetic%20events%20are%20not%20native,event%20pooling%20for%20performance%20optimization.
