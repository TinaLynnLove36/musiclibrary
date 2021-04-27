import React from 'react';


const SearchBox = ({searchBoxChange}) =>{
    return(
         <span>
    <div className='searchStyle'>
      <form className='form'>
            <label className='label' htmlFor='query'></label>
            <input className='input' type='text' name='query' placeholder='i.e. Casting Crowns'  onChange={searchBoxChange}/>
            <button className='button' type='submit'>Search</button>
        </form>
      </div> 
    </span>
    )
}
export default SearchBox;