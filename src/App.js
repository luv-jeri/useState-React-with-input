import './styles/App.css';
import { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');

  return (
    <div className='container'>
      <h1>{text}</h1>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
