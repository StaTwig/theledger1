import React from 'react';
import Delete from '../../../assets/icons/Delete.png';
import DropdownButton from '../../../shared/dropdownButtonGroup';
import './style.scss';

const EditRow = props => {
  const {
    prod,
    handleQuantityChange,
    index,
    onRemoveRow,
    category,
    handleProductChange,
    products,
    handleCategoryChange
  } = props;

  const numbersOnly = (e) => {
    // Handle paste
    if (e.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      // Handle key press
      var key = e.keyCode || e.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]/;
    if (!regex.test(key)) {
      e.returnValue = false;
      if (e.preventDefault) e.preventDefault();
    }
  }

  return (
    <div className="row ml-3">
      <div class="trow row text- col">
        <div class="col pl-4 tcell p-1">
          <div class=" p-0">
            <div class="d-flex flex-column">
              <div class="title recived-text">
                <DropdownButton
                  name={prod.type ? prod.type : "Select Product Category"}
                  onSelect={item => { handleCategoryChange(index, item) }}
                  groups={category}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div class="mr-3"></div>
        <div class="col tcell text-center justify-content-center p-2">
          <div class=" p-0">
            <div class="d-flex pt-1 flex-row justify-content-between">
           
              <div class="title col-6 recived-text"> 
              
                <DropdownButton
                
                  name={prod.name ? prod.name : "Product Name"}
                  onSelect={item => { handleProductChange(index, item) }}
                  groups={products}
                />
              </div>
              
              <div class="title recived-text">{prod.id}</div>
              
            </div>
          </div>
        </div>
        
        <div class="col tcell text-center justify-content-center p-2" >{prod.manufacturer}&nbsp;
         </div>
        <div class="col tcell text-center justify-content-center p-2">
          <div className="">
            <input
              className="form-control text-center"
              placeholder="Quantity"
              onKeyPress={numbersOnly}
              value={prod.productQuantity}
              onChange={e => handleQuantityChange(e.target.value, index)}
            />
          </div>
        </div>
      </div>
      {props.product.length > 0 &&
        < div className=" m-3 bg-light">
            <span onClick={() => onRemoveRow(index)}><img className="border-none cursorP shadow p-2 ml-2 rounded-circle" height="50" border-radius="none" src={Delete} /></span>
            
          </div>
      }
    </div>
  );
};

export default EditRow;


