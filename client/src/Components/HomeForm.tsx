import React, { useState } from 'react';
import { Nav } from 'reactstrap';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='rounded-l-xl text-center'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="search a game"
        />
        <button className='w-16 rounded-r-xl bg-blue-500 ' type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;