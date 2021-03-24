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
      fetch('http://integrations.vaccineledger.com:8080/integrationmanagement/api/v1/roambee/allgpsforshipmentid/'+shipmentId)
      .then(res => res.json())
      .then(
        (result) => {
          setMapData(result);
        },
        (error) => {
          console.log(error);
        }
      )
      // const maps = await allShipmentLocsById(shipmentId);
      // console.log(maps);
      
      // if (maps.status == 200)
      //   setMapData(maps.data);
      // else
      //   setMapData([]);
      fetch('http://integrations.vaccineledger.com:8080/integrationmanagement/api/v1/roambee/lastteniotsamplesforshipmentid/'+shipmentId)
      .then(res => res.json())
      .then(
        (result) => {
          setTempData(result);
        },
        (error) => {
          console.log(error);
        }
      )
      // const locations = await allShipmentTempById(shipmentId);
      // if (locations.status == 200)
      //   setTempData(locations.data);
      // else
      //   setTempData([]);
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

