import React, {useEffect, useState} from 'react'

import Helmet from '../components/Helmet'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

import { wareHouseAPI } from '../api/api'
import { useParams } from 'react-router-dom'

const Product = props => {

    const {id} = useParams()

    const [product, setProduct] = useState()
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
        async function getProduct() {
            
            try {
                const response = await wareHouseAPI.getById(id);
                if(response.status === 200) {
                    const product = response.data
                    console.log(product)
                    setProduct(product)
                } else {
                    console.log(response)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    },[id])

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await wareHouseAPI.getAll();
                if(response.status === 200) {
                    const products = response.data
                    setRelatedProducts(products)
                } else {
                    console.log(response)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    },[id])

    return (
        product ?
        <Helmet title={product.product.productName}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item) => (
                                <ProductCard
                                    item={item}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
        : <div>loading</div>
    )
}

export default Product
