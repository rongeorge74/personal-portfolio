import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HomeAnime from '../../assets/image.png'

import './Home.css'

class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <div className="header-text">
                    <h1>Hi, I am Ron George </h1>
                    <p>Cloud Engineer | DevOps Engineer | Full Stack Developer</p>
                </div>
                <div className="head-btns">
                    <Link to='/about' className="btn btn-white">
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to='/contact' className="btn btn-transparent">
                        <p className="btn-text">Connect with me</p>
                    </Link>
                </div>
                <div className="splash-image">
                    <img src={HomeAnime} alt="Animation" className="Home-anime"></img>
                </div>
            </div>
        )
    }
}

export default Home