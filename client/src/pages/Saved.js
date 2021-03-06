import React, { Component } from 'react'
import { Container } from "../components/Grid/Grid";
import API from '../utils/API';
import SavedList from "../components/SavedList/SavedList";

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("You deleted this book:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log("This is the res from getBooks", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }


    render() {
        return (
            <div>
                <Container fluid>
                {this.state.savedBooks.length ? (
                    <SavedList 
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SavedList>
                ) : (
                    <div>
                        <hr/>
                        <h5 style={{fontStyle: "italic"}}><i class="fas fa-times-circle"></i> No results to display</h5>
                    </div>
                )}
                </Container>
            </div>
        )
    }
}

export default Saved
