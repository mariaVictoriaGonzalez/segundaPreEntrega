import { useEffect, useState } from "react"
import { getData } from "../data"
import ItemList from "./ItemList"

function ItemListContainer({ category = '' }) {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setIsLoading(true)

        if (category) {
            getData()
                .then(data => {
                    const filteredData = data.filter(item => item.category === category)
                    setProducts(filteredData)
                })
                .catch(error => console.error(error))
                .finally(() => setIsLoading(false))
        } else {
            getData()
                .then(data => setProducts(data))
                .catch(error => console.error(error))
                .finally(() => setIsLoading(false))
        }
    }, [category])

    return (
        <ItemList ItemList={products} />
    )
}

export default ItemListContainer