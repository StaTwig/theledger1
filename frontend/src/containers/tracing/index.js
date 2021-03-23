import React, { useState,useEffect } from "react";
import Tracing from '../../components/tracing';
import Header from '../../shared/header';
import Sidebar from '../../shared/sidebarMenu';
import {useDispatch, useSelector} from "react-redux";
import {trackProduct} from "../../actions/shipmentActions";
import {allShipmentLocsById, allShipmentTempById} from "../../actions/traceActions";

const TracingContainer = props => {
  //const dispatch = useDispatch();
  const[trackData, setTrackData] = useState({});
  const[mapData, setMapData] = useState([]);
  const[tempData, setTempData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let shipmentId = props.match.params.id;
      const result = await trackProduct(shipmentId);
      if (result.status == 200)
        setTrackData(result.data);
      else
        setTrackData({});
      const maps = await allShipmentLocsById(shipmentId);
      if (maps.status == 200)
        setMapData(maps.data);
      else
        setMapData([]);
      const locations = await allShipmentTempById(shipmentId);
      if (locations.status == 200)
        setTempData(locations.data);
      else
        setTempData([]);
    }
    fetchData();
  },[]);

  return (
    <div className="container-fluid p-0">
      <Header {...props} />
      <div className="d-flex">
        <Sidebar {...props} />
        <div className="content">
          <Tracing mapData={mapData} tempData={tempData} trackData={trackData} {...props}/>
        </div>
      </div>
    </div>
  );
};

export default TracingContainer;

