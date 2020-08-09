import React, { Component } from 'react'
import Axios from 'axios'

export default class Weather extends Component {
    constructor () {
        super();
        this.State = {
            weather:null ,
            wind:null,
            main:null,
            sys: null
        }
    }

    getWeather = (country) => {

        Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=6e559d65f3c8abe4ce59a76822800f48`)
            .then(
                (res) => {
                    let { weather ,wind,main,sys } = res.data; 
                    this.setState({weather ,wind,main,sys})
                }
            )

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.getWeather(e.target.elements[0].value);
        e.target.reset();
    }

    

    render() {
        // console.log(this.state ? this.state.weather : null);
        let weatherCard = this.state ? (
                <div className="row">
                    <div className="col s12">
                    
                        <div className="post card">
                            <div className="card-content">
                                <span className="card-title">{this.state.weather[0].description}</span>
                                <p></p>
                            </div>
                        </div>

                    </div>
                </div>
        ) : (
            <div className="row">
                    <div className="col s12">
                    
                        <div className="post card">
                            <div className="card-content">
                                <span className="card-title">Please Enter City</span>
                            </div>
                        </div>

                    </div>
                </div>
        )
        return (
            <div className="container center">
                <h1><b>Weather</b></h1>
                <div className="row">
                    <div className="col s3"></div>
                    <div className="col s6">
                        <form onSubmit={ (e) => { this.handleSubmit(e)}}>
                            <input type="text" placeholder="Enter City Name"/>
                        </form>
                    </div>
                    <div className="col s3"></div>
                </div>

                {weatherCard}

            </div>
        )

    }
}


