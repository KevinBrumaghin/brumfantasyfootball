import { HiOutlinePencilSquare } from 'react-icons/hi2'
import './CreatePost.css'

export default function CreatePost(){
    return(
        <>
        <div id="createPostContainer">
            <create-post-header>Create a Post!</create-post-header>
            <div id='createTitleContainer'>
                <input id="createPostTitle" type="text" placeholder="Give your post a title..."/>
            </div>
            <div id='postContainerTop'>
                <HiOutlinePencilSquare id="createPostIcon"/>
                <textarea id="createPost" type="text" placeholder="What do you want to say..."/>
            </div>
        </div>
        </>
    )
}