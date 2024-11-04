# Install
```npm install @reduxjs/toolkit react- ###redux```

# Usage
```You can use Redux to read any component from it's state```

# How to setup React Redux
- ### Create folder 'redux' in src folder
- ### Create a file 'store.js' in 'redux' folder
- ### Write configuration for Redux in 'store.js'
- ### Import store & provider in main.jsx file
- ### Wrap the App component with Provider & pass Store prop
- ### Now create 'counter' folder in 'redux' folder & make 'counterSlice.js' file
- ### Write configuration for counter in 'counterSlice.js'
- ### Import counterSlice in 'store.js' & add it to the reducer
- ### Import useSelector & useDispatch in the component where you want to use the state
- ### Use useSelector to read the state & useDispatch to dispatch the action (increment, decrement)
- ## To use in any component inside the App, just import useSelector & useDispatch from 'react-redux' & set counter = useSelector(state => state.counter)

## Store
Is what holds all the data that application uses

## Reducer
Is what that manipulates the data when it receives in action

## Action
Is what that tells the reducer to manipulate the data
