import React, {useState, useEffect} from 'react'
import Post from '../components/Post'

export default ({match}) => {

    const {id} = match.params
    console.log("id", id)

    const [post, setPost] = useState({})

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:1337/posts/${id}`)
            const data = await response.json()

            console.log("data", data)
            setPost(data)
        }
        fetchPost()
    })

    return (
        <div>
            <Post 
                description={post.description}
                url={post.image && post.image.url}
                likes={post.likes}
            />
        </div>
    )

}