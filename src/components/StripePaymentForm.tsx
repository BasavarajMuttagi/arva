import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import useEcomStore, { Item } from "../store";
import apiClient from "../axios/apiClient";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const StripePaymentForm = () => {
  const { cart, selectedStoreId, selectedAddress } = useEcomStore();

  const getLineItems = () => {
    let lineItems: any[] = [];
    cart.forEach((eachItem: Item) => {
      const temp = {
        price_data: {
          currency: "inr",
          product_data: {
            name: eachItem.name,
            description: eachItem.description,
            images: [
              "https://t4.ftcdn.net/jpg/05/14/51/79/360_F_514517927_dXLi1DauUmrCaE3AkElsVgJ1jaYZMcSA.jpg",
            ],
            metadata: {
              id: eachItem.itemId,
            },
          },
          unit_amount: eachItem.price * 100,
        },
        quantity: eachItem.count,
      };
      lineItems.push(temp);
    });

    return lineItems;
  };

  const GetStripeSessionSecret = async () => {
    try {
      const body = {
        products: getLineItems(),
        shopId: selectedStoreId,
        address: selectedAddress,
      };

      const response = await apiClient.post(
        `${import.meta.env.VITE_BASE_URL}/stripe/stripe-session`,
        body,
      );
      return response.data;
    } catch (error) {}
  };

  const [clientSecret, setClientSecret] = useState("");
  const { isLoading, isError } = useQuery({
    queryKey: ["stripe-session"],
    queryFn: () =>
      GetStripeSessionSecret().then((data: any) => {
        setClientSecret(data.clientSecret);
        return data;
      }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: Something went wrong ,Refresh</div>;
  }
  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
};

export default StripePaymentForm;
