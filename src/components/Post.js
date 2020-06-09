import React from 'react'

const post = {
    "id": 1,
    "description": "Me playing squash a few years ago",
    "likes": 20,
    "author": null,
    "created_at": "2020-06-08T13:11:42.095Z",
    "updated_at": "2020-06-08T13:11:42.095Z",
    "image": {
        "url": "/uploads/Squash_750bdf0469.jpeg",
    }
}

const API_URL = 'http://localhost:1337'

const formatImageUrl = (url) => `${API_URL}${url}`

export default ({description, likes, url}) => {

    return (
        <div className="Post">
            <img className="Post__Image" src={formatImageUrl(url)} />
            <h4>{description}</h4>
            <div>
                <span>Likes: {likes}</span>
            </div>
        </div>
    )
}
    
