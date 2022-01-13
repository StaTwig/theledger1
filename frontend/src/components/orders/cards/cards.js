import React, { useState, useEffect } from "react";
import Sent from "../../../assets/icons/TotalOrdersReceived.png";
import Received from "../../../assets/icons/TotalOrdersSent.png";
import Rejected from "../../../assets/icons/TotalOrdersRejected.png";
import Current from "../../../assets/icons/TotalOrdersPending.png";
import { getOrderAnalytics } from "../../../actions/analyticsAction";
import "../style.scss";
import "./cards.scss";

function Cards(props) {
  const { t } = props;
  const [orderAnalytics, setOrderAnalytics] = useState({
    outboundPO: 0,
    inboundPO: 0,
    pendingOrders: 0,
    rejectedOrders: 0,
  });
  useEffect(() => {
    async function fetchData() {
      const result = await getOrderAnalytics();
      setOrderAnalytics(result.data.order);
    }
    fetchData();
  }, []);
  return (
    <div className="grid-tile-container">
      <div onClick={() => props.setData("one")} className="grid-tiles">
        <div className="picture recived-bg">
          <img src={Received} alt="truck" />
        </div>

        <div className="tile-content">
          <p className="recived-text font-weight-bold"> {t("total_orders_sent")}</p>
          <h1 className="count recived-text">{orderAnalytics?.outboundPO}</h1>
        </div>
      </div>

      <div onClick={() => props.setData("two")} className="grid-tiles">
        <div className="picture sent-bg">
          <img src={Sent} alt="truck" />
        </div>

        <div className="tile-content">
          <p className="recived-text font-weight-bold">{t("total_orders_received")}</p>
          <h1 className="count sent-text">{orderAnalytics?.inboundPO}</h1>
        </div>
      </div>

      <div onClick={() => props.setData("two", true)} className="grid-tiles">
        <div className="picture inbound-alert-bg">
          <img src={Current} alt="truck" />
        </div>

        <div className="tile-content">
          <p className="inbound-text font-weight-bold">{t("total_orders_pending")}</p>
          <h1 className="count inbound-text">
            {orderAnalytics?.pendingOrders}
          </h1>
        </div>
      </div>

      <div onClick={() => props.setData("one", true)} className="grid-tiles">
        <div className="picture outbound-alert-bg">
          <img src={Rejected} alt="truck" />
        </div>

        <div className="tile-content">
          <p className="outbound-text font-weight-bold">
            {t("total_orders_rejected")}
          </p>
          <h1 className="count outbound-text">
            {orderAnalytics?.rejectedOrders}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cards;
