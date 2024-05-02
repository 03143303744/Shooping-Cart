import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./MData";
import Product from "./Product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "react-bootstrap/Button";
const DetailsProduct = ({cart, setCart}) => {
  // get id
  const { id } = useParams();
  // find state
  const [product, setProduct] = useState({});
  // related product find state
  const [relatedproduct , setRelatedProduct] = useState([]);

  // find related id product with fillter function
  useEffect(() => {
    // find id bace product 
    const filterById = items.filter((product) => product.id == id);
    setProduct(filterById[0]);

    // find categroy base peoduct which is related product 
    const relatedproduct = items.filter((p)=>p.category === product.category)
    setRelatedProduct(relatedproduct)

    }, [id , product.category]);


    const AddtoCart = (id ,title , category , description , price , imgSrc)=>{
      const obj ={
        id ,title, category , description , price , imgSrc
      }
      setCart([...cart , obj]);
      toast.success('Your I Add', {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  
    }
  

  return (
    <>
        <ToastContainer
position="top-right"
autoClose={1200}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div
              className="product-details-box"
              style={{
                maxWidth: "800px",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <div className="d-sm-flex flex-wrap align-items-center">
                {/* Product Image */}
                <div
                  style={{
                    flex: "1",
                    marginRight: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                {/* Product Details */}
                <div style={{ flex: "2" }}>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>Price: {product.price}</p>
                  <button className="btn btn-danger mx-2">Buy Now</button>
                  <Button
                onClick={()=>AddtoCart(  product.id , product.title, product.category , product.description , product.price , product.imgSrc)}
                 variant="warning">Add To Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      < Product cart={cart} setCart={setCart} items={relatedproduct}/>
    </>
  );
};

export default DetailsProduct;
