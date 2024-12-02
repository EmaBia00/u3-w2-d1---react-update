import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div>
        <h4>Comments</h4>
        {comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))}
      </div>
    );
  }
}

export default CommentsList;
