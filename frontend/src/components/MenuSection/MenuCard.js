import React from 'react'
import {
    CardContainer,
    StyledCardMedia,
    StyledCard,
    StyledTypography

} from './MenuSectionElements';

const MenuCard = ({ product }) => {
    return (
        <>
          <CardContainer>
                <StyledCardMedia className="" image={product.product_image} title= {product.product_name} />
                <StyledCard>
                    <div className="">
                        <StyledTypography>
                            {product.product_name}
                        </StyledTypography>
                        <StyledTypography>
                            ${product.product_price}
                        </StyledTypography>
                    </div>
                    <StyledTypography>{product.description}</StyledTypography>
                </StyledCard>
            </CardContainer>
        </>
    )
}

export default MenuCard
