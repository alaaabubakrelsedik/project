import './Product.css'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../redux/cartreducer';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
  const { id } = useParams();
  const [selectedimg, setSelectedimg] = useState("img");
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // First get all products to find the documentId
        const productsRes = await axios.get(
          `${process.env.REACT_APP_API_URL}/products?populate=*`,
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
            }
          }
        );
        
        console.log('All products:', productsRes.data.data);
        
        // Find the product with matching id
        const foundProduct = productsRes.data.data.find(p => p.id === parseInt(id));
        console.log('Found product:', foundProduct);

        if (foundProduct) {
          // Now fetch the specific product using documentId
          const productRes = await axios.get(
            `${process.env.REACT_APP_API_URL}/products/${foundProduct.documentId}?populate=*`,
            {
              headers: {
                Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
              }
            }
          );
          
          console.log('Product details:', productRes.data);
          setProduct(productRes.data.data);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="product">Loading...</div>;
  if (error) return <div className="product">Error: {error}</div>;
  if (!product) return <div className="product">Product not found</div>;

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img 
            src={process.env.REACT_APP_UPLOAD_URL + product?.img?.url} 
            alt="" 
            onClick={() => setSelectedimg("img")}
          />
          <img 
            src={process.env.REACT_APP_UPLOAD_URL + product?.img2?.url} 
            alt="" 
            onClick={() => setSelectedimg("img2")}
          />
        </div>
        <div className="mainimg">
          <img 
            src={process.env.REACT_APP_UPLOAD_URL + (selectedimg === "img" ? product?.img?.url : product?.img2?.url)} 
            alt=""
          />
        </div>
      </div>

      <div className="right">
        <h1>{product?.title}</h1>
        <span className='price'>${product?.price}</span>
        <p>{product?.desc}</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => prev <= 0 ? 0 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button 
          className="add" 
          onClick={() => dispatch(addtocart({
            id: product.id,
            title: product.title,
            desc: product.desc,
            price: product.price,
            img: product.img.url,
            quantity
          }))}
        >
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div> 
          <div className="item"> 
            <BalanceIcon/> ADD TO COMPARE
          </div>     
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
           
        <div className="info">
          <span>DESCRIPTION</span>
          <span>ADDITIONAL INFORMATION</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;