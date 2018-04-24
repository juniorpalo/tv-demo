import React, { Component } from 'react'
import Show from './Show'

class ManageShows extends Component {
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
        this.setState((prev) => {
            const existingShows = prev.shows
            existingShows.push({
                    name: prev.newShowName,
                    rating: prev.newShowRating,
                    newPreviewImage: prev.newPreviewImage
                })

            return {
                shows: existingShows
            }
        })
    }

    renderShows = () => {
        //const showComponents = []

        // for (const show of this.state.shows) {
        //     showComponents.push(
        //     <Show key={0} name={show.name} rating={show.rating} newPreviewImage={show.newPreviewImage}/>                                        
        //     )
        // }

        // for(let i =0; i < showComponents.length; i++) {
        //     const show = showComponents[i];

        //     showComponents.push(
        //         <Show key ={i} name={show.name} rating={show.rating} newPreviewImage={show.newPreviewImage}/>
        //     )
        // }

        //return showComponents

        return this.state.shows.map((show, i) => {
            return (
                <Show key ={i} name={show.name} rating={show.rating} newPreviewImage={show.newPreviewImage}/>
            )
        })
    }

    render() {
        return (
            <div>
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
                </section>
            </div>
        )
    }
}

export default ManageShows