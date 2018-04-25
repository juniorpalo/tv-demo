import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactPropTypes from 'prop-types'
import Show from './Show'

export default class ViewShows extends Component {
    static propTypes = {
        allShows: ReactPropTypes.array.isRequired
    }
    renderShows = () => {
        const noMaShows = this.props.allShows.filter((show) => {
            return (show.rating) < 5
        })

        return noMaShows.map((show) => {
            return <Show name={show.name} rating={show.rating} newPreviewImage={show.newPreviewImage} />
        })
    }
    render () {
        return (
            <main className="viewShows">
                <section className="avaliableShows">
                    <header><h3>Avaliable Shows</h3></header>
                    {this.renderShows()}
                    <Link to="/manageShows">Manage Shows</Link>
                </section>
                <section className="currentShow">
                
                </section>
            </main>
        )
    }
}