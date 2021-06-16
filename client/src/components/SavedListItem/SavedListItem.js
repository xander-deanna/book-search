import React from 'react';

function ResultListItem(props) {
    const {title, authors, image, link, description, deleteGoogleBook} = props
    return (
        <div>
                <div className="card mb-3">
                    <div className="row">
                        <div className="col-lg-1" style={{minWidth: "100px"}}>
                            <img src={image} className="img-fluid book-image" style={{minWidth: "100px"}} alt={title}/>
                        </div>
                        <div className="col-lg-11">
                            <div className="card-body">
                                <h5 className="card-title">{title} by {authors}</h5>
                                <p className="card-text" >{description}</p>
                                <div>
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn badge-pill btn-outline-dark mt-3">View Book</a>
                                    <button onClick={deleteGoogleBook.bind(this, props)} className="btn badge-pill btn-outline-dark mt-3 ml-3">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default ResultListItem;