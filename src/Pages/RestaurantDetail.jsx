import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchData } from "../Store/Features/restaurantApi";
import { useEffect } from "react";
import ProductsDetail from "../Components/ProductsDetail";

function RestaurantDetail() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const locationId = id;
  const { data } = useSelector((state) => state.httpsSlice);

  useEffect(() => {
    const url = `/restaurants`;
    dispatch(fetchData(url));
  }, [location.pathname]);

  return (
    <div>
      {data.map((item) =>
        item.id === locationId ? (
          <ProductsDetail key={item.id} item={item} />
        ) : null
      )}
    </div>
  );
}

export default RestaurantDetail;
