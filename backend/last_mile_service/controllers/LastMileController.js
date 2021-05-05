const { body, validationResult, sanitizeBody } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
require("dotenv").config();
const auth = require("../middlewares/jwt");
const checkToken = require("../middlewares/middleware").checkToken;
const LastMileModel = require("../models/LastMileModel");
const WarehouseModel = require("../models/WarehouseModel");
const EmployeeModel = require('../models/EmployeeModel');
const init = require("../logging/init");
const logger = init.getLog();
async function connectDB() {
  var MONGODB_URL = process.env.MONGODB_URL || config.MONGODB_URL;
  var mongoose = require("mongoose");
  mongoose
    .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      //don't show the log when it is test
      if (process.env.NODE_ENV !== "test") {
        console.log("connected to db");
        // console.log("Connected to %s", MONGODB_URL);
        // console.log("App is running ... \n");
        // console.log("Press CTRL + C to stop the process. \n");
      }
    })
    .catch((err) => {
      console.error("App starting error:", err.message);
      process.exit(1);
    });
  var db = mongoose.connection;
  return db;
}

exports.GetEOLInfoBySerialNumber = [
  async (req, res) => {
    try {
      logger.log(
        "info",
        "<<<<< LastMileService < LastMileController < getEOLInfoBySerialNumber : token verified successfullly, querying data by publisher"
      );
      console.log(req.query);
      let serialNumber = req.query.serial_number;
      await LastMileModel.findOne({
        "eol_id": serialNumber,
      })
        .then((eolResult) => {
          console.log("eolResult is ====> ", eolResult);
          return apiResponse.successResponseWithData(
            res,
            "EOL Info by serial Number",
            eolResult
          );
        })
        .catch((err) => {
          return apiResponse.ErrorResponse(res, err);
        });
    } catch (err) {
      logger.log(
        "error",
        "<<<<< LastMileService < LastMileController < getEOLInfoBySerialNumber : error (catch block)"
      );
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

exports.GetEOLInfoByProductId = [
  async (req, res) => {
    try {
      logger.log(
        "info",
        "<<<<< LastMileService < LastMileController < GetEOLInfoByProductId : token verified successfullly, querying data by publisher"
      );
      console.log(req.query);
      let productID = req.query.id;
      await LastMileModel.findOne({
        "productAdministeredInfo.productId": productID,
      })
        .then((eolResult) => {
          console.log("eolResult is ====> ", eolResult);
          return apiResponse.successResponseWithData(
            res,
            "EOL Info by product id",
            eolResult
          );
        })
        .catch((err) => {
          return apiResponse.ErrorResponse(res, err);
        });
    } catch (err) {
      logger.log(
        "error",
        "<<<<< LastMileService < LastMileController < GetEOLInfoByProductId : error (catch block)"
      );
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

exports.GetEOLInfoByIdentityId = [
  async (req, res) => {
    try {
      logger.log(
        "info",
        "<<<<< LastMileService < LastMileController < GetEOLInfoByIdentityId : token verified successfullly, querying data by publisher"
      );
      console.log(req.query);
      let ID = req.query.id;
      await LastMileModel.findOne({
        "eol_info.idProof.idNo": ID,
      })
        .then((eolResult) => {
          console.log("eolResult is ====> ", eolResult);
          return apiResponse.successResponseWithData(
            res,
            "EOL Info by Identity id",
            eolResult
          );
        })
        .catch((err) => {
          return apiResponse.ErrorResponse(res, err);
        });
    } catch (err) {
      logger.log(
        "error",
        "<<<<< LastMileService < LastMileController < GetEOLInfoByIdentityId : error (catch block)"
      );
      return apiResponse.ErrorResponse(res, err);
    }
  },
];
exports.GetEOLInfoByPlaceAdministered = [
  async (req, res) => {
    try {
      logger.log(
        "info",
        "<<<<< LastMileService < LastMileController < GetEOLInfoByPlaceAdministered : token verified successfullly, querying data by publisher"
      );
      console.log(req.query);
      let place = req.query.place;
      await LastMileModel.findOne({
        "productAdministeredInfo.locationInfo.warehouseId": place,
      })
        .then((eolResult) => {
          console.log("eolResult is ====> ", eolResult);
          return apiResponse.successResponseWithData(
            res,
            "EOL Info by place Administered",
            eolResult
          );
        })
        .catch((err) => {
          return apiResponse.ErrorResponse(res, err);
        });
    } catch (err) {
      logger.log(
        "error",
        "<<<<< LastMileService < LastMileController < GetEOLInfoByPlaceAdministered : error (catch block)"
      );
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

exports.GetEOLListByDateWindow = [
  async (req, res) => {
    try {
      logger.log(
        "info",
        "<<<<< LastMileService < LastMileController < GetEOLListByDateWindow : token verified successfullly, querying data by publisher"
      );
      // console.log(req.query)
      let { startDate, endDate } = req.query;
      console.log(startDate, endDate);
      await LastMileModel.findOne({
        "productAdministeredInfo.administeredData": {
          $gte: `${startDate}T00:00:00Z`,
          $lt: `${endDate}T23:59:59Z`,
        },
      })
        .then((eolResult) => {
          console.log("eolResult is ====> ", eolResult);
          return apiResponse.successResponseWithData(
            res,
            "EOL Info by date window",
            eolResult
          );
        })
        .catch((err) => {
          return apiResponse.ErrorResponse(res, err);
        });
    } catch (err) {
      logger.log(
        "error",
        "<<<<< LastMileService < LastMileController < GetEOLListByDateWindow : error (catch block)"
      );
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

exports.AddNewEOL = [
  async (req, res) => {
    try {
      logger.log(
        "info",
        "<<<<< LastMileService < LastMileController < GetEOLListByDateWindow : token verified successfullly, querying data by publisher"
      );
      console.log(req.body);
      let lastmile = new LastMileModel(req.body);
      let connection = await connectDB();
      lastmile.save(function (err) {
        if (err) {
          console.log(connection.close());
          console.log(err);
          return apiResponse.ErrorResponse(res, err);
        } else {
          console.log("data stored succesfully");
          console.log(connection.close());
          return apiResponse.successResponseWithData(
            res,
            "Data Stored succesfully",
            req.body
          );
        }
      });
    } catch (err) {
      logger.log(
        "error",
        "<<<<< LastMileService < LastMileController < GetEOLListByDateWindow : error (catch block)"
      );
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

exports.UpdateExistingEOLByID = [
  async (req, res) => {
    try {
      logger.log(
        "info",
        "<<<<< LastMileService < LastMileController < GetEOLListByDateWindow : token verified successfullly, querying data by publisher"
      );
      console.log(req.body);
      LastMileModel.updateOne(
        { eol_id: req.body.eol_id },
        req.body,
        function (err, affected, resp) {
          console.log(resp, affected, err);
          if (err) {
            console.log(err);
            return apiResponse.ErrorResponse(res, err);
          } else {
            console.log("data updated succesfully");
            return apiResponse.successResponseWithData(
              res,
              "Data updated succesfully",
              req.body
            );
          }
        }
      );
    } catch (err) {
      logger.log(
        "error",
        "<<<<< LastMileService < LastMileController < GetEOLListByDateWindow : error (catch block)"
      );
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

exports.GetEOLInfoBySelection = [
  async (req, res) => {

    try {
      if (!req.query.country && !req.query.state && !req.query.district && !req.query.zipcode && req.query.region) {
        const { region } = req.query;
        const wareHouseListInRegion = await WarehouseModel.find({ "region.name": region }).select({ "id": 1, "title": 1 })
        let warehouseIds = [];
        if (wareHouseListInRegion.length > 0) {
          warehouseIds = wareHouseListInRegion.map(async (warehouseData) => {
            return warehouseData.id
          });
        }
        Promise.all(warehouseIds).then(function (warehouseIdList) {
          let warehouseDataArray = warehouseIdList.map(async (warehouseData) => {
            let eolRecordsInWarehouse = await LastMileModel.find({
              "productAdministeredInfo.locationInfo.warehouseId": warehouseData
            });
            return eolRecordsInWarehouse;
          });
          Promise.all(warehouseDataArray).then(function (eolrec) {
            let eolRecordList = [].concat.apply([], eolrec);
            return apiResponse.successResponseWithData(
              res,
              "EOL Records list for selected Region",
              eolRecordList
            );
          });
        });
      } else if (!req.query.state && !req.query.district && !req.query.zipcode && req.query.country) {
        const { country } = req.query;
        const eolRecordsbyCountry = await LastMileModel.find({ "eol_info.contact_address.country": country })
        let eolRecordsbyCountryArray = [];
        if (eolRecordsbyCountry.length > 0) {
          eolRecordsbyCountryArray = eolRecordsbyCountry.map(async (countryData) => {
            return countryData
          });
        }
        Promise.all(eolRecordsbyCountryArray).then(function (eolrec) {
          let eolRecordList = [].concat.apply([], eolrec);
          return apiResponse.successResponseWithData(
            res,
            "EOL Records list for selected Country",
            eolRecordList
          );
        });
      } else if (!req.query.district && !req.query.zipcode && req.query.country && req.query.state) {
        const { country, state } = req.query;
        const eolRecordsbyState = await LastMileModel.find({ "eol_info.contact_address.country": country, "eol_info.contact_address.state": state})
        let eolRecordsbyStateArray = [];
        if (eolRecordsbyState.length > 0) {
          eolRecordsbyStateArray = eolRecordsbyState.map(async (stateData) => {
            return stateData
          });
        }
        Promise.all(eolRecordsbyStateArray).then(function (eolrec) {
          let eolRecordList = [].concat.apply([], eolrec);
          return apiResponse.successResponseWithData(
            res,
            "EOL Records list for selected State",
            eolRecordList
          );
        });
      } else if (!req.query.zipcode && req.query.country && req.query.state && req.query.district) {
        const { country, state, district } = req.query;
        const eolRecordsbyDistrict = await LastMileModel.find({ "eol_info.contact_address.country": country, "eol_info.contact_address.state": state, "eol_info.contact_address.district": district })
        let eolRecordsbyDisctrictArray = [];
        if (eolRecordsbyDistrict.length > 0) {
          eolRecordsbyDisctrictArray = eolRecordsbyDistrict.map(async (districtData) => {
            return districtData
          });
        }
        Promise.all(eolRecordsbyDisctrictArray).then(function (eolrec) {
          let eolRecordList = [].concat.apply([], eolrec);
          return apiResponse.successResponseWithData(
            res,
            "EOL Records list for selected District",
            eolRecordList
          );
        });
      } else if (req.query.zipcode) {
        const { zipcode } = req.query;
        const eolRecordsbyZipcode = await LastMileModel.find({ "eol_info.contact_address.zipcode": zipcode})
        let eolRecordsbyZipcodeArray = [];
        if (eolRecordsbyZipcode.length > 0) {
          eolRecordsbyZipcodeArray = eolRecordsbyZipcode.map(async (zipcodeData) => {
            return zipcodeData
          });
        }
        Promise.all(eolRecordsbyZipcodeArray).then(function (eolrec) {
          let eolRecordList = [].concat.apply([], eolrec);
          return apiResponse.successResponseWithData(
            res,
            "EOL Records list for selected Zipcode",
            eolRecordList
          );
        });
      } else if (req.query.productId) {
        const { productId } = req.query;
        const eolRecordsbyProductId = await LastMileModel.find({ "productAdministeredInfo.productId": productId})
        let eolRecordsbyProductIdArray = [];
        if (eolRecordsbyProductId.length > 0) {
          eolRecordsbyProductIdArray = eolRecordsbyProductId.map(async (productIdData) => {
            return productIdData
          });
        }
        Promise.all(eolRecordsbyProductIdArray).then(function (eolrec) {
          let eolRecordList = [].concat.apply([], eolrec);
          return apiResponse.successResponseWithData(
            res,
            "EOL Records list for selected ProductId",
            eolRecordList
          );
        });
      } else if (!req.query.country && !req.query.state && !req.query.district && !req.query.zipcode && req.query.region && req.query.productId) {
          const { region, productId } = req.query;
          const wareHouseListInRegion = await WarehouseModel.find({ "region.name": region }).select({ "id": 1, "title": 1 })
          let warehouseIds = [];
          if (wareHouseListInRegion.length > 0) {
            warehouseIds = wareHouseListInRegion.map(async (warehouseData) => {
              return warehouseData.id
            });
          }
          Promise.all(warehouseIds).then(function (warehouseIdList) {
            let warehouseDataArray = warehouseIdList.map(async (warehouseData) => {
              let eolRecordsInWarehouse = await LastMileModel.find({
                "productAdministeredInfo.locationInfo.warehouseId": warehouseData, "productAdministeredInfo.productId": productId
              });
              return eolRecordsInWarehouse;
            });
            Promise.all(warehouseDataArray).then(function (eolrec) {
              let eolRecordList = [].concat.apply([], eolrec);
              return apiResponse.successResponseWithData(
                res,
                "EOL Records list for selected Region with productId",
                eolRecordList
              );
            });
          });
      } else if (!req.query.state && !req.query.district && !req.query.zipcode && req.query.country && req.query.productId ) {
        const { country, productId } = req.query;
        const eolRecordsbyCountryWithProductId = await LastMileModel.find({ "eol_info.contact_address.country": country, "productAdministeredInfo.productId": productId })
        let eolRecordsbyCountryWithProductIdArray = [];
        if (eolRecordsbyCountryWithProductId.length > 0) {
          eolRecordsbyCountryWithProductIdArray = eolRecordsbyCountryWithProductId.map(async (countryData) => {
            return countryData
          });
        }
        Promise.all(eolRecordsbyCountryWithProductIdArray).then(function (eolrec) {
          let eolRecordList = [].concat.apply([], eolrec);
          return apiResponse.successResponseWithData(
            res,
            "EOL Records list for selected Country with Product Id" ,
            eolRecordList
          );
        });
      } else if (!req.query.district && !req.query.zipcode && req.query.country && req.query.state && req.query.productId) {
        const { country, state, productId } = req.query;
        const eolRecordsbyStateWithProductId = await LastMileModel.find({ "eol_info.contact_address.country": country, "eol_info.contact_address.state": state, "productAdministeredInfo.productId": productId})
        let eolRecordsbyStateWithProductIdArray = [];
        if (eolRecordsbyStateWithProductId.length > 0) {
          eolRecordsbyStateWithProductIdArray = eolRecordsbyStateWithProductId.map(async (stateData) => {
            return stateData
          });
        }
        Promise.all(eolRecordsbyStateWithProductIdArray).then(function (eolrec) {
          let eolRecordList = [].concat.apply([], eolrec);
          return apiResponse.successResponseWithData(
            res,
            "EOL Records list for selected State with Product Id",
            eolRecordList
          );
        });
      } else if (req.query.zipcode && req.query.productId ) {
        const { zipcode, productId } = req.query;
        const eolRecordsbyZipcodeWithProductId = await LastMileModel.find({ "eol_info.contact_address.zipcode": zipcode, "productAdministeredInfo.productId": productId})
        let eolRecordsbyZipcodeWithProductIdArray = [];
        if (eolRecordsbyZipcodeWithProductId.length > 0) {
          eolRecordsbyZipcodeWithProductIdArray = eolRecordsbyZipcodeWithProductId.map(async (zipcodeData) => {
            return zipcodeData
          });
        }
        Promise.all(eolRecordsbyZipcodeWithProductIdArray).then(function (eolrec) {
          let eolRecordList = [].concat.apply([], eolrec);
          return apiResponse.successResponseWithData(
            res,
            "EOL Records list for selected Zipcode with Product Id",
            eolRecordList
          );
        });
      } else if (!req.query.zipcode && req.query.country && req.query.state && req.query.district && req.query.productId) {
        const { country, state, district, productId } = req.query;
        const eolRecordsbyDistrictWithProductId = await LastMileModel.find({ "eol_info.contact_address.country": country, "eol_info.contact_address.state": state, "eol_info.contact_address.district": district, "productAdministeredInfo.productId": productId })
        let eolRecordsbyDisctrictWithProductIdArray = [];
        if (eolRecordsbyDistrictWithProductId.length > 0) {
          eolRecordsbyDisctrictWithProductIdArray = eolRecordsbyDistrictWithProductId.map(async (districtData) => {
            return districtData
          });
        }
        Promise.all(eolRecordsbyDisctrictWithProductIdArray).then(function (eolrec) {
          let eolRecordList = [].concat.apply([], eolrec);
          return apiResponse.successResponseWithData(
            res,
            "EOL Records list for selected District with Porduct Id",
            eolRecordList
          );
        });
      } else {
        return apiResponse.ErrorResponse(
          res,
          "No records are available for this selection"
        );
      }
    } catch (err) {
      logger.log(
        "error",
        "<<<<< LastMileService < LastMileController < getEOLInfoBySelection : error (catch block)"
      );
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

 exports.sendOtp = [
  body('emailId')
    .isLength({ min: 10 })
    .trim()
    .withMessage('Email/Mobile must be specified.')
  //   .isEmail()
  // .withMessage('Email must be a valid email address.')
  ,
  sanitizeBody('emailId').escape(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        logger.log(
          'info',
          '<<<<< LastMileService < LastMileController < login : Validation Error while login',
        );
        return apiResponse.validationErrorWithData(
          res,
          'Validation Error.',
          errors.array(),
        );
      } else {
        const emailId = req.body.emailId.toLowerCase();
        let user;
        let phone = '';
        if (emailId.indexOf('@') > -1)
          user = await EmployeeModel.findOne({ emailId });
        else {
          phone = emailId.indexOf('+91') === 0 ? emailId : '+91' + emailId;
          user = await EmployeeModel.findOne({ phoneNumber: phone });
        }
        if (user) {
          if (user.accountStatus === 'ACTIVE') {
            logger.log(
              'info',
              '<<<<< LastMileService < LastMileController < login : user is active',
            );
            let otp = utility.randomNumber(4);
            if (user.emailId === process.env.EMAIL_APPSTORE)
              otp = process.env.OTP_APPSTORE;

            await EmployeeModel.updateOne({ id: user.id }, { otp });

            axios.post(process.env.OTP_ENDPOINT, {
              subject: "OTP request for adding/updating Beneficiary into Vaccine Ledger",
              email: user.emailId,
              phone: user.phoneNumber ? user.phoneNumber : '',
              otp: otp.toString(),
              message: "Please Send the OTP",
              source: process.env.SOURCE
            })
              .then((response) => {
                if (response.status === 200) {
                  return apiResponse.successResponseWithData(
                    res,
                    'OTP Sent Success.',
                    { email: user.emailId }
                  );
                }
                else {
                  return apiResponse.ErrorResponse(res, response.statusText);
                }
              }, (error) => {
                console.log(error);
              });
          } else {
            logger.log(
              'warn',
              '<<<<< LastMileService < LastMileController < login : account is not approved.',
            );
            return apiResponse.unauthorizedResponse(
              res,
              'Account is not Approved. Please contact admin.',
            );
          }
        } else {
          return apiResponse.ErrorResponse(res, 'User not registered');
        }
      }
    } catch (err) {
      logger.log(
        'error',
        '<<<<< LastMileService < LastMileController < login : error in login (catch block)',
      );
      return apiResponse.ErrorResponse(res, 'Email already registered. Check Email for verifying the account');
    }
  },
];

exports.verifyOtp = [
  body('emailId')
    .isLength({ min: 1 })
    .trim()
    .withMessage('Email/Mobile must be specified.')
  , body('otp')
    .isLength({ min: 1 })
    .trim()
    .withMessage('OTP must be specified.'),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        logger.log(
          'error',
          '<<<<< LastMileService < LastMileController < verifyConfirm : validation error',
        );
        return apiResponse.validationErrorWithData(
          res,
          'Validation Error.',
          errors.array(),
        );
      } else {
        const emailId = req.body.emailId.toLowerCase();
        var query = { emailId };
        if (emailId.indexOf('@') === -1) {
          let phone = emailId.indexOf('+91') === 0 ? emailId : '+91' + emailId;
          query = { phoneNumber: phone };
        }

        const user = await EmployeeModel.findOne(query);
        if (user && user.otp == req.body.otp) {
          await EmployeeModel.update(query, { otp: null });
          let userData = {
            id: user.id,
            firstName: user.firstName,
            emailId: user.emailId,
            role: user.role,
            warehouseId: user.warehouseId,
            organisationId: user.organisationId,
          };
          //Prepare JWT token for authentication
          const jwtPayload = userData;
          const jwtData = {
            expiresIn: process.env.JWT_TIMEOUT_DURATION,
          };
          const secret = process.env.JWT_SECRET;
          //Generated JWT token with Payload and secret.
          userData.token = jwt.sign(jwtPayload, secret, jwtData);
          logger.log(
            'info',
            '<<<<< LastMileService < LastMileController < login : user login success',
          );
          return apiResponse.successResponseWithData(res, 'Login Success', userData);
        } else {
          return apiResponse.ErrorResponse(res, `Otp doesn't match`);
        }
      }
    } catch (err) {
      logger.log(
        'error',
        '<<<<< LastMileService < LastMileController < verifyConfirm : Error (catch block)',
      );
      return apiResponse.ErrorResponse(res, err);
    }
  },
];