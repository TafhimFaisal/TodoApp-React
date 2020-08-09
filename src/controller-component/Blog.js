import React, { Component } from 'react'
import { connect } from 'react-redux';
import deletePostAction from '../action/deletePostAction';

class Blog extends Component {

        handleClick = () => {
            this.props.deletePost(this.props.post.id)
            this.props.history.push('/blogs')
        }

        render() {
        const {body,title,id} = this.props.post;
        
        return (
            <div className="container center" key={id}>
                <h1>{title}</h1>
                <p>{body}</p>
                <button className="btn" onClick={this.handleClick}>
                    Delete Post
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        post:state.posts.find( (post) => {
            return post.id === parseInt(ownProps.match.params.post_id)
        } )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePostAction(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Blog);
