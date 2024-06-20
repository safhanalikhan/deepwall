import { useState } from "react";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";
import ProductCount from "@/components/ProductCount";


const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
  `;
const ColWrapper = styled.div`
  display: flex;
  justify-content:space-between;
  height:40rem;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  height:100%;
`;
const ImageBox = styled.div`
  display: flex;
  flex:1;
  height:100%;
  max-height:750px
`;
const ImageActionBox = styled.div`
  display: flex;
  flex:1;
  height:100%;
  padding:3rem;

  .sidebar-options{
    display:flex;
    flex-direction:column;
    // justify-content:  center;

    p{
      font-size:smaller
    }
  }
`;
const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    flex-grow: 0;
    margin-top: 5rem;
  `;
const ImageButton = styled.div`
    border: 2px solid #000;
    ${props => props.active ? ` 
      border-color: #000;
    ` : `
      border-color: transparent;
    `}
    height: 80px;
    cursor: pointer;
    border-radius: 0px;
    
  `;
const Price = styled.span`
  font-size: 1.4rem;
`;

export default function ProductPage({product}) {
  const {addProduct} = useContext(CartContext);
  const [selectedQuantity, setSelectQuantity] = useState(1);
  const [activeImage,setActiveImage] = useState(product.images?.[0]);

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <ImageBox>
            <ProductImages images={product.images} activeImage={activeImage} />
          </ImageBox>
          <ImageActionBox>
            {/* <Title>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <div>
                <Price>${product.price}</Price>
              </div>
              <div>
                <Button primary onClick={() => addProduct(product._id)}>
                  <CartIcon />Add to cart
                </Button>
              </div>
            </PriceRow> */}
            {/* <div className={ 'col-7 rounded-3 sidebar-options col-5  sidebar-open' } > */}
            <div className="w-100 h-100 sidebar-options ">
                    <p>Write a review</p>
                    <div className="d-flex mb-5 mt-3" > 
                      <p className="me-3" >Availability</p>
                      <p className="mx-3" >In Stock</p>
                    </div>
                    <h1><i class="bi bi-currency-dollar"></i>{product.price}</h1>
                    {/* <div className='my-3' >
                      <label>style</label>
                      <div className='d-flex' >
                        <DynamicBtn
                          btnval='Canvas Without Border'
                          Dvar={selectborder}
                          DsetVar={setSelectborder}
                          DbuttonId='Canvas Without Border'
                        />
                        <DynamicBtn
                          btnval='Canvas Without Border'
                          Dvar={selectborder}
                          DsetVar={setSelectborder}
                          DbuttonId='Framed with Border & Acrylic Glass'
                        />
                      </div>
                    </div> */}

                    <div className='mt-5 mb-3 d-flex' >
                      <ProductCount quantity={setSelectQuantity} />
                      <div className='btn btn-dark ms-2 w-100 rounded-pill'onClick={() => addProduct(product._id)} >
                        <i class="bi bi-bag-plus me-2"></i> <span> Add to cart </span>
                      </div>
                    </div>
                    <div className='my-3 d-flex ' >
                      <div  className='btn btn-outline-dark w-100 rounded-pill' > Buy it now </div>
                    </div>
                    <ImageButtons >
                      {product.images.map(image => (
                        <ImageButton
                          key={image}
                          active={image===activeImage}
                          onClick={() => setActiveImage(image)}>
                          <Image src={image} alt=""/>
                        </ImageButton>
                      ))}
                    </ImageButtons>
                  </div>
          </ImageActionBox>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  // console.log("context",id)

  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}