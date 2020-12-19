const { body, validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
//helper file to prepare responses.
const apiResponse = require("../helpers/apiResponse");
const auth = require("../middlewares/jwt");

const InventoryModel = require('../models/InventoryModel');
const ShipmentModel = require('../models/ShipmentModel');
const POModel = require('../models/POModel');

const checkToken = require('../middlewares/middleware').checkToken;
const checkPermissions = require('../middlewares/rbac_middleware').checkPermissions;
const axios = require('axios');

const fs = require('fs');
const stream_name = process.env.SHIP_STREAM;
const blockchain_service_url = process.env.URL;

const init = require('../logging/init');
const logger = init.getLog();


const UserModel = require('../models/UserModel');
const utility = require('../helpers/utility');
const jwt = require('jsonwebtoken');
const { constants } = require('../helpers/constants');

exports.trackStats = [
  auth,
  (req, res) => {
    try {
      overviewObject = {
        TotalTransactions: 532,
        TotalShipments: 132,
        TotalBlocks: 132,
        TotalUsers: 132,
        TotalUnitsShipped: 132,
        user: req.user.email
      };
      logger.log('info', '<<<<< TrackTraceService < TrackController < trackStats : successfully sending response with data ');
      return apiResponse.successResponseWithData(
        res,
        "Data sent",
        overviewObject
      );
    } catch (err) {
      //throw error in json response with status 500.
      logger.log('error', '<<<<< TrackTraceService < TrackController < trackStats : error (catch block) ');
      return apiResponse.ErrorResponse(res, err);
    }
  }
];

exports.fetchTransactions = [
  (req, res) => {
    try {
      transactionObject = [
        {
          txnID: "8frd8n439nf308fb",
          from: "7g34983nf89f3ufh938",
          to: "7sbdvbiwuvigjwb823rii",
          Date: "29/03/2014",
          vaccine: "Polio",
          user: req.user.email
        },
        {
          txnID: "d8g93mf7g93h7f9",
          from: "7g34983nf89f3ufh938f",
          to: "7sbdvbiwuvigjwb823rii",
          Date: "01/08/1997",
          vaccine: "MMR",
          user: req.user.email
        }
      ];
      logger.log('info', '<<<<< TrackTraceService < TrackController < fetchTransactions : successfully sending response with data ');
      return apiResponse.successResponseWithData(
        res,
        "Transactions Sent",
        transactionObject
      );
    } catch (err) {
      logger.log('error', '<<<<< TrackTraceService < TrackController < fetchTransactions : error (catch block) ');
      return apiResponse.ErrorResponse(res, err);
    }
  }
];

exports.fetchShipmentDetails = [
  (req, res) => {
    try {
      shipmentObject = {
        TransactionID: "Jhsivugfw73y39r2y7y37y29d297g",
        ShipmentID: "SN324876DFHJ32",
        ClientName: "UNICEF",
        TotalQuantity: "60,000",
        user: req.user.email
      };
      logger.log('info', '<<<<< TrackTraceService < TrackController < fetchShipmentDetails : successfully sending response with data ');
      return apiResponse.successResponseWithData(
        res,
        "Data sent",
        shipmentObject
      );
    } catch (err) {
      logger.log('error', '<<<<< TrackTraceService < TrackController < fetchShipmentDetails : error (catch block) ');
      return apiResponse.ErrorResponse(res, err);
    }
  }
];

exports.fetchLocation = [
  (req, res) => {
    try {
      locationObject = {
        Name: "Hyderabad",
        GPS: "17.54537,67.37463298",
        user: req.user.email
      };
      logger.log('info', '<<<<< TrackTraceService < TrackController < fetchLocation : successfully sending response with data ');
      return apiResponse.successResponseWithData(
        res,
        "Data sent",
        locationObject
      );
    } catch (err) {
      logger.log('error', '<<<<< TrackTraceService < TrackController < fetchLocation : error (catch block) ');
      return apiResponse.ErrorResponse(res, err);
    }
  }
];

exports.fetchTemperature = [
  (req, res) => {
    try {
      temperatureObject = [
        {
          "0100": "3",
          "0200": "4",
          "0300": "1",
          "0400": "2",
          "0500": "2",
          "0600": "3",
          user: req.user.email
        }
      ];
      logger.log('info', '<<<<< TrackTraceService < TrackController < fetchTemperature : successfully sending response with data ');
      return apiResponse.successResponseWithData(
        res,
        "Data sent",
        temperatureObject
      );
    } catch (err) {
      logger.log('error', '<<<<< TrackTraceService < TrackController < fetchTemperature : error (catch block) ');
      return apiResponse.ErrorResponse(res, err);
    }
  }
];

exports.fetchGoodsByID = [
  (req, res) => {
    try {
      goodsObject = [
        {
          Product: "OPV",
          Quantity: "20000",
          Manafacturer: "ABC Pharma Ltd",
          MfDate: "29/06/2019",
          ExpDate: "04/01/2023",
          user: req.user.email
        },
        {
          Product: "Hib",
          Quantity: "20000",
          Manafacturer: "ABC Pharma Ltd",
          MfDate: "29/06/2019",
          ExpDate: "04/01/2023"
        },
        {
          Product: "HEPB",
          Quantity: "20000",
          Manafacturer: "ABC Pharma Ltd",
          MfDate: "29/06/2019",
          ExpDate: "04/01/2023"
        }
      ];
      logger.log('info', '<<<<< TrackTraceService < TrackController < fetchGoodsByID : successfully sending response with data ');
      return apiResponse.successResponseWithData(res, "Data sent", goodsObject);
    } catch (err) {
      logger.log('error', '<<<<< TrackTraceService < TrackController < fetchGoodsByID : error (catch block) ');
      return apiResponse.ErrorResponse(res, err);
    }
  }
];

exports.fetchTracking = [
  (req, res) => {
    try {
      trackingObject = [
        { 
          user: req.user.email,
          Location: "Hyderabad, India",
          Date: "01/02/2020",
          Info: "Added to inventory by the manufacturer",
          Wallet: "0x5cdeca3cf356ad83B813fC2c8eA483AAC76A736e"
        },
        {
          Location: "Hyderabad Airport",
          Date: "15/02/2020",
          Info: "Delivered",
          Wallet: ""
        },
        {
          Location: "Kenya Airport",
          Date: "",
          Info: "In Transit",
          Wallet: "0x5cdeca3cf356ad83B813fC2c8eA483AAC76A736e"
        }
      ];
      logger.log('info', '<<<<< TrackTraceService < TrackController < fetchTracking : successfully sending response with data ');
      return apiResponse.successResponseWithData(
        res,
        "Data sent",
        trackingObject
      );
    } catch (err) {
      logger.log('error', '<<<<< TrackTraceService < TrackController < fetchTracking : error (catch block) ');
      return apiResponse.ErrorResponse(res, err);
    }
  }
];


exports.fetchTemp = [
  (req, res) => {
    try {
      var date_obj = new Date();

      var hours = date_obj.getHours();
      var minutes = date_obj.getMinutes();
      var seconds = date_obj.getSeconds();

      const max = 4.99; //req.body.max;
      const min = -9.97; //req.body.min;
      
      var tempData = {}
    
      for(var i=0; i<5; i++){
          
        seconds = seconds  + 5;

        if(seconds >= 60) { 
          seconds -= 60;
          minutes += 1;
        } 
        if(minutes >= 60) {
          minutes -= 60;
          hours += 1;
        }
        if(hours >= 24) hours -= 24;

        var time = hours + ":" + minutes + ":" + seconds;
        var temp = (Math.random() * (max - min) + min).toFixed(2);

        tempData[time] = temp;
      }
      
      // console.log(tempData);
      logger.log('info', '<<<<< TrackTraceService < TrackController < fetchTemp : successfully sending response with data ');
      return apiResponse.successResponseWithData(
        res,
        "Time-Temperature Data sent",
        tempData
      );
    } catch (err) {
      logger.log('error', '<<<<< TrackTraceService < TrackController < fetchTemp : error (catch block) ');
      return apiResponse.ErrorResponse(res, err);
    }
  }
];

exports.fetchConstants = [
  (req, res) => {
    try {
      var constantObject = {
        poFields: ['sendPOTo','vendorId','unicefPo','vendorName','poNum','locationId','shippedFrom','toLocation',
        'materialId','product','manufacturer','quantity'],
        materialIds: ['S359190','S359191','S359192','S359193','S359194', 'S359195', 'S359196', 'S359197'],
        locations: ['Niger','Guinea','Madagascar','Congo','Mali','Ethiopia','Republic of Cameroon','Chad'],
        locationIds: ['5577','5588','5597','5543','5581','5623','5548','5573'],
        poNums: ['45163183','45163206','45163239','45163283','45163284','45163285','45163287','45163289'],
        unicefPos: ['45163183','45163206','45163239','45163283','45163284','45163285','45163287','45163289'],
        vendorIds: ['1900000363','1900000501','1900008579','1900000363','1900007249','1900007249','1900000462','1900000363'],
        tableHeader: ['Material ID', 'Product Name', 'Manufacturer', 'Quantity']
      }
      logger.log('info', '<<<<< TrackTraceService < TrackController < fetchConstants : successfully sending response with data ');
      return apiResponse.successResponseWithData(
        res,
        "All Constants sent",
        constantObject
      );    
    } catch (err) {
      logger.log('error', '<<<<< TrackTraceService < TrackController < fetchConstants : error (catch block) ');
      return apiResponse.ErrorResponse(res, err);
    }
  }
];

exports.track = [
  auth,
  async (req, res) => {
    try {
      const { trackingNumber } = req.query;
      logger.log(
        'info',
        '<<<<< ShipmentService < ShipmentController < trackNumber : tracking , querying by transaction hash',
      );

    if (trackingNumber.includes("PO")) {
    var type = "PoId";
    POModel.findOne({
        orderID: trackingNumber
    }).then(async user => {
        let txnId = user.txnId;
        let shipmentIDs = user.shipmentIds;
        let items_array = [];
        let shipment_array = [];
        const response = await axios.get(
            `${blockchain_service_url}/queryDataByTxHash?stream=test_stream_order&txid=${txnId}`,
        );
        const items = response.data.items;
        items_array.push(JSON.parse(items));
        await utility.asyncForEach(shipmentIDs, async shipmentId => {
            shipment_array.push(shipmentId);
        });
        logger.log(
            'info',
            '<<<<< ShipmentService < ShipmentController < trackShipment : tracked PO, queried data by transaction hash',
        );
        res.json({
            POTxn: items_array,
            shipments: shipment_array,
            type: type
        });
    });
  } else if (trackingNumber.includes("SHP")) {
    var type = "shipmentId";
    ShipmentModel.findOne({
        shipmentId: trackingNumber
    }).then(async user => {
        let txnIDs = user.txnIds;
        let items_array = [];
        await utility.asyncForEach(txnIDs, async txnId => {
            const response = await axios.get(
                `${blockchain_service_url}/queryDataByTxHash?stream=${stream_name}&txid=${txnId}`,
            );
            const items = response.data.items;
            items_array.push(JSON.parse(items));
        });
        logger.log(
            'info',
            '<<<<< ShipmentService < ShipmentController < trackShipment : tracked shipment, queried data by transaction hash',
        );
        res.json({
            data: items_array,
            type: type
        });
    });
  } else {
	var type = "serialNumber";
  InventoryModel.findOne({
        serialNumber: trackingNumber
    }).then(async user => {
        let txnIDs = user.transactionIds;
        let items_array = [];
        await utility.asyncForEach(txnIDs, async txnId => {
            const response = await axios.get(
                `${blockchain_service_url}/queryDataByRawTxHash?txid=${txnId}`,
            );
            const items = response.data.items;
            items_array.push(JSON.parse(items));
        });
        logger.log(
            'info',
            '<<<<< ShipmentService < ShipmentController < trackProduct : tracked product, queried data by transaction hash',
        );
        res.json({
            data: items_array,
            type: type
        });
    });
}
    } catch (err) {
      logger.log(
        'error',
        '<<<<< ShipmentService < ShipmentController < trackProduct : error (catch block)',
      );
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

