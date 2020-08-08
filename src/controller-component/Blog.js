import React, { Component } from 'react'
import Axios from 'axios';

export default class Blog extends Component {
    constructor(){
        super();
        this.state = {
            data:{
                id:null,
                uaer_id:null,
                title:"Blog content is loading..." ,
                body:null
            }
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.post_id)
            .then(
                ({ data }) => {
                    
                    this.setState({
                        data
                    }) 

                }
            )
        }
        render() {
        const {body,title} = this.state.data;
        return (
            <div className="container center">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}

