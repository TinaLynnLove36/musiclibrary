import axios from 'axios';
import React, {Component} from 'react';
import NavBar from './Components/NavBar'
import './App.css';
//import CustomizedTables from './Components/Table'
//import Search from "./Components/Search"

class App extends Component {
    state = {
    music: null,
  }


  componentDidMount() {
    
    axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(res => {
     
      this.setState({
        music: res.data
      })
    });
  }

  musicSearchValue() {

  }

  render() {
  return (
    <span>
      <div>
        <NavBar />
      </div>
    </span>
  )
  }

}





export default App;
