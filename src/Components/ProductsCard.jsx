import { NavLink } from "react-router-dom";

import styled from "styled-components";

const ImgWrapper = styled.div`
  width: 200px;
`;

const UrunCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;
const UrunItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 700px;
  gap: 150px;
  border: 1px solid #e0e0e0;
  padding: 2rem;
`;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
function ProductsCard({ product }) {
  return (
    <UrunCardWrapper>
      {product &&
        product.map((item, index) => (
          <UrunItemWrapper key={index}>
            <div>
              <div>{item.name}</div>
              <p>{item.desc}</p>
              <ItemPrice style={{ marginTop: "50px" }}>
                {item.price} TL
                <div></div>
              </ItemPrice>
            </div>
            <ImgWrapper>
              <img src={item.photo} alt={item.name}></img>
              <NavLink className="btn info" to={`detail/${item.id}`}>
                Detail
              </NavLink>
            </ImgWrapper>
          </UrunItemWrapper>
        ))}
    </UrunCardWrapper>
  );
}

export default ProductsCard;
