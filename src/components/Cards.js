import {Card} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import axios from "axios";


function Cards(){
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/"
        }).then(response =>
        {
            setProduct(response.data)
        })
    }, )

    return(
        <div className="content">
            <h1>Вся одежда</h1>

                    {product.map(p=> (
                        <Card style={{width: '18rem'}} key={p.id}>
                        <Card.Body>
                        <Card.Title>{p.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{p.price}</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#">{p.description}</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        </Card>
                        ))}
        </div>
            );
}
export default Cards;