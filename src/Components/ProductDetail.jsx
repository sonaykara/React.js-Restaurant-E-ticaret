import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../Store/Features/restaurantApi";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { addToBasket } from "../Store/Features/basketSlice";

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  width: 100%;
  height: 100vh;
  border: 1px solid #f4f4f4;
`;
const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
`;
const ItemPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
`;
const ProductImgArea = styled.div`
  width: 500px;
  height: 500px;
`;

const ItemPrice = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function RestaurantDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const locationId = id;
  const { data } = useSelector((state) => state.httpsSlice);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const url = `/restaurants`;
    dispatch(fetchData(url));
  }, [dispatch]);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const addBasket = (product) => {
    const payload = {
      locationId: product.id,
      title: product.title,
      price: product.price,
      photo: product.photo,
      desc: product.desc,
      quantity,
    };

    dispatch(addToBasket(payload));
    setQuantity(0);
  };

  return (
    <div>
      {data.map((item, index) => {
        const itemData = item.products;
        return (
          <div key={index}>
            {itemData.map(
              (product) =>
                product.id === locationId && (
                  <ProductDetailContainer key={product.id}>
                    <ProductImgArea>
                      <img src={product.photo} alt="" />
                    </ProductImgArea>
                    <ProductInfoContainer>
                      <div>{product.title}</div>
                      <div>{product.desc}</div>
                      <ItemPriceContainer>
                        {product.price}
                        <ItemPrice>
                          <FaCirclePlus onClick={increment} size={20} />{" "}
                          {quantity}
                          <FaCircleMinus onClick={decrement} size={20} />
                        </ItemPrice>
                        <button
                          className="btn primary"
                          onClick={() => addBasket(product)}
                        >
                          Sepete Ekle
                        </button>
                      </ItemPriceContainer>
                    </ProductInfoContainer>
                  </ProductDetailContainer>
                )
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantDetail;
