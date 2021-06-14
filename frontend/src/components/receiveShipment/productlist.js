import React, { useState } from 'react';
import traceDrop from '../../assets/icons/traceDrop.png';
import Down from '../../assets/icons/up.png';
import Modal from "../../shared/modal";
import FailPopup from "./failPopup";
import './style.scss'

const ProductList = (props) => {
    const [deliveredProduct, setDeliveredProduct] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [error, setError] = useState(false);
    let deliveredProductList = [];
    const closeModalFail = () => {
        setError(false);
    };
    return (
        Object.keys(props.shipments).length === 0? <div className="row panel justify-content-between">N/A</div> :
            <div>
                {props.shipments.products.map((product,index) =>(
                 <div className={props.productHighLight ? "col panel commonpanle highlight " : "col panel commonpanle "}>
                    <div className="d-flex flex-row " >
                        <ul className="mr-2 w-75 elemens">
                            <li className="mb-3 productheading" style={{fontSize:'3vh',color:"#0093E9", fontWeight:700}}>{product.productName}</li>
                            <li className="mb-2 text-secondary">Product Name</li>
                            <li className="mb-2 text-secondary">Manufacturer</li>
                            <li className="mb-3 text-secondary">Quantity Sent</li>
                            <li className="mb-3 text-secondary">Quantity Received</li>
                            <li className="mb-2 text-secondary">Label ID</li>
                        </ul>
                        <ul className="elemens w-75">
                        <li className="mb-3 text-secondary" style={{padding:'0',textAlign:'right'}}>
                            {isVisible ? 
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => 
                                    {
                                        deliveredProductList.push(deliveredProduct);
                                        props.setDelivered(deliveredProductList);
                                        props.setIndex(index);
                                        if(deliveredProduct)
                                        setIsVisible(false);
                                    }}
                                style={{width:'7vw',height:'3vh', fontSize:'2vh',paddingTop:"0"}}
                                >
                                Save
                            </button>
                            : <span> &nbsp;</span>}
                            </li>                        
                            <li className="mb-2 text-secondary">{product.productName}</li>
                            <li className="mb-2 text-secondary">{product.manufacturer}</li>
                            <li className="mb-2 text-secondary">{product.productQuantity}</li>
                            <li className="text-secondary" style={{paddingTop:'0.2vh'}}>
                                {
                                    product['productQuantityDelivered'] ?
                                        product['productQuantityDelivered'] :
                                        <input
                                            style={{ height: '3vh', width: '10vw', fontSize: '12px', marginTop: '0', marginBottom: '0' }} 
                                            className="form-control"
                                            value={deliveredProduct}
                                            maxLength={product.productQuantity.length}
                                            onChange={e => {
                                                setDeliveredProduct(e.target.value);
                                                if (e.target.value <= product.productQuantity) {
                                                    setError(false);
                                                    props.onQuantityChange(index, e.target.value);
                                                }
                                                else
                                                    setError(true);
                                                setIsVisible(true);
                                            }
                                            }
                                        />
                                }
                            </li>
                            <li className="mb-2 text-secondary">{props.shipments.label.labelId}</li>
                    </ul>
                        <div></div>
                        </div>
                    </div>
                    ))}
                {/* <div className="arrow float-right" onClick={() => {
                    props.setMenuProduct(!props.menuProduct)
                    props.setProductHighLight(false);
                }}><img src={props.menuProduct?Down:traceDrop} alt="actions" height="7" width="12"
                    /></div> */}
                {error && (
                    <Modal
                        close={() => closeModalFail()}
                        size="modal-sm" //for other size's use `modal-lg, modal-md, modal-sm`
                    >
                        <FailPopup
                            message="Quantity cannot be greater than sent"
                            onHide={closeModalFail} //FailurePopUp
                        />
                    </Modal>
                )} 
            </div>

    )
}


export default ProductList;
