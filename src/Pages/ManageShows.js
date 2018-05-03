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
        }
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
                newPreviewImage: event.target.valuer
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

    getAvgRating = () => {
        const sumOfRatings = this.props.allShows.reduce((accumulater, show) => {
            return show.rating + accumulater
        }, 0)
        return sumOfRatings / this.props.allShows.length
    }

    hasEnoughKidShows = () => {
        const minRequiredKidShows = 2

        let kidShowCount = 0
        let remainingShows = this.props.allShows.length
        while (kidShowCount < minRequiredKidShows && remainingShows) {
            remainingShows--

            const show = this.props.allShows[remainingShows]

            if (show.rating === 1){
                kidShowCount++
            }
        }

        return (kidShowCount >= minRequiredKidShows).toString()
    }

    render() {
        return (
            <div className="manageShows">
                <section className="viewAllShows">
                    <header>
                        <h1>All Shows</h1>
                        <p>Average Rating: {this.getAvgRating()}</p>
                        <p>Kid Shows Avaliable: {this.hasEnoughKidShows()}</p>
                    </header>
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