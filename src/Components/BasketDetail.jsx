import { useSelector, useDispatch } from "react-redux";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import styled from "styled-components";
import { useState } from "react";
import {
  removeItemBasket,
  updateStateProductQuantity,
} from "../Store/Features/basketSlice";
const ItemPrice = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const BasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 100vh;
`;
const BasketContainerItems = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  border: 1px solid #e0e0e0;
  padding: 20px;
`;
const BasketContainerItemsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  border: 1px solid #e0e0e0;
  padding: 20px;
`;
const ImgWrapper = styled.div`
  width: 400px;
`;

const BasketInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border: 1px solid #e0e0e0;
  width: 100%;
  font-size: 10rem;
`;

function BasketDetail() {
  const { products } = useSelector((state) => state.basketSlice);
  const [quantities, setQuantities] = useState(
    products.map((product) => product.quantity)
  );
  const dispatch = useDispatch();
  function increment(index) {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
    const id = products[index].locationId;
    const payload = {
      id,
      quantity: newQuantities[index],
    };
    dispatch(updateStateProductQuantity(payload));
  }

  function decrement(index) {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
      const id = products[index].locationId;
      const payload = {
        id,
        quantity: newQuantities[index],
      };
      dispatch(updateStateProductQuantity(payload));
    }
  }

  function deleteItem(index) {
    const locationId = products[index].locationId;
    dispatch(removeItemBasket(locationId));
  }

  return (
    <BasketContainer>
      {products.map((product, index) => {
        return (
          <BasketContainerItems key={index}>
            <ImgWrapper>
              <img src={product.photo} alt="" />
            </ImgWrapper>
            <BasketContainerItemsInfo>
              <h1>{product.title}</h1>
              <div>{product.desc}</div>
              <div>
                <ItemPrice>
                  <FaCirclePlus onClick={() => increment(index)} size={20} />
                  {quantities[index]}
                  <FaCircleMinus onClick={() => decrement(index)} size={20} />
                  <button
                    className="btn sm danger"
                    onClick={() => deleteItem(index)}
                  >
                    Delete
                  </button>
                </ItemPrice>
              </div>
            </BasketContainerItemsInfo>
          </BasketContainerItems>
        );
      })}
      {products.length === 0 && <BasketInfo>Your basket is empty</BasketInfo>}
    </BasketContainer>
  );
}

export default BasketDetail;
