import React,{useState} from 'react'

const SearchBar = ({setSearchTerm}) => {
  const [search,setSearch]=useState('');
  const handleSearch=()=>{
    setSearchTerm(search); 
       
  }
  return (
    <div>
      <input
        type='text'
        value={search}
        onChange={(e)=>{setSearch(e.target.value);  }}      
      ></input>
      <button onClick={handleSearch}>search</button>
    </div>
  )
}

export default SearchBar
