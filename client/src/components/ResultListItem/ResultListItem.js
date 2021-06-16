import React, { Component } from 'react';

class ResultListItem extends Component {

    state = {
        mounted: false,
        bgColor: "",
        color: "",
        text: "Save"
    }
    
    componentDidMount = () => {
        this.setState({
            mounted: true
        })
        console.log("Mounted!")
    }

    getStyle = () => {
        if (this.state.text === "Save") {
            this.setState({
                bgColor: "#784d8d",
                color: "white",
                text: "Saved"
            })
        }
        else {
            this.setState({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }   
    }

    onClickFunc = () => {
        this.props.saveGoogleBook(this.props)//.bind(this, this.props);
        this.getStyle();
    }
    
    render () {
        return (
            <div>
                <div className="card mb-3">
                    <div className="row">
                        <div className="col-lg-1" style={{minWidth: "100px"}}>
                            <img src={this.props.image} className="img-fluid book-image" style={{minWidth: "100px"}} alt={this.props.title}/>
                        </div>
                        <div className="col-lg-11">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title} by {this.props.authors}</h5>
                                <p className="card-text" >{this.props.description}</p>
                                <div>
                                <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn badge-pill btn-outline-dark mt-3">View Book</a>
                                <button onClick={this.onClickFunc} style={{ backgroundColor: this.state.bgColor, color: this.state.color }} className="btn badge-pill btn-outline-dark mt-3 ml-3">{this.state.text}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ResultListItem;





