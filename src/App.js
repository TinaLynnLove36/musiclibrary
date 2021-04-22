import axios from 'axios';
import React, {Component} from 'react';
import NavBar from './Components/NavBar'
import './App.css';
import { TableData} from './Components/Table'
import Search from './Components/Search'


class App extends Component {

    state = {
    music: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/songs').then(res => {
      this.setState({
        music: res.data
      })
    });
  }


onSearchBoxChange = (event) =>{
  this.setState({searchBox: event.target.value, music: this.filterList(event.target.value)});
}

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
      <div>
      <Search searchBoxChange={this.onSearchBoxChange}/>
      </div>  
      <div> 
      <TableData rows={this.state.music}/>
      </div>
    </span>
  )
  }
}

export default App;
 
