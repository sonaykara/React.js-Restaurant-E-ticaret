import { IoBasketOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  box-shadow: #f4f4f4;
  border-bottom: 1px solid #e0e0e0;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  position: relative;
`;
const BasketNumber = styled.span`
  position: absolute;
  top: 0;
  right: -8px;
  border: 1px solid #333333;
  background-color: red;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 5px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
function DefaultLayout() {
  const { products } = useSelector((state) => state.basketSlice);
  return (
    <div>
      <Navbar>
        <NavLink to={"/"}>E-Commerce</NavLink>
        <Ul>
          <li>Log İn</li>
          <li>Sing Up</li>
          <li>
            <NavLink to={"/basket"}>
              <IoBasketOutline size={32} />
            </NavLink>
            <BasketNumber>{products.length}</BasketNumber>
          </li>
        </Ul>
      </Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default DefaultLayout;
