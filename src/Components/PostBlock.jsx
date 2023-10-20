import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsHandThumbsUpFill } from 'react-icons/bs'
import { BsHandThumbsUp } from 'react-icons/bs'

export default function PostBlock( { postInfo } ){
    const [thumbsUp, setThumbsUp] = useState(false)
    const like = () => {
        setThumbsUp(!thumbsUp);
    }

    return(
        <>
        <div id="postContainer">
            <post-title>{postInfo.title}</post-title>
            <post-user>{postInfo.user}</post-user>
            <post-time>{postInfo.timeDate}</post-time>
            <p id="postText">{postInfo.text}</p>
            <div id="likeButton">{thumbsUp ? <BsHandThumbsUpFill onClick={like} id="thumbsUp"/> : <BsHandThumbsUp onClick={like} id="thumbsUp"/>}</div>
            </div>
        </>
    )
}

PostBlock.propTypes = {
    postInfo: PropTypes.object,
};