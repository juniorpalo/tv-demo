import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManageShows from './Pages/ManageShows'
import ViewShows from './Pages/ViewShows'
import './App.css';

class App extends Component {
  state = {
    shows: [
      {
          name: 'Rick and Morty',
          rating: 5,
          newPreviewImage: 'https://static.posters.cz/image/750/plakaty/rick-and-morty-watch-i50046.jpg'
      },

      {
        name: 'Avatar the Last Airbender',
        rating: 2,
        newPreviewImage: 'https://ia.media-imdb.com/images/M/MV5BNzZlZmQyYTgtOWNmMy00NTNhLTgyOTYtNjhiOTllOGU2MDg5XkEyXkFqcGdeQXVyMjYxMzY2NDk@._V1_UY268_CR0,0,182,268_AL_.jpg'
      },

      {
        name: 'One Punch Man',
        rating: 4,
        newPreviewImage: 'https://www.rightstufanime.com/images/productImages/699858578788_merchandise-saitame-genos-one-ounch-man-throw-blanket-primary.jpg?resizeid=3&resizeh=600&resizew=600'
      },

      {
        name: 'Daredevil',
        rating: 5,
        newPreviewImage: 'https://ia.media-imdb.com/images/M/MV5BNzUwMDEyMTIxM15BMl5BanBnXkFtZTgwNDU3OTYyODE@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },

      {
        name: 'Ash vs Evil Dead',
        rating: 5,
        newPreviewImage: 'http://assets.starz.com/imgix/OriginalsPicker/eds2_598x336_v2.jpg'
      }
  ]
  }

  createShow = (show) => {
    this.setState((prev) => {
      const existingShows = prev.shows
      existingShows.push(show)

          return {
              shows: existingShows
          }
  })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={() => <ViewShows allShows={this.state.shows} />} />
            <Route path="/manageShows" component={() => <ManageShows allShows={this.state.shows} createShow={this.createShow} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
