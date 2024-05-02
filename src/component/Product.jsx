import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({items ,cart ,setCart}) => {

  const AddtoCart = (id , title, category , description , price , imgSrc)=>{
    const obj ={
      id , title , category , description , price , imgSrc
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
      <div className="container text-center">
        <div className="row">
          {items.map((product) => (
           <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div className="productbox">
            <Card>
              <Link to={`/product/${product.id}`}>
              <Card.Img variant="top" style={{width:'300px' , display:'block' , margin:'auto'}} src={product.imgSrc} />
              </Link>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Button variant="primary mx-2">{product.price}</Button>
                <Button
                onClick={()=>AddtoCart(  product.id , product.title , product.category , product.description , product.price , product.imgSrc)}
                 variant="warning">Add To Cart</Button>
              </Card.Body>
            </Card>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
