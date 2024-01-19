import React,{useState} from 'react'

const SearchBar = ({setSearchTerm}) => {
  const [search,setSearch]=useState('');
  const handleSearch=()=>{
    setSearchTerm(search); 
       
  }
  return (
    <div className=''>
      <input
        type='text'
        value={search}
        onChange={(e)=>{setSearch(e.target.value);  }}      
      ></input>
      <button className='text-xl mx-2 hover:shadow-md' onClick={handleSearch}>search</button>
    </div>
  )
}

export default SearchBar
