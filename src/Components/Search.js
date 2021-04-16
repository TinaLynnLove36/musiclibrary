import React from 'react'

export default function SearchMusic() {
    return (
        <form className='form'>
            <label className='label' htmlFor='query'>Music Search</label>
            <input className='input' type='text' name='query' placeholder='i.e. The Beatles'/>
            <button className='button' type='submit'>Search</button>
        </form>
    )
}


