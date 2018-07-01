
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDq7pXNU5Cqoo2JWx_MnWc4fmFrnu4radw';

// Create a new component. This component should produce some HTMl

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));