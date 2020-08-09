import React, { Component } from 'react'
// import Axios from 'axios'
import BlogList from '../ui-component/blog-ui-component/BlogList'
import { connect } from 'react-redux';


class Blogs extends Component {
    render() {
        return (
            <div className="container">
                {
                    this.props.posts.length 
                    ? <BlogList posts={this.props.posts}/> 
                    : "No Posts"
                }
            </div>
        )
    }    
}

const mapStateToProps = (state) =>{
    return {
        posts:state.posts
    }
}

export default  connect(mapStateToProps)(Blogs);
