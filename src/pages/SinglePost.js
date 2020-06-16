import React, {useState, useEffect} from 'react'
import Post from '../components/Post'

export default ({match, history}) => {

    const {id} = match.params
    console.log("id", id)

    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:1337/posts/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        history.push('/')
    }

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:1337/posts/${id}`)
            const data = await response.json()

            console.log("data", data)
            setPost(data)
            setLoading(false)
        }
        fetchPost()
    }, [])

    return (
        <div>
            {loading &&
                <p>Loading...</p>
            }
            {!loading &&
                <>
                    {post.id &&
                        <>
                            <Post 
                                description={post.description}
                                url={post.image && post.image.url}
                                likes={post.likes}
                            />
                            <button onClick={handleDelete}>Delete this Post</button>
                        </>
                    }
                    {!post.id &&
                        <p>404 - not found</p>
                    }
                </>
            }
        </div>
    )

}