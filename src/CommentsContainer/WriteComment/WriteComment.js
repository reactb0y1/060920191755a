import React, {Component} from 'react'
import './WriteComment.css'
import {connect} from 'react-redux'

class WriteComment extends Component {
    render() {
        return (
            <form className="WriteComment">

                <textarea className="WriteCommentTextarea"/>

                <button className="WriteCommentButton">
                    Написать консультанту
                </button>

            </form>
        );
    }
}

// export default WriteComment
export default connect(
    null,
    null
)(WriteComment)