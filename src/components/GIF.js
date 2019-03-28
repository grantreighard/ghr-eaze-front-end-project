import React, { Component } from 'react';
import AOS from 'aos';
import './aos.css';

class GIF extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        }
    }

    toggleShow = () => {
        this.setState({showDetails: this.state.showDetails ? false : true})
    }

    componentDidMount = () => {
        AOS.init({duration: 2000});
    }
    render () {
        return(
            <div className="GIFcontainer">
                <img src={`https://media.giphy.com/media/${this.props.gif.id}/giphy.gif`} alt={this.props.gif.slug} onClick={this.toggleShow} width="400" className="GIFpic" data-aos="flip-up"/>
                <ul>
                    {this.state.showDetails ? this.props.gif.title ? <li>{this.props.gif.title}</li> : null : null}
                    {this.state.showDetails ? this.props.gif.username ? <li>By: {this.props.gif.username}</li> : null : null}
                    {this.state.showDetails ? this.props.gif.rating ? <li>Rating: {this.props.gif.rating.toUpperCase()}</li> : null : null}
                    {this.state.showDetails ? this.props.gif.source_post_url ? <li><a href={this.props.gif.source_post_url}>Source</a></li> : null : null}
                </ul>
            </div>
        )
    }

}

export default GIF;