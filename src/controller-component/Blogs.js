import React, { Component } from 'react'
import Axios from 'axios'
import BlogList from '../ui-component/blog-ui-component/BlogList'


export default class Blogs extends Component {
    
    constructor () {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                res => {
                    this.setState({posts:res.data.slice(0,14)}) 
                }
            )
    }
 

    render() {
        return (
            <div className="container">
                {
                    this.state.posts.length 
                    ? <BlogList posts={this.state.posts}/> 
                    : "No Posts"
                }
            </div>
        )
    }
}
