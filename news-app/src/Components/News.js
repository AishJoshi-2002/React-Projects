import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Mitchel Broussard",
            "title": "Samsung's Spring Sale Expands With Big Discounts on Galaxy Smartphones, Watches, Tablets, and Laptops",
            "description": "This weekend, we're tracking a new sale at Samsung with savings on the company's best smartphones, smartwatches, tablets, and laptops. These discounts are part of Samsung's larger Discover Samsung Spring Sale, which we started covering last week with deals on…",
            "url": "https://www.macrumors.com/2024/03/10/samsungs-spring-sale-expands/",
            "urlToImage": "https://images.macrumors.com/t/lulyy5z8sCC5bSsGPkL6HbFRKQk=/1920x/article-new/2024/03/samsung-hero-blue.jpg",
            "publishedAt": "2024-03-10T14:37:44Z",
            "content": "This weekend, we're tracking a new sale at Samsung with savings on the company's best smartphones, smartwatches, tablets, and laptops. These discounts are part of Samsung's larger Discover Samsung Sp… [+2337 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Katherine Tangalakis-Lippert,Lloyd Lee",
            "title": "Zuck roasts the Apple headset again",
            "description": "In a Threads post, Mark Zuckerberg slammed Apple's Vision Pro, saying Meta's Oculus Quest is better and the Apple headset is \"not what we aspire to.\"",
            "url": "https://www.businessinsider.com/mark-zuckerberg-slams-apple-vision-pro-again-meta-quest-vr-2024-3",
            "urlToImage": "https://i.insider.com/65ed2a0390413ab8e1db371a?width=1200&format=jpeg",
            "publishedAt": "2024-03-10T04:28:16Z",
            "content": "Facebook CEO Mark Zuckerberg introduced the new Oculus Quest at the Facebook F8 Conference at McEnery Convention Center in San Jose, California.AMY OSBORNE via Getty Images\r\n<ul><li>Mark Zuckerberg h… [+2621 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Lacort",
            "title": "Hay rumores de que Apple está valorando lanzar un anillo inteligente. Tiene mucho sentido, pese al Apple Watch",
            "description": "El rumore rumore con el anillo inteligente de Apple viene de lejos, pero en estas últimas semanas se ha fortalecido gracias a una filtración de Mark Gurman en Bloomberg, quien confirmó que es uno de los productos sobre los que Apple está trabajando —lo cual n…",
            "url": "https://www.xataka.com/wearables/hay-rumores-que-apple-esta-valorando-lanzar-anillo-inteligente-tiene-mucho-sentido-pese-a-que-tenga-apple-watch",
            "urlToImage": "https://i.blogs.es/932c47/1366_2000/840_560.jpeg",
            "publishedAt": "2024-03-10T10:00:53Z",
            "content": "El rumore rumore con el anillo inteligente de Apple viene de lejos, pero en estas últimas semanas se ha fortalecido gracias a una filtración de Mark Gurman en Bloomberg, quien confirmó que es uno de … [+3452 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Yúbal Fernández",
            "title": "Cómo liberar espacio en tu cuenta de Google de forma rápida y sencilla con estos consejos básicos",
            "description": "Vamos a decirte varios métodos y trucos para liberar espacio en tu cuenta de Google. Es ahí donde se centraliza el almacenamiento disponible tanto para Google Drive como para Gmail, Google Fotos y el resto de aplicaciones nativas de Google o de terceros que h…",
            "url": "https://www.xataka.com/basics/como-liberar-espacio-tu-cuenta-google-forma-rapida-sencilla-estos-consejos-basicos",
            "urlToImage": "https://i.blogs.es/975423/cuenta-google/840_560.jpeg",
            "publishedAt": "2024-03-10T13:00:54Z",
            "content": "Vamos a decirte varios métodos y trucos para liberar espacio en tu cuenta de Google. Es ahí donde se centraliza el almacenamiento disponible tanto para Google Drive como para Gmail, Google Fotos y el… [+6557 chars]"
        }
    ]
    constructor () {
        super()
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    checklength = (type, text)=>{
        if(type === "title" && text.length > 45) {
            return true
        } else if(type === "description" && text.length > 88) {
            return true
        } else {
            return false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsApp - Top Headlines</h2>
                
                <div className='row'>
                {this.state.articles.map((element) => {
                    // a unique key should be present when using map
                    return <div className='col-md-4' key={element.url}>
                    <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.
urlToImage} newsURL={element.url} titleLen={this.checklength("title", element.title)} desLen={this.checklength("description", element.description)}/>
                </div>
                })}
                    
                </div>
                
            </div>
        )
    }
}

export default News;