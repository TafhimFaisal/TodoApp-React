//import Axios from "axios"

let initialState = {
    posts:[
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          }
    ]
}

const rootReducer = (state = initialState,action) => {
    if(action.type === 'Delete_post'){
        let newPosts = state.posts.filter(
            post => post.id !== parseInt(action.id)
        )
        return {
            ...state,
            posts:newPosts
        }
        
    }
    
    return state
}

export default rootReducer

    // componentDidMount(){
    //     Axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.post_id)
    //         .then(
    //             ({ data }) => {
                    
    //                 this.setState({
    //                     data
    //                 }) 

    //             }
    //         )
    //     }

    // componentDidMount(){
    //     Axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(
    //             res => {
    //                 this.setState({posts:res.data.slice(0,14)}) 
    //             }
    //         )
    // }
 