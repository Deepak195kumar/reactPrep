Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features.

# What is a Hook? -- Hooks allow us to "hook" into React features such as state and lifecycle methods.

`There are 3 rules for hooks:`

--Hooks can only be called inside React function components.
--Hooks can only be called at the top level of a component.(means `you should ensure that these hooks are called directly within the body of the component function and not inside nested functions, conditional statements, or loops.`)
eg:

<!-- function MyComponent() {
if (someCondition) {
const [count, setCount] = useState(0); // This is invalid
}
return (
// JSX code
);
} -->

--Hooks cannot be conditional

## useState

useState accepts an initial state and returns two values:
1.The current state.
2.A function that updates the state.

## useEffect

useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)

<!--  //if we want to update only one property in an obj
If we only called setCar({color: "blue"}), this would remove other prop from our state.
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    }); -->

## useRef

The `useRef` Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly. --In React, we can add a ref attribute to an element to access it directly in the DOM.
eg : `const count = useRef(0);`

useRef() only returns one item. It returns an Object called current.
--When we initialize useRef we set the initial value: useRef(0).
`It's like doing this: const count = {current: 0}. We can access the count by using count.current.`

## useMemo

The useMemo Hook only runs when one of its dependencies update.
The React useMemo Hook returns a memoized value.

<!-- eg:   const calculation = useMemo(() => expensiveCalculation(count), [count]); -->

`The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function`
