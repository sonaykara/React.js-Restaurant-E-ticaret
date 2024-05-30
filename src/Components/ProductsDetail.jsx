import { useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import styled from "styled-components";
import ProductsCard from "./ProductsCard";
const DetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 50px;
  border: 1px solid #e0e0e0;
  width: 100%;
  height: 200px;
  padding: 3rem;
  margin-top: 70px;
`;

const İnfoWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
const İmgWrapper = styled.div`
  width: 200px;
`;
function RestaurantDetail({ item }) {
  const { products } = item;

  return (
    <DetailPageContainer>
      <Navbar>
        <İmgWrapper>
          <img src={item.photo}></img>
        </İmgWrapper>
        <div>
          <İnfoWrapper>
            {" "}
            <span>
              {item.minPrice} TL {item.priceText.substring(0, 3)}.
            </span>{" "}
            <FaRegClock /> <span>{item.estimatedDelivery} dak.</span>
          </İnfoWrapper>
          <İnfoWrapper>
            <h1>{item.name}</h1>
          </İnfoWrapper>
          <İnfoWrapper>
            {" "}
            <FaRegStar /> <span> {item.rating}</span> <span>Yorumları Gör</span>{" "}
          </İnfoWrapper>
        </div>
      </Navbar>

      <div style={{ borderBottom: " 1px solid #e0e0e0 ", fontSize : "3rem", textAlign : "center"}}>Products</div>
      <div>{item && <ProductsCard product={products}></ProductsCard>}</div>
    </DetailPageContainer>
  );
}

export default RestaurantDetail;
