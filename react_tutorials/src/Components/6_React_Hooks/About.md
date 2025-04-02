Hooks - are the functions that helps to handle different events in React.

<!-- ---------------------------- -->

<!-- 1. React States:- -->

1. Refers to an object that holds data or information about the component.
2. State is a way to store and manage data that can change over the lifetime of a component
3. State is managed within the component like variables declared in a function.
4. Unlike regular variables, React Re-renders the components when the state changes to reflect the changes keeping the UI in sync.
5. When react is Re-rendered, it checks from top to bottom for changes. [it compares and changes the value with the help of diffing algorithm].
6. Only affected component and its children are rerendered and not any other components outside.
7. state is dynamic and mutable - changes over time to user actions and server responses, etc.

Q. Why the value does not set back to its original value after re-render in react.js?
ans. it uses the current state to change to the next value, uses initial value only the first time.

// Derived State??

1. Can be computed based on other state or props --OR--
2. If any variables value is dependent on a state or props.
3. Not directly stored in component's state but calculated when needed.
4. Helps to avoid duplicacy - keeeps state sikmpler and manageable.

<!-- ---------------------------- -->
