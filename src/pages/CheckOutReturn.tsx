import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Error from "../components/Error";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailure from "./PaymentFailure";

function CheckoutReturn() {
  const location = useLocation();
  const sessionId = new URLSearchParams(location.search).get("session_id");

  const fetchSessionStatus = async (sessionId: string) => {
    const response = await axios.get(`/session-status?session_id=${sessionId}`);
    return response;
  };

  const {
    data: SessionStatus,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["CheckOutReturn", location],
    queryFn: async () => await fetchSessionStatus(sessionId!),
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  if (SessionStatus?.data.status == "complete") return <PaymentSuccess />;

  return <PaymentFailure />;
}

export default CheckoutReturn;
