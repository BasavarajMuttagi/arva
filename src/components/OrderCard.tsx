import { OrderData } from "../types";

const OrderCard = (order: OrderData) => {
  return (
    <div className="h-fit w-full rounded p-2 text-sm font-medium text-slate-500 shadow">
      <div className="flex items-center space-x-2">
        <div className="text-lg font-bold text-deep-lagoon-blue">
          {order.address.title}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="font-semibold text-slate-700">Shop : </div>
        <div>{order.shopId.name}</div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="font-semibold text-slate-700">shop Address :</div>
        <div>{order.shopId.address}</div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="font-semibold text-slate-700">Items :</div>
        <div>
          <ul className="w-full">
            {order.items.map((eachItem) => (
              <li className="flex items-center justify-between space-x-4">
                <div>{eachItem.price_data.product_data.name}</div>
                <div>₹{eachItem.price_data.unit_amount / 100}</div>
                <div>
                  {(eachItem.quantity * eachItem.price_data.unit_amount) / 100}
                </div>
              </li>
            ))}
            <li className="border-b-2"></li>
            <li>
              Total - ₹
              {order.items.reduce(
                (prev, current) =>
                  prev +
                  (current.quantity * current.price_data.unit_amount) / 100,
                0,
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
