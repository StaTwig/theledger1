import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';

const style = {
    width: '90%',
    height: '80%'
  }

  /*var points = [
    { lat: 42.02, lng: -77.01 },
    { lat: 42.03, lng: -77.02 },
    { lat: 41.03, lng: -77.04 },
    { lat: 42.05, lng: -77.02 }
]
var bounds = new this.props.google.maps.LatLngBounds();
for (var i = 0; i < points.length; i++) {
  bounds.extend(points[i]);
} */
 
export class MapContainer extends Component {
  render() {
    var points = [];
    const { data } = this.props;
    data.forEach(s => {
      // s?.shipmentUpdates?.filter(s => s.status == 'RECEIVED').forEach(rs => {
        if (s?.receiver?.warehouse?.location?.latitude && s?.receiver?.warehouse?.location?.longitude && s?.receiver?.warehouse?.location?.latitude != "0" && s?.receiver?.warehouse?.location?.longitude != "0")
          points.push({ lat: parseFloat(s?.receiver?.warehouse?.location?.latitude), lng: parseFloat(s?.receiver?.warehouse?.location?.longitude) });
      // })
    });
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) 
      bounds.extend(points[i]);
    
    return (
      <Map google={this.props.google} zoom={4}
        style = {style} 
        initialCenter={{
            lat: points.length ? points[0].lat : 42.02,
            lng: points.length ? points[0].lng : -77.01
        }}
        bounds={bounds}
      >
        <Polygon
          paths={points}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35} />
        {this.props.data.map((row, index) => {
          // return row?.shipmentUpdates.map((r, i) => {
            return (
                row?.receiver?.warehouse?.location?.latitude && row?.receiver?.warehouse?.location?.longitude &&
                  <Marker
                    title={row.receiver.warehouse.title}
                    name={row.receiver.warehouse.warehouseAddress.city}
                  position={{ lat: row.receiver.warehouse.location.latitude, lng: row.receiver.warehouse.location.longitude }} />
            )
          // })
        })}
        {this.props.data.map((row, index) => {
          // return row?.shipmentUpdates.map((r, i) => {
            return (
                row?.supplier?.warehouse?.location?.latitude && row?.supplier?.warehouse?.location?.longitude &&
                  <Marker
                    title={row.supplier.warehouse.title}
                    name={row.supplier.warehouse.warehouseAddress.city}
                  position={{ lat: row.supplier.warehouse.location.latitude, lng: row.supplier.warehouse.location.longitude }} />
            )
          // })
        })}
      </Map>
    );
  }
}
// { 
//                 row?.supplier?.warehouse?.location?.latitude && row?.supplier?.warehouse?.location?.longitude &&
//                   <Marker
//                     title={row.supplier.warehouse.title}
//                     name={row.supplier.warehouse.warehouseAddress.city}
//                     position={{ lat: row.supplier.warehouse.location.latitude, lng: row.supplier.warehouse.location.longitude }} />} 

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBLwFrIrQx_0UUAIaUwt6wfItNMIIvXJ78")
})(MapContainer)
