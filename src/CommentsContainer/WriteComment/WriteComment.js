import React, {Component} from 'react'
import './WriteComment.css'
import {connect} from 'react-redux'

class WriteComment extends Component {
    state = {
        valueText: ""
    }

    setText(e) {
        this.setState({
            valueText: e.target.value
        })
    }

    addComment(e) {
        e.preventDefault();
        this.props.onAddText(this.state.valueText);

        this.setState({
            valueText: ""
        })
    }

    render() {
        return (
            <form className="WriteComment">

                <textarea
                    value={this.state.valueText}
                    onChange={this.setText.bind(this)}
                    className="WriteCommentTextarea"/>

                <button
                    className="WriteCommentButton"
                    onClick={this.addComment.bind(this)}
                >
                    Написать консультанту
                </button>

            </form>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        onAddText: (textes) => {
            dispatch({type: 'ADD_TEXT', text: textes})
        }
    })
)(WriteComment)