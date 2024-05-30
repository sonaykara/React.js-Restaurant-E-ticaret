import { Routes, Route, BrowserRouter } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import ResataurantList from "./Pages/ResataurantList";
import RestaurantDetail from "./Pages/RestaurantDetail";
import ProductDetail from "./Components/ProductDetail";
import BasketDetail from "./Components/BasketDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout></DefaultLayout>}>
          <Route path="" element={<ResataurantList></ResataurantList>}></Route>
          <Route
            path="restaurant/:id"
            element={<RestaurantDetail></RestaurantDetail>}
          ></Route>
          <Route
            path="restaurant/:id/detail/:id"
            element={<ProductDetail></ProductDetail>}
          ></Route>
          <Route path="basket" element={<BasketDetail></BasketDetail>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
