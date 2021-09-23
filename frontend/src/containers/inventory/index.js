import React, { useEffect, useState } from "react";
import Inventory from '../../components/inventory';
import Header from '../../shared/header';
import Sidebar from '../../shared/sidebarMenu';
import { useDispatch, useSelector } from "react-redux";
import { getInventories, resetInventories, getInventoryDetails, getTransactionFilterList } from "../../actions/inventoryActions";

const InventoryContainer = props => {
  const dispatch = useDispatch();

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(5);
  const [inventoryFilterData, setInventoryFilterData] = useState([]);
  const [inventoryList, setInventoryList] = useState([]);

  const [productNameData, setProductNameData] = useState([]);
  const [productNameReplicaData, setProductNameReplicaData] = useState([]);
  const [showDropDownForProductName, setShowDropDownForProductName] = useState(false);

  const [categoryData, setCategoryData] = useState([]);
  const [categoryReplicaData, setCategoryReplicaData] = useState([]);
  const [showDropDownForCategory, setShowDropDownForCategory] = useState(false);

  const [queryKey, setQueryKey] = useState("");
  const [queryValue, setQueryValue] = useState("");


  // const [loadMore, setLoadMore] = useState(true);

  const inventories = useSelector(state => {
    return state.inventories;
  });
  const inventoryDetails = useSelector(state => {
    return state.inventoryDetails;
  });

  const inventoriesCount = useSelector(state => {
    return state.inventoriesCount;
  });



  return (
    <div className="container-fluid p-0">
      <Header {...props} />
      <div className="d-flex">
        <Sidebar {...props} />
        <div className="content">
          <Inventory
            skip={skip}
            inventoriesCount={inventoriesCount}
            inventoryDetails={inventories}
            inventoryFilterData={inventoryFilterData}
            {...props}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryContainer;
