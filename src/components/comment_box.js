import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  onHandleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ comment: ''})
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.onHandleChange.bind(this)} />
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments }
}

export default connect(null, actions)(CommentBox);
