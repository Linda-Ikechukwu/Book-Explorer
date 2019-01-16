import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Gallery extends Component {
    render() {
        let alternateImg = 'https://www.unesale.com/ProductImages/Large/notfound.png'
        return (
            <Container className = "gallery">
                <Row>
                    {
                        
                            this.props.items.map((item, index) => {
                                let { title, imageLinks, infoLink, description } = item.volumeInfo;
                                return (
    
                                    <Col sm="6" md="3">
                                    <div className="book" key={index}>
                                        <a href={infoLink}  target="blank" >
                                            <img
                                                src={imageLinks !== undefined ? imageLinks.thumbnail : alternateImg}
                                                alt=" book cover"
                                            />
                                            <div className="bookTitle">
                                               <p>{title}</p>
                                               <p className="description">{description}</p>
                                            </div>
                                        </a>
                                    </div>    
                                    </Col>
    
                                )
                            })
                        
                        
                    }
                </Row>
            </Container>
        )

    }
}

export default Gallery;