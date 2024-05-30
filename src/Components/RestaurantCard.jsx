import styled from "styled-components";
import { FaRegStar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const RestaurantCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  gap: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
`;

const İtemName = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const EstimatedDelivery = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
`;
function RestaurantCard({ item }) {
  return (
    <RestaurantCardContainer>
      <div>
        <img src={item.photo}></img>
      </div>
      <İtemName>
        <h3>{item.name}</h3>
        <div>
          <FaRegStar />
          <span>{item.rating}</span>
        </div>
      </İtemName>
      <div>
        {item.minPrice} TL {item.priceText}
      </div>
      <EstimatedDelivery>
        <FaRegClock />
        <span>
          {item.estimatedDelivery} <span>{item.estimateDeliveryUnit}</span>
        </span>
      </EstimatedDelivery>
      <NavLink className="btn success" to={`restaurant/${item.id}`}>
        To Order
      </NavLink>
    </RestaurantCardContainer>
  );
}

export default RestaurantCard;
