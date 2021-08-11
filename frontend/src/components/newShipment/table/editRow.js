import React, { useState, useEffect } from 'react';
import Delete from '../../../assets/icons/Delete.png';
import DropdownButton from '../../../shared/dropdownButtonGroup';
import Select from 'react-select';
import {getProductList} from '../../../actions/productActions';
import './style.scss';
import Modal from "../../../shared/modal";
import CloseIcon from "../../../assets/icons/cross.svg";
import TotalInventoryAdded from '../../../assets/icons/TotalInventoryAddedcopy.svg';
import Add from '../../../assets/icons/add.svg';
import user from '../../../assets/icons/brand.svg';
import Quantity from '../../../assets/icons/Quantity.png';
import Product from '../../../assets/icons/Producttype.png';
import date from '../../../assets/icons/ShippingDate.svg';
import Batch from '../../../assets/icons/Batch.png';
import TableFilter from './tablefilter.js';

const EditRow = props => {
  const {
    prod,
    handleQuantityChange,
    handleLabelIdChange,
    index,
    onRemoveRow,
    enableDelete,
    category,
    handleCategoryChange,
    handleProductChange,
    handleBatchChange,
    products,
    check
  } = props;
  
  const headers = {
    coloumn1: 'Product Name',
    coloumn2: 'Manufacturer',
    coloumn3: 'Batch Number',
    coloumn4: 'Mfg Date',
    coloumn5: 'Exp Date',
    coloumn6: 'Quantity',

    img1: <img src={Product} width="15" height="15"/>,
    img2: <img src={user} width="15" height="15"/>,
    img3: <img src={Batch} width="15" height="15"/>,
    img4: <img src={date} width="15" height="15"/>,
    img5: <img src={date} width="15" height="15"/>,
    img6: <img src={Quantity} width="20" height="15"/>,
  };
  console.log(prod,"Edit rowt",index);
  const [productsList,setProductsList] = useState([]);
  const [quantityChecker,setQuantityChecker] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {

    async function fetchData() {
  
      const result111 = await getProductList();
      // console.log(result111);
      setProductsList(result111.message);
  
    }
  
    fetchData();
  }, []);

  const new_products = [];

  if(typeof(products)!="undefined" && typeof(productsList)!="undefined"){
  for(var i=0;i<products.length;i++)
  {
    // console.log(productsList);
    let check = false;
    for(var j=0;j<productsList.length;j++)
    {
      if(products[i].label===productsList[j].productName)
      {
        check = true;
        break;
      }
    }
    if(check)
    {
      new_products.push(products[i]);
    }
  }
}

var defaultQuantity  =  "Quantity";

const updateQuantity = () =>
{
  setQuantityChecker(0);
}
console.log("product Quantity is "+ prod.productQuantity);
if(check==="0" && quantityChecker===1 && typeof(prod)!="undefined" && typeof(prod.name!="undefined") && typeof(productsList)!="undefined")
  {
                     let qty;
                    for(var i=0;i<productsList.length;i++)
                    {
                      if(prod.name===productsList[i].productName)
                      {
                        console.log("Hi");
                        qty = String(productsList[i].quantity);
                        console.log(typeof(qty));
                        break;
                      }
                    }
                    if(i < productsList.length){
                     prod.productQuantity = qty;
                     handleQuantityChange(prod.productQuantity, index);
                    console.log("productQuantity is " + prod.productQuantity);
                    updateQuantity();
                    }
  }



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
    if( !regex.test(key) ) {
      e.returnValue = false;
      if(e.preventDefault) e.preventDefault();
    }
  }
const handleChange = (value) =>
{
    console.log(value);
}
//console.log("yyyy",prod);
// console.log(products);
// const handlee = () =>
// {
//   console.log("Hi");
//     const value = document.getElementById("checker").value;
//     console.log("value is " + value);
//     if(value)
//     {
//       this.props.checkAndTrace(true);
//     }
//     else{
//       this.props.checkAndTrace(false);
//     }
// };

  return (
    <div className="row ml-3 mr-1">
      <div className="trow row mr-1 col">
        <div className="col pl-4 tcell">
          <div className=" p-0">
            {/* <div className="profileIconRound recived-bg">OPV</div> */}

            <div className="d-flex flex-column">
              <div className="title recived-text">
                {/* <DropdownButton
                  name={prod.type ? prod.type : "Select Product Category"}
                  onSelect={item => { handleCategoryChange(index, item) }}
                  groups={category}
                /> */}
                { enableDelete ?
                <Select
                  className="no-border"
                  placeholder={<div className="select-placeholder-text">Select Product Category</div>} 
                  value={(prod.type==undefined || prod.id==undefined)?null:{value: prod.id, label: prod.type}}
                  defaultInputValue={prod.type}
                  onChange={(v) => {
                    handleCategoryChange(index, v.value,prod.batchNumber);
                    handleBatchChange(prod.batchNumber, index);
                  }
                }
                  options={category}
                />: prod.type
                }
              </div>
            </div>
</div>
</div>
<div className="Divider1"></div>
<div className="col tcell">
          <div className=" p-0">
            <div className="col tcell text-center justify-content-center pl-0">
              <div className="title recived-text">
              {/* {enableDelete ?
                <DropdownButton
                  //name={prod.name == '' ? "Select product" : prod.name}
                  name={prod.name ?  prod.name: "Select Product Name"}
                  onSelect={item => { handleProductChange(index, item) }}
                  groups={products}
                  // groups={products.filter(p => !p?.isSelected)}
                /> : prod.name
                } */}
                {enableDelete ?
                <Select
                className="no-border"
                placeholder= {<div className= "select-placeholder-text" > Product Name </div>} 
                value={(prod.id==undefined || prod.name==undefined || prod.name==="")?null:{value: prod.id, label: prod.name}}
                placeholder="Product Name"
                   defaultInputValue={prod.name}
                  onChange={(v) => {
                    handleProductChange(index, v);
                    handleBatchChange(prod.batchNumber, index);
                    setQuantityChecker(1);
                  }
                }
                  options={new_products}
                /> : prod.name
                }
              </div>
              
            </div>
          </div>
        </div>
        <div className="col tcell text-center justify-content-center p-2">{prod.manufacturer ? prod.manufacturer : <div className="select-placeholder-text">Manufacturer</div>}</div>
        
        <div className="col tcell text-center justify-content-center p-2">
          <div className="">
            <input
              className="form-control text-center"
              id="checker"
              placeholder="Quantity"
              onKeyPress={numbersOnly}
              value={prod.productQuantity}
              
              onChange={(e) => {
              
                handleQuantityChange(e.target.value, index);
                 console.log(e.target.value);
                  if(e.target.value==="0")
                  {
                    prod.productQuantity = "";
                  }
                }}
            />
          </div>
        </div>
        <div className="title recived-text align-self-center" style={{position:"relative",right:"40px"}}>
          {prod.unitofMeasure && prod.unitofMeasure.name  ? <div>{prod.unitofMeasure.name}</div>:
          <div className="placeholder_id">Unit</div>}
        </div>

        <div className="col tcell text-center justify-content-center p-2">
          <div className="">
            <input
              className="form-control text-center"
              id="checker"
              placeholder="Batch number"
              value={prod.batchNumber}
              onChange={(e) => {
                handleBatchChange(e.target.value, index);
                setQuantityChecker(1);
              }}
            />
          </div>
        </div>
        <div className="d-flex">
            <button type="button" class="btn btn-outline-primary mr-2 ml-2"
                style={{height:"30px",width:"60px"}}
                onClick={() => setShowModal(true)}>
                <div style={{position:"relative",fontSize:"12px",left:"-6px"}}>Fetch</div>
            </button>
            <div className="">
            {showModal && (
              <div>
              <Modal
                close={closeModal}
                title="FETCH SERIAL NUMBERS"
                size="modal-xl" //for other size's use `modal-lg, modal-md, modal-sm`
              >
              <div className="col tab" style={{width:"100%"}}>
              <div className="mb-2">
                  <TableFilter data={headers} fb="120%"/>
                </div>
              </div>
              <div className="rTable pt-3">
            <div>
               <div>
                <div className="rTableRow pt-3 pb-3">
                <input className="col txt1" type="checkbox" id="" name="fetchBillNo" style={{position:"relative",left:'2%'}}></input>
                <img src={user} width="27" height="18" alt="User"/>
                <div className="col txt">OPV</div>
                <div className="col txt1" style={{position:"relative",left:'0%'}} >Bharat Biotech</div>
                <div className="col txt1" style={{position:"relative",left:'0%'}} >BIOE13BCG1</div>
                <div className="col txt1" style={{position:"relative",left:'2%'}}>11/08/2021</div>
                <div className="col txt1" style={{position:"relative",left:'2%'}}>11/08/2021</div> 
                <div className="col txt1" style={{position:"relative",left:'1%'}}>500 EA</div> 
                </div>
             
              </div>
          </div>
        </div>
              <div className="d-flex flex-row-reverse p-3">
                <button type="submit" className="ml-3 btn btn-orange">
                 Next
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-outline-dark"
                >
                  CANCEL
                </button>
              </div>
              </Modal>
              </div>
            )}
            </div> 
      </div>    
    </div>
      {
        // enableDelete && props.product.length > 1 &&
       //   <div className="m-3 bg-light">
       //   <span className="del-pad shadow border-none rounded-circle ml-2 " onClick={() => onRemoveRow(index)}><img className=" cursorP  p-1" height="30" src={Delete} /></span>
       //   </div>
       }

       {props.product.length > 1 && (
         <div className="m-2 pl-3 pt-1" style={{position:"relative", left:"10px"}}>
           <span
             className="del-pad shadow border-none rounded-circle mr-1"
             onClick={() => props.onRemoveRow(index)}
           >
             <img className="cursorP p-1" height="30" src={Delete} />
           </span>
         </div>
       )}
      </div>
    // <div className="rTableRow"
    //   <div className="rTableCell">
    //     <div className="form-group">
    //       <input
    //         className="form-field"
    //         placeholder="Product ID"
    //         value={product.productID}
    //         disabled={true}
    //       />
    //     </div>
    //   </div>
    //   <div className="rTableCell">
    //     <div className="form-group">
    //       <input
    //         className="form-field"
    //         placeholder="Product Name"
    //         value={product.productName}
    //         disabled={true}
    //       />
    //     </div>
    //   </div>
    //   <div className="rTableCell">
    //     <div className="form-group">
    //       <input
    //         className="form-field"
    //         placeholder="Manufacturer"
    //         value={product.manufacturer}
    //         disabled={true}
    //       />
    //     </div>
    //   </div>
    //   <div className="rTableCell">
    //     <div className="form-group">
    //       <input
    //         className="form-field"
    //         placeholder="Quantity"
    //         value={product.productQuantity}
    //         onChange={e => handleQuantityChange(e.target.value, index)}
    //       />
    //     </div>
    //   </div>
    //   <div className="rTableCell">
    //     <div className="form-group">
    //       <input
    //         className="form-field"
    //         placeholder="Label Id"
    //         value={product.labelId}
    //         onChange={e => handleLabelIdChange(e.target.value, index)}

    //       />
    //     </div>
    //   </div>
    // </div>


  );
};

export default EditRow;

