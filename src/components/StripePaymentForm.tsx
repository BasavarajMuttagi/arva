import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import useEcomStore, { Item } from "../store";
import apiClient, { cloudFrontBaseUrl } from "../axios/apiClient";
import Loading from "./Loading";
import Error from "./Error";
import toast from "react-hot-toast";
import { lineItemType } from "../types";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const StripePaymentForm = () => {
  const { cart, selectedStoreId, selectedAddress } = useEcomStore();

  const getLineItems = () => {
    const lineItems: lineItemType[] = [];
    cart.forEach((eachItem: Item) => {
      const temp = {
        price_data: {
          currency: "inr",
          product_data: {
            name: eachItem.name,
            description: eachItem.description,
            images: [`${cloudFrontBaseUrl}${eachItem.imageUrl}`],
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
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const [clientSecret, setClientSecret] = useState("");
  const { isLoading, isError } = useQuery({
    queryKey: ["stripe-session"],
    queryFn: () =>
      GetStripeSessionSecret().then((data: { clientSecret: string }) => {
        setClientSecret(data.clientSecret);
        return data;
      }),
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
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
