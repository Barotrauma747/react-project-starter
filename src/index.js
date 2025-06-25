// 1. Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// these are the 2 libraries I need to show components on the screen. "React" is the base library - this understands what a component is. ReactDOM is a specific library for browsers - for mobile it would be ReactNative

import App from './App'; //just here for refacotring my folder structure - added a new file after all that stuff below was written

// 2. Get a reference ot the div with ID root
const el = document.getElementById('root');

// 3. Tell react to take control of that element
const root = ReactDOM.createRoot(el);

//4. Create a component
/*
function App() {
  let message = 'Bye there';
  if (Math.random() > 0.5) {
    message = 'Hello there';
  }
  //return <h1>{message}</h1>;

  const date = new Date();
  const time = date.toLocaleTimeString();
  // return <h1>{time}</h1>; --> works but long. faster:
  //return <h1>{new Date().toLocaleTimeString()}</h1>;

  const name = 'Samantha';
  const age = 23;
  //return (<h1> Hi my Name is {name} and my age is {age}</h1>);

  const maxValue = 10;
  const message2 = 'Enter Age';
  return (
    <input
      type='number'
      min={5}
      max={maxValue}
      list={[1, 2, 3]}
      style={{ border: '3px solid red' }}
      alt={message2}
    />
  );
}
// I can show variables inside JSX - like the "{message} here. Good to know: React doesn't know how to render: "True" "False" "Null" "Undefined". Meaning: if "let message = true" was my codeline then react couldn't do anything with it. (works for Props however - see further down in "Converting Attributes from HTML to JSX")
// For Arrays it renders the content like this: [1, 2, 3] ---> 123. For Objects I just get an error. So if "let message = {}" I would get an error. Object as a Prop works however (see further down in Props vs. Attributes)

//----------------------------------//
// General Layout for Components is:
//1. Function declaraiont, 2. code to compute values (so my consts, lets, functions etc.), 3. the content we want this component to show (so "return.....")

//----------------------------------//
// Props vs. Attributes
// Props (as shown in the input-return above) are the "type='number'" things. I can also refer to attributes with my props - like "max={maxValue}". Important for my Props:
// Strings wrap in "" (like: type="number")
// Numbers wrap in {} (like: min={5})
// Arrays wrap in {} (like {[]})
// Objects wrap in {} (like: {{}})
// variables wrap in {} (like: alt={mesage2})

//With {{}} - the outer braces tell it that it's javascript, the inner braces tell it that it's an object

//----------------------------------//
//Converting HTML (attributes/props) to JSX - there are 5 rules to follow:
/*
1. All prop names follow camelCase
  eg.: 
  HTML: maxlength=5 --> 
  JSX: maxLength={5}
  autocapitalize --> autoCapitalize, 
  novalidate --> noValidate

2. Number attributes use {}

3. Boolean "true" an be written with just the property name. "False" should be written with {}
  eg.: 
  HTML: <input spellcheck="true" />; 
  JSX: <input spellCheck /> 
  HTML: <input spellcheck="false" /> 
  JSX: <input spellCheck={false} />

4. In JSX, the 'class' attribute is written as className.
  e.g.: 
  HTML: <div class="divider"></div>; 
  JSX: <div className="divider"></div>

5. In JSX, in-line styles are provided as objects(so: {{}}).
  e.g.:
  HTML: <a style="text-deocartion: 'none'; padding:'5px'"/>
  JSX: <div style={{textDecoration:'none', padding:'5px'}} />
*/

//5. Show component on the screen
root.render(<App />);
