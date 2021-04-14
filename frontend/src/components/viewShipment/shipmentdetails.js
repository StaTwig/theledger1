import React from 'react';
import traceDrop from '../../assets/icons/traceDrop.png';
import Down from '../../assets/icons/up.png';
import Verifiedpic from '../../assets/icons/Verifiedpic.png';
import './style.scss'

const ShipmentDetails = (props) => {
  console.log('Shipment Details');
  console.log(props.shipments)
    return (
    Object.keys(props.shipments).length === 0 ? <div className="row panel justify-content-between">N/A</div> :
        <div className=  { props.highLight ? "col panel commonpanle highlight" : "col panel commonpanle"}>
          <div className="d-flex flex-row">
          <ul className="mr-1 w-50 elemens">
          <h6 className="poheads potext mt-3 mb-3">From</h6>
            <li className="mb-1 text-secondary">Organisation Name</li>
           <li className="mb-1 text-secondary">Organisation Location</li>
           <h6 className="poheads potext mt-3 mb-3">To</h6>
           <li className="mb-1 text-secondary">Organisation Name</li>
           <li className="mb-1 text-secondary">Organisation Location</li>
           <h6 className="poheads potext mt-3 mb-3">Delivery Details:</h6>
           <li className="mb-1 text-secondary">Airway Bill</li>
           <li className="mb-1 text-secondary">Label Code</li>
           <li className="mb-1 text-secondary">Shipment Date</li>
           <li className="mb-1 text-secondary">Estimate Delivery Date</li>
          </ul>
           <ul className="elemens">
           <h6 className="poheads potext mt-3 mb-3 text-white">From</h6>
            <li  className="mb-1">{props.shipments.supplier.org.name}</li>
            <li  className="mb-1">{props.shipments.supplier.org.postalAddress.split(',')[0]},{props.shipments.supplier.org.postalAddress.split(',')[1]},{props.shipments.supplier.org.postalAddress.split(',')[2]}</li>
            <h6 className="poheads potext mt-3 mb-3  text-white">To </h6>
            <li  className="mb-1">{props.shipments.receiver.org.name}</li>
            <li  className="mb-1">{props.shipments.receiver.org.postalAddress.split(',')[0]},{props.shipments.receiver.org.postalAddress.split(',')[1]},{props.shipments.receiver.org.postalAddress.split(',')[2]}</li>
            <h6 className="poheads potext mt-3 mb-3 text-white">Delivery Details:</h6>
            <li  className="mb-1">{props.shipments.airWayBillNo}</li>
            <li  className="mb-1">{props.shipments.label.labelId}</li>
            <li  className="mb-1">{props.shipments.shippingDate.split('T')[0].split('-')[2]+"/"+props.shipments.shippingDate.split('T')[0].split('-')[1]+"/"+props.shipments.shippingDate.split('T')[0].split('-')[0]} </li>
            <li  className="mb-1">{props.shipments.expectedDeliveryDate.split('T')[0].split('-')[2]+"/"+props.shipments.expectedDeliveryDate.split('T')[0].split('-')[1]+"/"+props.shipments.expectedDeliveryDate.split('T')[0].split('-')[0]}</li>

           </ul>
           <div>

           </div>
          </div>
          {/* <div className="arrow float-right" onClick={() => {
           props.setMenuShip(!props.menuShip)
            props.setHighLight(false);
          } }><img src={props.menuShip?Down:traceDrop} alt="actions" height="7" width ="12"

          /></div> */}
          </div>

    )
}


export default ShipmentDetails;
