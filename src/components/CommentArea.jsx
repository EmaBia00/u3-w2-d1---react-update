import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { Container, Row, Col } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    loading: true
  };

  componentDidMount() {
    this.fetchComments();
  }
  fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDEzMjhhZDEyOTAwMTU4NzZiYjgiLCJpYXQiOjE3MzI3OTgzMDIsImV4cCI6MTczNDAwNzkwMn0.7zkVPSItjo-2cKzYHlkKohHWDjiSFL_5q7A_s_O0COc"
        }
      });
      const data = await response.json();
      this.setState({ comments: data, loading: false });
    } catch (error) {
      console.error("Error fetching comments:", error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { comments, loading } = this.state;
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            {loading ? <p>Loading comments...</p> : <CommentsList comments={comments} />}
            <AddComment book={this.props.book} onCommentAdded={this.fetchComments} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
