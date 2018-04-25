import React, { Component } from 'react'
import Show from './Show'
import {Link} from 'react-router-dom'
import ReactPropTypes from 'prop-types'
import './ManageShows.css'

class ManageShows extends Component {
    static propTypes = {
        createShow: ReactPropTypes.func.isRequired
    }

    state = {
        show: {
            name: '',
            rating: -1,
            newPreviewImage: ''
        },
        shows: [
            {
                name: 'Rick and Morty',
                rating: 8,
                newPreviewImage: 'https://static.posters.cz/image/750/plakaty/rick-and-morty-watch-i50046.jpg'
            }
        ]
    }

    handleOnChange = (event)=> {
        if (event.target.id === "nameInput"){
        this.setState({
            newShowName: event.target.value
        })
    }
        else if (event.target.id === "ratingInput"){
            this.setState({
            newShowRating: Number (event.target.value)
        })
    }
        else if (event.target.id === "previewInput"){
            this.setState({
                newPreviewImage: event.target.value
            })
        }
}
    handleOnClick = () => {
        this.props.createShow({
            name: this.state.newShowName,
            rating: this.state.newShowRating,
            newPreviewImage: this.state.newPreviewImage
        })
    }

    renderShows = () => {
            return this.props.allShows.map((show, i) => {
                return (
                 <Show key ={i} name={show.name} rating={show.rating} newPreviewImage={show.newPreviewImage}/>
            )
        })
    }

    render() {
        return (
            <div className="manageShows">
                <section className="viewAllShows">
                    <header><h1>All Shows</h1></header>
                    <div>
                        {this.renderShows()}
                    </div>
                </section>
                <section className="createShow">
                    <header><h1>New Show</h1></header>
                    <div>
                        <div><label>Name:</label><input id="nameInput" onChange={this.handleOnChange}/></div>
                        <div><label>Rating:</label><input id="ratingInput" onChange={this.handleOnChange}/></div>
                        <div><label>Preview Image</label><input id="previewInput" onChange={this.handleOnChange}/></div>
                        <button onClick={this.handleOnClick}>Create</button>
                    </div>
                    <Link to="/">Home</Link>
                </section>
            </div>
        )
    }
}

export default ManageShows