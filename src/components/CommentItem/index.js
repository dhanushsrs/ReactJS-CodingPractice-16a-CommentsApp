// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toogleIsLiked, deleteComment} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails

  const initial = name ? name[0].toUpperCase() : ''
  const liketextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  const onclickLike = () => {
    toogleIsLiked(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{name}</p>
            <p className="time">{postedTime} ago </p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="button-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={liketextClassName}
            type="button"
            onClick={onclickLike}
          >
            Like
          </button>
        </div>
        <button className="button" type="button" data-testid= "delete" onClick={onDeleteComment}>
          <img
            src=" https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
