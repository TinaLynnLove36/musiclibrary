import axios from 'axios';
import React, {Component} from 'react';
import NavBar from './Components/NavBar'
import SearchMusic from './Components/Search'
import './App.css';
import { Container, Paper, Box, Typography, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import { makeSytles } from '@material-ui/core/styles';
//import CustomizedTables from './Components/Table'
//import Search from "./Components/Search"

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

  musicSearchValue() {

  }



  

  render() {

  return (
    <span>
      <div>
        <NavBar />
      </div>
      
      <div className='searchStyle'>
        <SearchMusic />
      </div>
      <div>
        <Container>
          <TableContainer>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Album</TableCell>
                <TableCell>Artist</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Release Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.music.map((artist) => (
                  <TableRow>
                  <TableCell>{artist.id}</TableCell>
                  <TableCell>{artist.title}</TableCell>
                  <TableCell>{artist.album}</TableCell>
                  <TableCell>{artist.artist}</TableCell>
                  <TableCell>{artist.genre}</TableCell>
                  <TableCell>{artist.releaseDate}</TableCell>
                </TableRow>
                ))}
                </TableBody>
          </TableContainer>
        </Container>
      </div>
    </span>
  )
  }
}







export default App;
