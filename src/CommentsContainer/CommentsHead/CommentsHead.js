import React, {Component} from 'react'
import './CommentsHead.css'

class CommentsHead extends Component {
    render() {
        return (
            <div className="CommentsHead">

                <div className="reviews">
                    <h3 className='reviewsLast reviewsActive'>Последние отзывы</h3>
                    <h3 className='reviewsAll'>Все отзывы</h3>
                </div>

                <div className="CommentsHeadInfo">

                    <div className="likes">
                        <span className='likesIco'/>
                        <p  className="likesText">131</p>
                    </div>

                    <div className="comments">
                        <span className='commentsIco'/>
                        <p className="commentsText">14</p>
                    </div>

                </div>

            </div>
        );
    }
}

export default CommentsHead