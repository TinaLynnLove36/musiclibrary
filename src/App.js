import axios from 'axios';
import React, {Component} from 'react';
import NavBar from './Components/NavBar'
import './App.css';
import { TableData} from './Components/Table'
//import { Container, TableContainer, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';


class App extends Component {

    state = {
    music: []
  }

  componentDidMount() {
    axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(res => {
      this.setState({
        music: res.data
      })
    });
  }

updateSearch = e => {
   this.setState({value: e.target.value,
    music: this.filterList(e.target.value)
 });
}; 

filterList = value => {
  return this.state.music.filter(item => {
    return (
      item.title.toLowerCase().search(value.toLowerCase()) !== -1 ||
      item.album.toLowerCase().search(value.toLowerCase()) !== -1 ||
      item.artist.toLowerCase().search(value.toLowerCase()) !== -1 ||
      item.genre.toLowerCase().search(value.toLowerCase()) !== -1 ||
      item.releaseDate.toString().toLowerCase().search(value.toLowerCase()) !== -1);
  })
} 

  render() {
  return (
    <span>
      <div>
        <NavBar />
      </div>
   <div className='searchStyle'>
      <form className='form'>
            <label className='label' htmlFor='query'></label>
            <input className='input' type='text' name='query' placeholder='i.e. The Beatles' value={this.state.value} onChange={this.updateSearch}/>
            <button className='button' type='submit'>Search</button>
        </form>
      </div> 
  <div>
  <TableData rows={this.state.music} />
  </div>
    </span>
  )
  }
}
export default App;
 
