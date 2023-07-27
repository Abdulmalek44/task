import { useState } from "react";


const Search = ({ onHandleSubmit }) => {

  const [input, setInput] = useState('help');

  //Functions
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleSubmit(input)
    setInput('')
  }


  return (

    <form onSubmit={handleSubmit}>
      <input
        placeholder='Search...'
        type='text'
        onChange={handleChange}
        value={input}
        className='input-search'
      />
    </form>

  )
}

export default Search