import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManageShows from './Pages/ManageShows'
import ViewShows from './Pages/ViewShows'
import './App.css'

class App extends Component {
  state = {
    shows: []
  }

  createShow = (show) => {
    console.log(show)
    this.setState((prev) => {
      const existingShows = prev.shows
      existingShows.push(show)

      return {
        shows: existingShows
      }
    })
  }

  getShows = async () => {
    try {
    const response = await fetch('http://localhost:3001/shows')
        const shows = await response.json()
        this.setState({ shows })
    } catch (error){
        this.setState({ errorMessage: error })
      }
  }

  postShow = async (showToSave) => {
    const postInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(showToSave)
    }
    try {
    const postShowsResponse = await fetch('http://localhost:3001/shows', postInit)
        const show = await postShowsResponse.json()
        this.createShow(show)
    } catch (error) {
        this.setState({ errorMessage: error })
      }
  }

  renderError = () => {
    console.log("errormessage is:", this.state.errorMessage)
    return this.state.errorMessage
    ? (<div>{this.state.errorMessage.toString()}</div>)
    : (<div></div>)
  }

  componentDidMount() {
    //this.testPromises()
    this.getShows()
  }

  render() {
    return (
      <Router>
        <div className="App">
        {this.renderError()}
          <Switch>
            <Route exact path="/" component={() => <ViewShows allShows={this.state.shows} />} />
            <Route path="/manageShows" component={() => <ManageShows allShows={this.state.shows} createShow={this.postShow} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
