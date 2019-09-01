import React, {Component} from 'react'
import './Comments.css'
import Comment from './Comment/Comment'
import CommentsHead from './CommentsHead/CommentsHead'
import WriteComment from './WriteComment/WriteComment'

class Comments extends Component {
    render() {
        return (
            <div>
                <CommentsHead/>
                <Comment/>
                <WriteComment/>
            </div>
        );
    }
}

export default Comments