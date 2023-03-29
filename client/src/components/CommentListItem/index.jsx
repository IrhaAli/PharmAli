import React from 'react'
import '../../styles/Comment.css'
import TimeAgo from 'react-timeago'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function CommentListItem(props) {
  console.log(props.comment.created_at);
  return (
    <>
      <div className='comment'>
        <span className='commentDesc'>{props.comment.comment}</span>
        <div className="commentDeets">
          <p><TimeAgo date={props.comment.created_at} /></p>
          <div>
            <p>{props.comment.name}</p>
            <div className='commentIcon'>
              {props.user === props.comment.user_id && (<IconButton className='commentIcon' onClick={() => props.deleteComment(props.comment.id)}>
                <DeleteIcon className='commentIcon' />
              </IconButton>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentListItem;