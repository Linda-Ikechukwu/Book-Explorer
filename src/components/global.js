import React, { Component } from 'react';
import { Container, InputGroup, InputGroupText, InputGroupAddon, Input, } from 'reactstrap';
import Gallery from './gallery'
class Global extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchquery:'',
            items: []  
        }
    }
    
    search() {
       const url = 'https://www.googleapis.com/books/v1/volumes?q=';
       fetch(`${url}${this.state.searchquery}`, {method: 'GET'})
       .then(response => response.json())
       .then(json => {
           console.log(json);
           let {items} = json;
           this.setState({items});
       });
       
    }
    render() {
        return (

            <Container>
                <h1 className="title"> BOOK XPLORER</h1>
                <InputGroup className = "searchInput">
                    <Input type="text" placeholder="Search for a Book" className="input"
                      onChange = {e => this.setState({searchquery : e.target.value})}
                      onKeyPress = { (e) => {
                        if ( e.key === 'Enter'){
                            this.search(); 
                        }
                      }
                    }
                    />
                    <InputGroupAddon addonType="append" onClick = { () => this.search()}>
                        <InputGroupText> <span role="img"> 🔍 </span> </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                <Gallery items= {this.state.items}></Gallery>
            </Container>

        )
    }
}

export default Global;