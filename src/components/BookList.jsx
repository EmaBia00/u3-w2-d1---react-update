import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Row, Container, Form } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: ""
  };

  filterBooks = () => {
    return this.props.books.filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()));
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    return (
      <Container className="mt-5">
        <h2 className="text-center mb-2">Esplora i nostri libri fantasy</h2>
        <Form className="mb-4">
          <Form.Group controlId="search">
            <Form.Label>Cerca un libro</Form.Label>
            <Form.Control type="text" placeholder="Inserisci il titolo" value={this.state.searchQuery} onChange={this.handleSearchChange} />
          </Form.Group>
        </Form>
        <Row>
          {this.filterBooks().map((book) => (
            <Col key={book.asin} xs={12} md={6} lg={4} xl={3} className="mb-4">
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
