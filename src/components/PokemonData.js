import React from 'react';
import { Card, Col, Container, Row, ProgressBar } from 'react-bootstrap';

class PokemonData extends React.Component {    

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Header>
                                <h5>{this.props.name}</h5>
                                <img src={this.props.sprite} alt={this.props.name}/>
                            </Card.Header>
                            <Card.Body>
                                <h5>Type</h5>
                                {this.props.type.map((type, key) => (
                                 <div key={key}>
                                     <span>{type.type.name}</span>
                                 </div>
                                ))}
                                <h5>Abilities</h5>
                                {this.props.abilities.map((ability, key) => (
                                 <div key={key}>
                                     <span>{ability.ability.name}</span>
                                 </div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                        <Card.Body>
                                <h5>Base Stats</h5>
                                {this.props.stats.map((stat, key) => (
                                 <div key={key}>
                                     <span>{stat.stat.name}</span>
                                     <ProgressBar label={stat.base_stat}now={stat.base_stat} max={255}/>
                                 </div>
                                ))}
                                <h5>Abilities</h5>
                                {this.props.abilities.map((ability, key) => (
                                 <div key={key}>
                                     <span>{ability.ability.name}</span>
                                 </div>
                                ))}
                            </Card.Body>                                        
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PokemonData;