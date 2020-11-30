import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button, Col } from 'react-bootstrap';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        searchBox: "",
        };
    }

    onChange = (event) => {
        const boxInput = event.target.value;
        this.setState({searchBox: boxInput});
    }
    handleClick = (event) => {
        this.props.getPokemon(this.state.searchBox)
    }

    render() {
        return (
            <Container>
                <Form className="mt-2">
                    <Form.Row className="align-items-center">
                        <Col sm={10} className="my-1">
                            <Form.Control
                            onChange={this.onChange}
                            placeholder="Search for Pokemon" />
                        </Col>
                        <Col sm={2} className="my-1">
                            <Button block onClick={this.handleClick}>Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        );
    }
}

export default Search;