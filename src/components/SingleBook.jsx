import { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false
  };

  handleSelect = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card className={`card-custom ${selected ? "border-danger border-3" : ""}`}>
        <Card.Img variant="top" src={book.img} alt={book.title} style={{ cursor: "pointer" }} onClick={this.handleSelect} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${book.price}
          </Card.Text>
        </Card.Body>

        {selected && (
          <Container className="mt-4">
            <Row>
              <Col>
                <CommentArea book={book} />
              </Col>
            </Row>
          </Container>
        )}
      </Card>
    );
  }
}

export default SingleBook;
