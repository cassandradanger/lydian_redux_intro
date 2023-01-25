import './App.css';

// useSelector is a hook provided by the react-redux library
import { useSelector, useDispatch } from 'react-redux';

function App () {
    // useSelector accepts a function that tells it what part of the store you want.
    // here we return the whole store
    const reduxStore = useSelector(store => store);
    const count = useSelector(store => store.count);
    const elementList = useSelector(store => store.elementList);

    const dispatch = useDispatch();

    return (
      <div>
        {/* Render the entire reduxStore to our DOM, as a JS object (JSON) */}
        <pre>{JSON.stringify(reduxStore)}</pre>
        <p>Count is: {count}</p>
        <button onClick={() => dispatch({ type: 'INCREASE' })}>increase count!</button>
        <button onClick={() => dispatch({ type: 'DECREASE' })}>decrease count!</button>

        <p>Elements are: {JSON.stringify(elementList)}</p>
        <button onClick={() => dispatch({ type: 'ADD_ELEMENT', payload: 'radium'})}>Add Element</button>
      </div>
    );

}

export default App;
