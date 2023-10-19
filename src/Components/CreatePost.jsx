import { HiOutlinePencilSquare } from 'react-icons/hi2'
import './CreatePost.css'

export default function CreatePost(){
    return(
        <>
        <div id="createPostContainer">
            <create-post-header>Post a Blog!</create-post-header>
            <div id='createTitleContainer'>
                <input id="createPostTitle" type="text" placeholder="Title..."/>
            </div>
            <div id='postContainer'>
                <HiOutlinePencilSquare id="createPostIcon"/>
                <textarea id="createPost" type="text" placeholder="Create a Post..."/>
            </div>
            </div>
        </>
    )
}