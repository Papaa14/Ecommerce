import React, { useState, useEffect } from "react";
import GetProductsForm from "./GetProductsForm";
import axios from "./axios";
import ProductCard from "./ProductCard";

function Shoepage({type}) {
  const [formValues, setFormValues] = useState({
    search: "",
    category: "",
    price: 1000,
    gender:"",
  });
  const [products, setProducts] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // If the category input changes, fetch the filtered products
    if (name === "category") {
      fetchData({
        ...formValues,
        [name]: value, // Update the category in the formValues
      });
    }
  };

  const resetOnClick = () =>{
    setFormValues({
      search: "",
      category: "",
      price: 1000,
      gender:"",
    })
    fetchData({
      search: "",
      category: "",
      price: 1000,
      gender:"",
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchData(formValues);
  }

   
  useEffect(() => {
    fetchData();
  }, []);
 const fetchData = async (filters = {}) => {
    try {
      const response = await axios.get("/api.php", {
        params: {
          type: type,
          category: filters.category || formValues.category, // Use the category from filters or current formValues
          price: filters.price || formValues.price,
          name: filters.search || formValues.search,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      setProducts([]);
    }
  };
  let productsToRender = products.map(product => {
    return (<ProductCard
              key={product.idproduct}
              productId={product.idproduct}
              productType={product.category}            
              outofstock={false}
              size={product.size}
              price={product.price}
              gender={product.gender}
              image={product.image}
            />)
  })
  return (
    <div>
      <GetProductsForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        category={formValues.category}
        price={formValues.price}
        search={formValues.search}
        resetOnClick={resetOnClick}
      />
        <section className="products-section products-accessories full-block" id="on-sale">
          <div className="container">
            <h2  className="pageTitle">Discover Store</h2>
            <div className="grid-container a" id="clothes_grid">
              {productsToRender}
            </div>
          </div>
      </section>
    </div>
  );
}

export default Shoepage;