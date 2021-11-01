import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/index';
import useStyles from './PlaceOrderElements';

const Products = ({ products, error, loading }) => {

    const classes = useStyles();

        return (
            <div>
                <h1></h1>
                {loading ? <h2>Loading...</h2>
                    : error ? <h3>{error}</h3>
                    :
                    <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Grid container justify="center" spacing={4}>
                        {products.map((product) => (
                            <Grid item key={product.product_id} xs={12} sm={6} md={4} lg={3}>
                                <Product product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </main>    
            }
            </div>
        )
}

export default Products;
