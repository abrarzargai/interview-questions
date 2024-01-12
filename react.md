 
## What is JSX

JSX or JavaScript XML 🌟 – a syntax extension for React.It allows you to write HTML-like code within JavaScript, making it more readable and expressive. 🌈

JS Code:
```bash
function exampleFunction() { 
  console.log('This is a JavaScript function! 🌟');
}

exampleFunction();
```
JSX Code:
```bash
import React from 'react'

export CompA = () => {
  return (
    <div> This is a JSX Component! 🚀</div>
  )
}

```

## Smart vs Dumb Components

`Dumb / Stateless / Presentational  Components: ` 🦄 Dumb components focus on how things look.
- Receive info and show it.
- they display what they're given🎨.
```bash
import React, { useState } from 'react';

const CounterContainer = () => {
  const [count, setCount] = useState(0);
  const increment = () =>  setCount(count + 1)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment 🚀</button>
    </div>
  );
};
```

`Smart / Stateful / Container Component:` 🤓 Smart components focus on how things work.
- Handle data, state, and logic.
- Make decisions and operate like the brain. 🤔💡
```bash
import React from 'react';

const CounterDisplay = ({ count, onIncrement }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={onIncrement}>Increment 🌟</button>
  </div>
);
```
## Pure Component 
A Pure Component in React is a special type of class component that optimize rendering performance by implementing a shallow comparison of props and state.

in short: (it skips re-renders for same props and state)

`Shallow comparison: ` it is process which compares the current state and props with new props and states to decide whether the React component should re-render or Not

```bash
import React, { PureComponent } from 'react';

class PureCounter extends PureComponent {
  render() {
    const { count, onIncrement } = this.props;

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={onIncrement}>Increment 🚀</button>
      </div>
    );
  }
}

export default PureCounter;
```

## Higher-Order Component 
HOCs in React are a powerful way to reuse component logic. 🔄 They are functions that take a component and return a new one, enabling you to add functionality without modifying the original code. 💡 This pattern prevents code repetition, allowing components to share common functionality. 🚀


**Example :**
```bash
const NewComponent = (BaseComponent) => {
  // ... create new component from old one and update
  return UpdatedComponent
}
```
## Controlled vs Uncontrolled Component 

`Controlled Component :` Controlled components in React are those in which form data is handled by the component’s state.
**Example :**
```bash
 function TextInput() {
const [text, setText] = useState('');
return (
<input type="text" value={text} onChange={e => setText(e.target.value)} />
);
}
```
`UnControlled Component :` Uncontrolled components are those for which the form data is handled by the DOM itself
**Example :**
```bash
 function App() {
  const nameRef = useRef();

  function onSubmit() {
    console.log("Name value: " + nameRef.current.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" ref={nameRef} required />
      <input type="submit" value="Submit" />
    </form>
  );
}

```
