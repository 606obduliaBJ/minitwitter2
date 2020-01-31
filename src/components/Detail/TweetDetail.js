import React from 'react'
//import Reply from './Reply'
//import Tweet from './Tweet'
//import APIInvoker from '../utils/APIInvoker'
//import update from 'react-addons-update'
//import { browserHistory } from 'react-router'
//import PropTypes from 'prop-types'

//import When from './When'
//import Otherwise from './Otherwise'
import logo from './log_tweet.png';
import './detail.css';

class TweetDetail extends React.Component {
    /*constructor(props) {
        super(props)
    } */
    render() {
        /*
        let operations = {
            addNewTweet: this.addNewTweet.bind(this)
        }*/
        return (
            <div className="fullscreen">
                        <div className="tweet-detail">
                            <i className="fa fa-circle-o-notch fa-spin fa- fa-fw">Universidad de la Sierra Sur</i>
                        </div>
                        <div className="tweet-detail">
                            <i className="fa fa-times fa- tweet-close"
                                aria-hidden="true"/>
                            <h2>TweetDetail</h2>
                            <div className="tweet-details-reply">
                               Comentarios
                            </div>
                            <div className="tweet-detail-responses">
                                
                                <li>Imagen</li>
                            </div>
                            <div className="tweet-detail">
                            <i className="fa fa-times fa- tweet-close"
                                aria-hidden="true">Poster</i>
                                <image src={logo}></image>
                        </div>
                        </div>
                        
            </div>
        )
    }
}
export default TweetDetail;