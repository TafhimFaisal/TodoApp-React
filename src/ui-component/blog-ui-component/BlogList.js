import React from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

export default function BlogList({posts}) {    
    return (
        <div>
            <div className="row">
            {    
                posts.map( 
                    post => <div className="col s12" key={post.id}> 
                                <Link to={"/blog/"+post.id} key={post.id}>
                                    <Card 
                                        title={post.title}
                                        body={ post.body } 
                                        id={post.id}
                                        key = {post.id}
                                    /> 
                                </Link>
                            </div>
                )
            }
            </div>
        </div>
    )
}
