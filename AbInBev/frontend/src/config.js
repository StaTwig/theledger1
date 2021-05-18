export const TEST_SERVER_URL = 'http://test.vaccineledger.com:9001';
export const PROD_SERVER_URL = 'http://api.vaccineledger.com:9001';
export const ABINBEVPROD_SERVER_URL = 'http://abinbev.statledger.io:9001';
export const ABINBEVTEST_SERVER_URL = 'http://test.abinbev.statledger.io:9001';
export const DEMO_SERVER_URL = 'http://vaccineledger.com:9001';
export const LOCAL_SERVER_URL_USER = 'http://localhost:3001';
export const LOCAL_SERVER_URL_SHIPPINGORDER = 'http://localhost:3013';
export const LOCAL_SERVER_URL_SHIPMENT = 'http://localhost:3002';
export const LOCAL_SERVER_URL_INVENTORY = 'http://localhost:3007';
export const LOCAL_SERVER_URL_PO = 'http://localhost:3012';
export const LOCAL_SERVER_URL_TRACKANDTRACE = 'http://localhost:3005';
export const LOCAL_SERVER_URL_NOTIFICATION = 'http://localhost:3006';
export const LOCAL_SERVER_URL_ANALYTICS = 'http://localhost:3015';
export const LOCAL_SERVER_URL_AANALYTICS = 'http://localhost:3069';
export const LOCAL_SERVER_URL_PRODUCTS = 'http://localhost:3010';
export const STABLE_SERVER_URL_USER = 'http://54.164.66.73:3001';
export const STABLE_SERVER_URL_SHIPMENT = 'http://54.164.66.73:3002';
export const STABLE_SERVER_URL_PO = 'http://54.164.66.73:3012';
export const STABLE_SERVER_URL_INVENTORY = 'http://54.164.66.73:3007';
export const STABLE_SERVER_URL_TRACKANDTRACE = 'http://54.164.66.73:3005';
export const STABLE_SERVER_URL_NOTIFICATION = 'http://54.164.66.73:3006';
export const STABLE_SERVER_URL_PRODUCTS = 'http://54.164.66.73:3010';
export const DEV_SERVER_URL = 'http://127.0.0.1:9001';


/*Shipping order URL needs to be updated for stable server*/

export function config() {
  const confs = {
    ainbevprod: {
      loginUrl: `${ABINBEVPROD_SERVER_URL}/usermanagement/api/auth/login`,
      sendOtpUrl: `${ABINBEVPROD_SERVER_URL}/usermanagement/api/auth/sendOtp`,
      registerUrl: `${ABINBEVPROD_SERVER_URL}/usermanagement/api/auth/register`,
      checkUserUrl: `${ABINBEVPROD_SERVER_URL}/usermanagement/api/auth/check`,
      verifyOtpUrl: `${ABINBEVPROD_SERVER_URL}/usermanagement/api/auth/verifyOtp`,
      userInfoUrl: `${ABINBEVPROD_SERVER_URL}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${ABINBEVPROD_SERVER_URL}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${ABINBEVPROD_SERVER_URL}/usermanagement/api/auth/updateProfile`,
      upload: `${ABINBEVPROD_SERVER_URL}/usermanagement/api/auth/upload`,
      getAnalyticsUrl: `${ABINBEVPROD_SERVER_URL}/analyticsmanagement/api/analytics/getAnalytics`,
      getOverviewAnalyticsUrl: `${ABINBEVPROD_SERVER_URL}/analyticsmanagement/api/analytics/getOverviewAnalytics`,
      getInventoryAnalyticsUrl: `${ABINBEVPROD_SERVER_URL}/analyticsmanagement/api/analytics/getInventoryAnalytics`,
      getShipmentAnalyticsUrl: `${ABINBEVPROD_SERVER_URL}/analyticsmanagement/api/analytics/getShipmentAnalytics`,
      shipmentsUrl: `${ABINBEVPROD_SERVER_URL}/shipmentmanagement/api/shipment/abinbev/fetchShipments`,
      viewShipmentUrl: `${ABINBEVPROD_SERVER_URL}/shipmentmanagement/api/shipment/viewShipment?shipmentId=`,
      getManufacturers: `${ABINBEVPROD_SERVER_URL}/shipmentmanagement/api/shipping/getManufacturers`,
      createShippingOrderUrl: `${ABINBEVPROD_SERVER_URL}/shippingordermanagement/api/shipping/createShippingOrder`,
      getShippingOrdersUrl: `${ABINBEVPROD_SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrders`,
      getShippingOrderIdsUrl: `${ABINBEVPROD_SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrderIds`,
      viewShippingOrderUrl: `${ABINBEVPROD_SERVER_URL}/shippingordermanagement/api/shipping/viewShippingOrder?soId=`,
      createShipmentUrl: `${ABINBEVPROD_SERVER_URL}/shipmentmanagement/api/shipment/createShipment`,
      shipmentsSearch: `${ABINBEVPROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      createPurchaseOrderUrl: `${ABINBEVPROD_SERVER_URL}/pomanagement/api/po/createPurchaseOrder`,
      addPOsFromExcelUrl: `${ABINBEVPROD_SERVER_URL}/pomanagement/api/po/addPOsFromExcel`,
      changePOStatus: `${ABINBEVPROD_SERVER_URL}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${ABINBEVPROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOsUrl: `${ABINBEVPROD_SERVER_URL}/pomanagement/api/po/purchaseOrderStatistics`,
      inventoriesUrl: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getInventory`,
      inventorySearch: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      getSerialNumbersByBatchNumber: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addProductsToInventory: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      addInventoryUrl: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/addNewInventory`,
      productListUrl: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getProductListCounts`,
      getProductDetailsByWarehouseIdUrl: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getProductDetailsByWarehouseId?warehouseId=`,
      getRegionsUrl: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getRegions`,
      getCountryByRegionUrl: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getCountryDetailsByRegion?region=`,
      getWareHousesByCountryUrl: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?country=`,
      getWarehouseDetailsByCountryUrl: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?name=`,
      getWareHousesByRegionUrl: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByRegion?region=`,
      getInventoryProductsUrl: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getInventoryProductsByPlatform`,

      getAllStates: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getAllStates`,
      getDistrictsByState: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getDistrictsByState`,
      getAllSKUs: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getAllSKUs`,
      getOrganizationsByType: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getOrganizationsByType`,
      getOrganizationInfoByID: `${ABINBEVPROD_SERVER_URL}/inventorymanagement/api/inventory/getOrganizationInfoByID`,


      trackShipment: `${ABINBEVPROD_SERVER_URL}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId: `${ABINBEVPROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId: `${ABINBEVPROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${ABINBEVPROD_SERVER_URL}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${ABINBEVPROD_SERVER_URL}/tracktracemanagement/api/track/track?trackingNumber=`,
      getOrganisations: `${ABINBEVPROD_SERVER_URL}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId: `${ABINBEVPROD_SERVER_URL}/productmanagement/api/organisation/warehouses?id=`,
      addNewProduct: `${ABINBEVPROD_SERVER_URL}/productmanagement/api/products/addProductName`,
      getProducts: `${ABINBEVPROD_SERVER_URL}/productmanagement/api/products/getProducts`,
      getProductsByInventoryUrl: `${ABINBEVPROD_SERVER_URL}/shipmentmanagement/api/shipment/getProductsByInventory?invId=`,
      generateCodes: `${ABINBEVPROD_SERVER_URL}/productmanagement/api/products/generateCodes`,
      addMultipleProducts: `${ABINBEVPROD_SERVER_URL}/productmanagement/api/products/addMultipleProducts`,
      getNotificationsUrl: `${ABINBEVPROD_SERVER_URL}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${ABINBEVPROD_SERVER_URL}/notificationmanagement/api/notification/deleteNotification`,
      updateTrackingStatusUrl: `${ABINBEVPROD_SERVER_URL}/shipmentmanagement/api/shipment/updateTrackingStatus`,
      getAllAnalytics: `${ABINBEVPROD_SERVER_URL}/advancedanalytics/api/analytics/getAllStats`,
      getAnalyticsBySKUurl: `${ABINBEVPROD_SERVER_URL}/advancedanalytics/api/analytics/getStatsBySKU`,
      getAnalyticsByBrandurl: `${ABINBEVPROD_SERVER_URL}/advancedanalytics/api/analytics/getStatsByBrand`,
      getAllBrandsurl: `${ABINBEVPROD_SERVER_URL}/advancedanalytics/api/analytics/getAllBrands`,
      getOrganisationStatsurl: `${ABINBEVPROD_SERVER_URL}/advancedanalytics/api/analytics/getStatsByOrg`,
      getOverviewStats: `${ABINBEVPROD_SERVER_URL}/advancedanalytics/api/analytics/getOverviewStats`,

    },
    ainbevtest: {
      loginUrl: `${ABINBEVTEST_SERVER_URL}/usermanagement/api/auth/login`,
      sendOtpUrl: `${ABINBEVTEST_SERVER_URL}/usermanagement/api/auth/sendOtp`,
      registerUrl: `${ABINBEVTEST_SERVER_URL}/usermanagement/api/auth/register`,
      checkUserUrl: `${ABINBEVTEST_SERVER_URL}/usermanagement/api/auth/check`,
      verifyOtpUrl: `${ABINBEVTEST_SERVER_URL}/usermanagement/api/auth/verifyOtp`,
      userInfoUrl: `${ABINBEVTEST_SERVER_URL}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${ABINBEVTEST_SERVER_URL}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${ABINBEVTEST_SERVER_URL}/usermanagement/api/auth/updateProfile`,
      upload: `${ABINBEVTEST_SERVER_URL}/usermanagement/api/auth/upload`,
      getAnalyticsUrl: `${ABINBEVTEST_SERVER_URL}/analyticsmanagement/api/analytics/getAnalytics`,
      getOverviewAnalyticsUrl: `${ABINBEVTEST_SERVER_URL}/analyticsmanagement/api/analytics/getOverviewAnalytics`,
      getInventoryAnalyticsUrl: `${ABINBEVTEST_SERVER_URL}/analyticsmanagement/api/analytics/getInventoryAnalytics`,
      getShipmentAnalyticsUrl: `${ABINBEVTEST_SERVER_URL}/analyticsmanagement/api/analytics/getShipmentAnalytics`,
      shipmentsUrl: `${ABINBEVTEST_SERVER_URL}/shipmentmanagement/api/shipment/abinbev/fetchShipments`,
      viewShipmentUrl: `${ABINBEVTEST_SERVER_URL}/shipmentmanagement/api/shipment/viewShipment?shipmentId=`,
      getManufacturers: `${ABINBEVTEST_SERVER_URL}/shipmentmanagement/api/shipping/getManufacturers`,
      createShippingOrderUrl: `${ABINBEVTEST_SERVER_URL}/shippingordermanagement/api/shipping/createShippingOrder`,
      getShippingOrdersUrl: `${ABINBEVTEST_SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrders`,
      getShippingOrderIdsUrl: `${ABINBEVTEST_SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrderIds`,
      viewShippingOrderUrl: `${ABINBEVTEST_SERVER_URL}/shippingordermanagement/api/shipping/viewShippingOrder?soId=`,
      createShipmentUrl: `${ABINBEVTEST_SERVER_URL}/shipmentmanagement/api/shipment/createShipment`,
      shipmentsSearch: `${ABINBEVTEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      createPurchaseOrderUrl: `${ABINBEVTEST_SERVER_URL}/pomanagement/api/po/createPurchaseOrder`,
      addPOsFromExcelUrl: `${ABINBEVTEST_SERVER_URL}/pomanagement/api/po/addPOsFromExcel`,
      changePOStatus: `${ABINBEVTEST_SERVER_URL}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${ABINBEVTEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOsUrl: `${ABINBEVTEST_SERVER_URL}/pomanagement/api/po/purchaseOrderStatistics`,
      inventoriesUrl: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getInventory`,
      inventorySearch: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      getSerialNumbersByBatchNumber: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addProductsToInventory: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      addInventoryUrl: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/addNewInventory`,
      productListUrl: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getProductListCounts`,
      getProductDetailsByWarehouseIdUrl: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getProductDetailsByWarehouseId?warehouseId=`,
      getRegionsUrl: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getRegions`,
      getCountryByRegionUrl: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getCountryDetailsByRegion?region=`,
      getWareHousesByCountryUrl: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?country=`,
      getWarehouseDetailsByCountryUrl: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?name=`,
      getWareHousesByRegionUrl: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByRegion?region=`,
      getInventoryProductsUrl: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getInventoryProductsByPlatform`,

      getAllStates: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getAllStates`,
      getDistrictsByState: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getDistrictsByState`,
      getAllSKUs: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getAllSKUs`,
      getOrganizationsByType: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getOrganizationsByType`,
      getOrganizationInfoByID: `${ABINBEVTEST_SERVER_URL}/inventorymanagement/api/inventory/getOrganizationInfoByID`,

      trackShipment: `${ABINBEVTEST_SERVER_URL}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId: `${ABINBEVTEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId: `${ABINBEVTEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${ABINBEVTEST_SERVER_URL}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${ABINBEVTEST_SERVER_URL}/tracktracemanagement/api/track/track?trackingNumber=`,
      getOrganisations: `${ABINBEVTEST_SERVER_URL}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId: `${ABINBEVTEST_SERVER_URL}/productmanagement/api/organisation/warehouses?id=`,
      addNewProduct: `${ABINBEVTEST_SERVER_URL}/productmanagement/api/products/addProductName`,
      getProducts: `${ABINBEVTEST_SERVER_URL}/productmanagement/api/products/getProducts`,
      getProductsByInventoryUrl: `${ABINBEVTEST_SERVER_URL}/shipmentmanagement/api/shipment/getProductsByInventory?invId=`,
      generateCodes: `${ABINBEVTEST_SERVER_URL}/productmanagement/api/products/generateCodes`,
      addMultipleProducts: `${ABINBEVTEST_SERVER_URL}/productmanagement/api/products/addMultipleProducts`,
      getNotificationsUrl: `${ABINBEVTEST_SERVER_URL}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${ABINBEVTEST_SERVER_URL}/notificationmanagement/api/notification/deleteNotification`,
      updateTrackingStatusUrl: `${ABINBEVTEST_SERVER_URL}/shipmentmanagement/api/shipment/updateTrackingStatus`,
      getAllAnalytics: `${ABINBEVTEST_SERVER_URL}/advancedanalytics/api/analytics/getAllStats`,
      getAnalyticsBySKUurl: `${ABINBEVTEST_SERVER_URL}/advancedanalytics/api/analytics/getStatsBySKU`,
      getAnalyticsByBrandurl: `${ABINBEVTEST_SERVER_URL}/advancedanalytics/api/analytics/getStatsByBrand`,
      getAllBrandsurl: `${ABINBEVTEST_SERVER_URL}/advancedanalytics/api/analytics/getAllBrands`,
      getOrganisationStatsurl: `${ABINBEVTEST_SERVER_URL}/advancedanalytics/api/analytics/getStatsByOrg`,
      getOverviewStats: `${ABINBEVTEST_SERVER_URL}/advancedanalytics/api/analytics/getOverviewStats`,

    },
  };

  const environment = process.env.ENVIRONMENT || 'ainbevtest'; // change prod to test, local,stable, dev for respective environments
  const conf = confs[environment];
  return conf;
}
