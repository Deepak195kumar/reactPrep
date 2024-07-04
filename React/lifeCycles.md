## Lifecycle methods are an integral part of React class components. They allow you to execute code at specific points during the component's lifecycle, such as when the component is mounted, updated, or unmounted. However, with the introduction of React Hooks, the concept of lifecycle methods is less prevalent in functional components.

diffing and reconciliation

Here are the main lifecycle methods in React class components, along with their purpose:

## 1.constructor():

The constructor method is called before a component is mounted.
It's used for initializing state and binding event handlers.
It's the only place where you should assign this.state directly.

## 2.componentDidMount():

This method is called after the component has been mounted (inserted into the DOM).
It's often used for performing side effects such as fetching data from an API or initializing third-party libraries.
You should avoid changing state synchronously in this method to prevent unnecessary re-renders.

## 3.componentDidUpdate(prevProps, prevState):

This method is called after the component updates and the DOM has been re-rendered.
It's useful for performing side effects when props or state change.
You should compare the previous props and state with the current props and state to determine if a side effect is necessary.

## 4.componentWillUnmount():

This method is called immediately before the component is unmounted and destroyed.
It's used for cleanup tasks such as canceling timers or removing event listeners to prevent memory leaks.

## 5.shouldComponentUpdate(nextProps, nextState):

This method is called before rendering when new props or state are received.
It allows you to control whether the component should re-render or not, by returning true or false.
Implementing shouldComponentUpdate() can help optimize performance by preventing unnecessary re-renders.

## 6.getDerivedStateFromProps(nextProps, prevState):

This static method is called before every render when new props are received.
It allows you to update the component's state based on changes in props.
It's a safer alternative to the legacy componentWillReceiveProps() method.

## 7.getSnapshotBeforeUpdate(prevProps, prevState):

This method is called right before the most recently rendered output is committed to the DOM.
It allows you to capture information about the DOM before it's potentially changed.
It's often used in conjunction with componentDidUpdate() to implement custom scrolling behavior or other UI manipulations.

## FUNCTIONAL COMPOENENT

Remember that with the introduction of React Hooks, many of these lifecycle methods are not needed in functional components. Instead, hooks like `useEffect()` and `useLayoutEffect()` are used to achieve similar effects.

`useEffect()` and `useLayoutEffect()` are both hooks provided by React for managing side effects in functional components

## 1.useEffect():

--useEffect() is the most commonly used hook for handling side effects in functional components.
--It runs after the browser has painted, meaning it doesn't block the browser from updating the screen.
--useEffect() is asynchronous and doesn't guarantee that the effect will run immediately after the component is rendered.
--It's used for side effects that don't require synchronously updated UI, such as data fetching, event listeners, or subscriptions.

## 2.useLayoutEffect(): asked this in one of the interview.

--useLayoutEffect() is similar to useEffect(), but it runs synchronously after all DOM mutations.
--It's useful when you need to perform DOM measurements or other imperative actions that need to be reflected immediately before the browser paints.
--Since it runs synchronously, it can potentially block the browser's rendering if the effect is complex or time-consuming.

## DEPENDENCY ARRAY

1.`Empty Dependency Array`:only run once at initial render
useEffect(() => {
}, []);

2.`Dependency Array with Values`: initial render + if any value chgs in dependency arr
useEffect(() => {
}, [value1, value2]);

3.`No Dependency Array`: run for every render
useEffect(() => {
});
--This behavior can lead to performance issues if the effect performs expensive operations or updates the state, potentially causing an infinite loop.

## Effect Cleanup -- We do this by including a return function at the end of the useEffect Hook.

<!-- useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }  , 1000);

    return () => clearTimeout(timer)
}, []); -->
