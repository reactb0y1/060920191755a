import React, {Component} from 'react'
import './CommentsContainer.css'
import Comment from './Comments/Comments'
import CommentsHead from './CommentsHead/CommentsHead'
import WriteComment from './WriteComment/WriteComment'

class CommentsContainer extends Component {
    render() {
        return (
            <div className='CommentsContainer'>
                <CommentsHead/>
                <Comment/>
                <WriteComment/>
            </div>
        );
    }
}

export default CommentsContainer