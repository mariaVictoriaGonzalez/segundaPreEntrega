import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { getData } from '../data';
import "./ItemDetailContainer.css"


function ItemDetailContainer() {
    const params = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [productDetail, setProductDetail] = useState({})
    console.log(params.id)


    useEffect(() => {
        setIsLoading(true)
        getData()
            .then(data => {
                const findData = data.find(product => product.id === Number(params.id))
                setProductDetail(findData)
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            <div className="contenedorCard">
                <Card key={productDetail.id}>
                    <Card.Img variant="top" src={productDetail.image} />
                    <Card.Body>
                        <Card.Text>
                            {productDetail.title}
                        </Card.Text>
                        <Card.Text>
                            {productDetail.description}
                        </Card.Text>
                        <Card.Text>
                            ${productDetail.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default ItemDetailContainer;