import StripePaymentForm from "../components/StripePaymentForm";
import UserLayout from "../layouts/UserLayout";

const Payment = () => {
  return (
    <UserLayout>
      <StripePaymentForm />
    </UserLayout>
  );
};

export default Payment;
