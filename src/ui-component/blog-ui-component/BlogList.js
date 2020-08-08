import React from 'react'
import Card from './Card';

export default function BlogList({posts}) {    
    return (
        <div>
            <div className="row">
            {    
                posts.map( 
                    post => <div className="col s6" key={post.id}> 
                            <Card 
                                title={post.title}
                                body={ post.body } 
                                id={post.id}
                                key = {post.id}
                            /> 
                            </div>
                )
            }
            </div>
        </div>
    )
}
