import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchData } from "../Store/Features/restaurantApi";
import { useEffect } from "react";
import RestaurantCard from "../Components/RestaurantCard";
import styled from "styled-components";

const RestaurantListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  align-items: center;
`;

function ResataurantList() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = useSelector((state) => state.httpsSlice);
  useEffect(() => {
    const url = `${location.pathname}restaurants`;
    dispatch(fetchData(url));
  }, [location.pathname]);

  return (
    <RestaurantListContainer>
      {data.map((item, index) => (
        <RestaurantCard item={item} key={index}></RestaurantCard>
      ))}
    </RestaurantListContainer>
  );
}

export default ResataurantList;
