import React, { Component } from 'react';
import axios from 'axios';
import GIF from './GIF';
import AOS from 'aos';

class GIFpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trending: [],
        }
    }

    componentDidMount = () => {
        axios.get('https://api.giphy.com/v1/gifs/trending?api_key=W6cN1s8I3pm7UJU1nHNwM9FhI4KhwdP8&limit=50')
            .then(response => {
                console.log(response);
                this.setState({trending: response.data.data})
            })
            .catch(error => {
                console.log(error);
            })
        AOS.init({duration: 2000});
    }

    sortForward = () => {
        this.setState({trending: this.state.trending.sort(function(a,b){return Date.parse(a.import_datetime) - Date.parse(b.import_datetime)})})
    }

    sortReverse = () => {
        this.setState({trending: this.state.trending.sort(function(a,b){return Date.parse(b.import_datetime) - Date.parse(a.import_datetime)})})
    }

    render () {
        return (
            <div>
                <div className="buttons">
                    <button onClick={this.sortForward}>Sort by time (forward)</button>
                    <button onClick={this.sortReverse}>Sort by time (reverse)</button>
                </div>
                <div className="page">
                    {this.state.trending.map((gif, index) => <GIF gif={gif} key={gif.id} index={index}/>)}
                </div>

            </div>
        )
    }
}

export default GIFpage;