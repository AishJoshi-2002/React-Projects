import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsURL, titleLen, desLen, author, publishedAt, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ height: "29rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "225px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{titleLen ? title + "..." : title}</h5>
                        <p className="card-text">{desLen ? description + "..." : description}</p>
                        <p className='card-text'><small className='text-muted'>By {author ? author : 'Unknown'} on {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={newsURL} target="_blank"><span class="badge text-bg-info">{source.name}</span></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem