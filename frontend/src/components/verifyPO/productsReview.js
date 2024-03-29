import React from 'react';
import './style.scss';

const ProductsTableReview = props => {

  const {
    tableHeader,
    products
  } = props;
  const product = Object.keys(products[0])[0].split('-')[0];
  const manufacturer = Object.keys(products[0])[0].split('-')[1];
  const quantity = products[0][`${product}-${manufacturer}`];
  return (
    <div className="table productTable">
      <div className="rTable">
        <div className="rTableHeading">
          {tableHeader &&
            tableHeader.map((item, index) => {
              return (
                <div key={index} className="rTableHead">
                  {item}
                </div>
              );
            })}
        </div>
        <div>
          <div className="rTableRow">
            <div className="rTableCell">
              <div className="square-box" />
              <input
              disabled
               type="text"
               className="form-control"
               placeholder="Select Supplier"
               value={product}
              />
            </div>
            <div className="rTableCell">
              <input
              disabled
               type="text"
               className="form-control"
               placeholder="Select Supplier"
               value={manufacturer}
              />
            </div>
            <div className="rTableCell">
              <div className="form-group">
                <input
                disabled
                  type="number"
                  className="form-control"
                  placeholder="Enter Qunatity"
                  value={quantity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTableReview;
