const UserModel = require('../models/UserModel');
const { body, validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');
const multer = require('multer');
const moveFile = require('move-file');
const XLSX = require('xlsx');
//helper file to prepare responses.
const apiResponse = require('../helpers/apiResponse');
const utility = require('../helpers/utility');
const jwt = require('jsonwebtoken');
const { constants } = require('../helpers/constants');
const auth = require('../middlewares/jwt');
const InventoryModel = require('../models/InventoryModel');
const ShipmentModel = require('../models/ShipmentModel');

const checkToken = require('../middlewares/middleware').checkToken;
const checkPermissions = require('../middlewares/rbac_middleware')
  .checkPermissions;
const axios = require('axios');
const dotenv = require('dotenv').config();

const fs = require('fs');
const blockchain_service_url = process.env.URL;
const stream_name = process.env.SHIP_STREAM;

const init = require('../logging/init');
const logger = init.getLog();

exports.track = [
  auth,
  async (req, res) => {
    try {
      const { trackingNumber } = req.query;
      logger.log(
        'info',
        '<<<<< ShipmentService < ShipmentController < trackNumber : tracking , querying by transaction hash',
      );
	
      if (trackingNumber.includes("12"))
	    {
	    console.log("09pro")
	    InventoryModel.findOne({ serialNumber: trackingNumber }).then(async user => {
        let txnIDs = user.transactionIds;
        let items_array = [];
        await utility.asyncForEach(txnIDs, async txnId => {
          const response = await axios.get(
              `${blockchain_service_url}/queryDataByRawTxHash?txid=${txnId}`,
          );
          const items = response.data.items;
          items_array.push(items);
        });
        logger.log(
          'info',
          '<<<<< ShipmentService < ShipmentController < trackProduct : tracked product, queried data by transaction hash',
        );
        res.json({ data: items_array });
      });
    }
	    else
	    {
	    console.log("shipmen")
	  ShipmentModel.findOne({ shipmentId: trackingNumber }).then(async user => {
        let txnIDs = user.txnIds;
        let items_array = [];
        await utility.asyncForEach(txnIDs, async txnId => {
          const response = await axios.get(
            `${blockchain_service_url}/queryDataByTxHash?stream=${stream_name}&txid=${txnId}`,
          );
		console.log("res",response)
          const items = response.data.items;
          items_array.push(items);
        });
        logger.log(
          'info',
          '<<<<< ShipmentService < ShipmentController < trackShipment : tracked shipment, queried data by transaction hash',
        );
        res.json({ data: items_array });
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

