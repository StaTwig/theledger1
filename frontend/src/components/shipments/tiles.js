import React, { useEffect } from 'react';
import Sent from '../../assets/icons/Sent1.svg';
import Received from '../../assets/icons/Received1.svg';

import './style.scss';

const Tiles = props => {
  const outbounds = props.shipments?.outboundShipments;
  const inbounds = props.shipments?.inboundShipments;
  const outboundAlerts = outbounds?.shipmentAlerts;
  const inboundAlerts = inbounds?.shipmentAlerts;
  useEffect(() => {

  }, []);
  
  return (
    <div className="row mb-4">
      <div className="col">
        <div onClick={() => props.setData('one')} className="panel cursorP">
          <div className="picture recived-bg">
            <img src={Received} alt="truck" />
          </div>
          <div className="d-flex flex-column">
            <div className="title recived-text">Inbound Shipments</div>
            <div className="recived-text count">{inbounds?.length}</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div onClick={() => props.setData('two')} className="panel cursorP">
          <div className="picture sent-bg">
            <img src={Sent} alt="truck" />
          </div>
          <div className="d-flex flex-column">
            <div className="title sent-text ">Outbound Shipments</div>
            <div className="sent-text count">{outbounds?.length}</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div onClick={() => props.setData('one', true)} className="panel cursorP">
          <div className="picture inbound-alert-bg">
            
          </div>
          <div className="d-flex flex-column">
            <div className="title inbound-text">Inbound Alert</div>
            <div className="inbound-text count">{inboundAlerts?.length || 0}</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div onClick={() => props.setData('two', true)} className="panel cursorP">
          <div className="picture outbound-alert-bg">
            
          </div>
          <div className="d-flex flex-column">
            <div className="title outbound-text ">Outbound Alert</div>
            <div className="outbound-text count">{outboundAlerts?.length || 0}</div>
          </div>
        </div>
      </div>
     </div>
  );
};

export default Tiles;
