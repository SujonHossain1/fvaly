import Product from 'components/common/Product';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductsSkeleton from 'skeletons/ProductsSkeleton';
import { IProduct } from 'types';

interface IProps {
  products: IProduct[] | null;
  isLoading: boolean;
}

const Products = ({ products, isLoading }: IProps) => {
  console.log('products', products);
  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-4 pt-3">Latest Products</h2>
        {isLoading && <ProductsSkeleton />}
        {!isLoading && (
          <Row className="align-items-stretch">
            {products?.map((product: IProduct) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Products;
