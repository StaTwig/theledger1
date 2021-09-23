import React from 'react';
import { setTracingShipments } from '../../../actions/shipmentActions';
import { useDispatch } from 'react-redux';
import alert from '../../../assets/icons/alert.png';
import location from '../../../assets/icons/CurrentLocationWhite.svg';
import previous from '../../../assets/icons/previous.png';
import next from '../../../assets/icons/next.png';
import user from '../../../assets/icons/user.svg';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../utils/dateHelper';
import Pagination from '@material-ui/lab/Pagination';
import './style.scss';

const Table = props => {
  const { ordrs, visible } = props;
  const orders = ordrs();
  const handlePageChange = (event, value) => {
    props.onPageChange(value)
  };
  orders.sort(function (a, b) {
    if (a.id > b.id) {
      return -1;
    }
    else {
      return 1;
    }
  })
  return (
    <div className="table pr-1">
      <div className="rTable">
        <div className="">
          {orders.length == 0 && <div className="rTableRow pt-2 pb-2 justify-content-center text-muted shadow-none">No records found</div>}
          {orders.map((order, index) => {
            let statusStyle = 'bg-primary';
            let status = order.poStatus;
            if (order.poStatus === 'CREATED') {
              status = visible == 'one' ? 'Sent' : 'Received';
            }
            else if (order.poStatus === 'ACCEPTED') {
              statusStyle = 'bg-success';
              status = 'Accepted';
            } else if (order.poStatus === 'REJECTED') {
              statusStyle = 'bg-secondary';
              status = 'Rejected';
            }
            else if (order.poStatus === 'TRANSIT&FULLYFULFILLED') {
              statusStyle = 'bg-info';
              status = 'Transit & Fullyfilled';
            }
            else if (order.poStatus === 'FULLYFULFILLED') {
              statusStyle = 'bg-info';
              status = 'Fullyfilled';
            }
            else if (order.poStatus === 'TRANSIT&PARTIALLYFULFILLED') {
              statusStyle = 'bg-warning';
              status = 'Transit & Partially Fulfilled';
            }
            else if (order.poStatus === 'PARTIALLYFULFILLED') {
              statusStyle = 'bg-warning';
              status = 'Partially Fulfilled';
            }

            const { customer, products, supplier, creatorOrganisation } = order;
            return (
              /* <div className="rTableRow pt-2 pb-2 shadow-none" key={index}> */
              <div className="col-12 p-3 mb-3 ml-1 rounded1 row bg-white shadow" key={index}>
                <div className="txt1 txtBlue" style={{ position: 'relative', left: "0px", width: "142px" }}> {/*rTableCell */}
                  <div className="userPic text-right d-flex flex-row">
                    <img src={user} width="27" height="18" alt="User" className="align-self-center" />
                    <b>
                      <div className="flex-column d-flex text-left" styl={{ marginLeft: '10px' }}>
                        <span className="text-primary bold">{visible == 'two' ? creatorOrganisation.name : supplier.organisation.name}</span>
                        <p className="address mb-0 text-primary">{visible == 'two' ? creatorOrganisation.id : supplier.organisation.id}</p>
                      </div>
                    </b>
                  </div>
                </div>
                <div className="txt1" style={{
                  position: 'relative', width: "164px",
                  textAlign: "center"
                }}>
                  {formatDate(order.creationDate)}
                </div>
                <div className="txt1" style={{
                  position: 'relative',
                  textAlign: 'center',
                  width: '165px'
                }}><p className="mb-0 bold address mb-0 text-muted">{order.id}</p></div>
                <div className="txt1" style={{
                  position: 'relative',
                  left: "0px",
                  width: '244px',
                  textAlign: 'center'
                }}><p className="mb-0 bold mb-0 address text-muted">{products[0]?.name + (products.length > 1 ? ' + ' + (products.length - 1) + ' more' : '')}</p></div>

                <div className="txt1 d-flex flex-column" style={{
                  position: "relative",
                  width: '202px'
                }}>
                  <span>{customer.warehouse.title}</span>
                  <span className="text-muted ">{customer.warehouse && customer.warehouse.warehouseAddress ? customer.warehouse.warehouseAddress.firstLine + " " + customer.warehouse.warehouseAddress.city : null}</span>
                </div>

                <div className="rTableCell" 
                  style={{position: "relative", left: '0px' }}><div className="status secondary-bg bg-info" 
                  style={{"width": "122px"}}>{status}</div>
                </div>

                <div className="rTableCell" style={{ position: 'relative', left: "5px" }} >
                  <Link to={`/vieworder/${order.id}`}
                    className="button">
                    View
                  </Link>
                </div>
              </div>

            )
          })}
          {orders?.length > 0 && (
            <div className="d-flex flex-row-reverse">
              <Pagination showFirstButton showLastButton color="primary" count={Math.ceil(props.count / 10)} onChange={handlePageChange} />
              <span className="mx-5 my-1 rounded text-dark" style={{ fontSize: "14px" }}>Total Records {props.count} </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
