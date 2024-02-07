import React, { useEffect } from "react";
import "./CheckoutPage.scss";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import { useDispatch } from "react-redux";
import { handleClose } from "../../features/cartHandler/cartHandler";
import { getStoredCart } from "../../utilities/localStorage";
import { useGetSelectedProductMutation } from "../../features/product/productApi";

const CheckoutPage = () => {
  const dispatch = useDispatch();

  const findProducts = getStoredCart() || {};
  const keys = Object.keys(findProducts);

  // get multiple product
  const [getSelectedProduct, { data, isLoading, isError, isSuccess }] =
    useGetSelectedProductMutation();

  useEffect(() => {
    getSelectedProduct(keys);
  }, [getSelectedProduct]);

  useEffect(() => {
    dispatch(handleClose());
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <div className="checkoutPage">
      <div className="container">
        {
          !isLoading && <div className="checkoutCart">
          <h1>Checkout</h1>
          <CheckoutForm data={data}></CheckoutForm>
        </div>
        }
        {isLoading && "Loading..."}
        {!isLoading && (
              <div>
                <CheckoutItem data={data}></CheckoutItem>
              </div>
            )}
      </div>
    </div>
  );
};

export default CheckoutPage;
