export const TEST_SERVER_URL = 'http://test.vaccineledger.com:9001';
export const PROD_SERVER_URL = 'http://api.vaccineledger.com:9001';
export const DEMO_SERVER_URL = 'http://vaccineledger.com:9001';
export const LOCAL_SERVER_URL_USER = 'http://localhost:3001';
export const LOCAL_SERVER_URL_SHIPPINGORDER ='http://localhost:3013';
export const LOCAL_SERVER_URL_SHIPMENT = 'http://localhost:3002';
export const LOCAL_SERVER_URL_INVENTORY = 'http://localhost:3007';
export const LOCAL_SERVER_URL_PO = 'http://localhost:3012';
export const LOCAL_SERVER_URL_TRACKANDTRACE = 'http://localhost:3005';
export const LOCAL_SERVER_URL_NOTIFICATION = 'http://localhost:3006';
export const LOCAL_SERVER_URL_ANALYTICS = 'http://localhost:3015';
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
    local: {
      loginUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/login`,
      sendOtpUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/sendOtp`,
      registerUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/register`,
      checkUserUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/check`,
      verifyOtpUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/verifyOtp`,
      userInfoUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/updateProfile`,
      upload: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/upload`,
      getAnalyticsUrl:`${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/analytics/getAnalytics`,
      getOverviewAnalyticsUrl:`${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/analytics/getOverviewAnalytics`,
      getInventoryAnalyticsUrl:`${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/analytics/getInventoryAnalytics`,
      getShipmentAnalyticsUrl:`${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/analytics/getShipmentAnalytics`,
      createShippingOrderUrl:`${LOCAL_SERVER_URL_SHIPPINGORDER}/shippingordermanagement/api/shipping/createShippingOrder`,
      getShippingOrdersUrl:`${LOCAL_SERVER_URL_SHIPPINGORDER}/shippingordermanagement/api/shipping/getShippingOrders`,
      getShippingOrderIdsUrl:`${LOCAL_SERVER_URL_SHIPPINGORDER}/shippingordermanagement/api/shipping/getShippingOrderIds`,
      viewShippingOrderUrl:`${LOCAL_SERVER_URL_SHIPPINGORDER}/shippingordermanagement/api/shipping/viewShippingOrder?soId=`,
      shipmentsUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/fetchShipments`,
      viewShipmentUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/viewShipment?shipmentId=`,
      getProducts: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/getProducts`,
      getProductsByInventoryUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/getProductsByInventory?invId=`,
      generateCodes: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/generateCodes`,
      getManufacturers: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/getManufacturers`,
      getSerialNumbersByBatchNumber: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber:`${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addProductsToInventory: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      createShipmentUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/createShipment`,
      addInventoryUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addNewInventory`,
      shipmentsSearch: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      inventorySearch: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      getProductDetailsByWarehouseIdUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getProductDetailsByWarehouseId?warehouseId=`,
      getRegionsUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getRegions`,
      getCountryByRegionUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getCountryDetailsByRegion?region=`,
      getWareHousesByCountryUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?name=`,
      getWareHousesByRegionUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getWarehouseDetailsByRegion?region=`,
      createPurchaseOrderUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/createPurchaseOrder`,
      productListUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getProductListCounts`,
      inventoriesUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventory`,
      addPOsFromExcelUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/addPOsFromExcel`,
      changePOStatus: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOsUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/purchaseOrderStatistics`,
      trackShipment: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId:`${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId:`${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${LOCAL_SERVER_URL_TRACKANDTRACE}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${LOCAL_SERVER_URL_TRACKANDTRACE}/tracktracemanagement/api/track/track?trackingNumber=`,
      addNewProduct: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/addProductName`,
      getOrganisations:`${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId:`${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/warehouses?id=`,
      addMultipleProducts: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/addMultipleProducts`,
      getNotificationsUrl: `${LOCAL_SERVER_URL_NOTIFICATION}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${LOCAL_SERVER_URL_NOTIFICATION}/notificationmanagement/api/notification/deleteNotification`,
    },
    dev: {
      loginUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/login`,
      sendOtpUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/sendOtp`,
      registerUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/register`,
      checkUserUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/check`,
      verifyOtpUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/verifyOtp`,
      userInfoUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/updateProfile`,
      upload: `${DEV_SERVER_URL}/usermanagement/api/auth/upload`,
      getAnalyticsUrl:`${DEV_SERVER_URL}/analyticsmanagement/api/analytics/getAnalytics`,
      getOverviewAnalyticsUrl:`${DEV_SERVER_URL}/analyticsmanagement/api/analytics/getOverviewAnalytics`,
      getInventoryAnalyticsUrl:`${DEV_SERVER_URL}/analyticsmanagement/api/analytics/getInventoryAnalytics`,
      getShipmentAnalyticsUrl:`${DEV_SERVER_URL}/analyticsmanagement/api/analytics/getShipmentAnalytics`,
      createShippingOrderUrl:`${DEV_SERVER_URL}/shippingordermanagement/api/shipping/createShippingOrder`,
      getShippingOrdersUrl:`${DEV_SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrders`,
      getShippingOrderIdsUrl:`${DEV_SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrderIds`,
      viewShippingOrderUrl:`${DEV_SERVER_URL}/shippingordermanagement/api/shipping/viewShippingOrder?soId=`,
      shipmentsUrl: `${DEV_SERVER_URL}/shipmentmanagement/api/shipment/fetchShipments`,
      viewShipmentUrl: `${DEV_SERVER_URL}/shipmentmanagement/api/shipment/viewShipment?shipmentId=`,
      getProducts: `${DEV_SERVER_URL}/productmanagement/api/products/getProducts`,
      getProductsByInventoryUrl: `${DEV_SERVER_URL}/shipmentmanagement/api/shipment/getProductsByInventory?invId=`,
      generateCodes: `${DEV_SERVER_URL}/productmanagement/api/products/generateCodes`,
      getManufacturers: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/getManufacturers`,
      createShipmentUrl: `${DEV_SERVER_URL}/shipmentmanagement/api/shipment/createShipment`,
      getSerialNumbersByBatchNumber: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber:`${DEV_SERVER_URL}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addProductsToInventory: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      productListUrl: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getProductListCounts`,
      addInventoryUrl: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/addNewInventory`,
      shipmentsSearch: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      inventorySearch: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      getProductDetailsByWarehouseIdUrl: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getProductDetailsByWarehouseId?warehouseId=`,
      getRegionsUrl: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getRegions`,
      getCountryByRegionUrl: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getCountryDetailsByRegion?region=`,
      getWareHousesByCountryUrl: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?country=`,
      getWareHousesByRegionUrl: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByRegion?region=`,
      inventoriesUrl: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getInventory`,
      createPurchaseOrderUrl: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/createPurchaseOrder`,
      addPOsFromExcelUrl: `${DEV_SERVER_URL}/pomanagement/api/po/addPOsFromExcel`,
      changePOStatus: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOsUrl: `${DEV_SERVER_URL}/pomanagement/api/po/purchaseOrderStatistics`,
      trackShipment: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId:`${DEV_SERVER_URL}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId:`${DEV_SERVER_URL}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${DEV_SERVER_URL}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${DEV_SERVER_URL}/tracktracemanagement/api/track/track?trackingNumber=`,
      addNewProduct: `${DEV_SERVER_URL}/productmanagement/api/products/addProductName`,
      addMultipleProducts: `${DEV_SERVER_URL}/productmanagement/api/products/addMultipleProducts`,
      getOrganisations:`${DEV_SERVER_URL}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId:`${DEV_SERVER_URL}/productmanagement/api/organisation/warehouses?id=`,
      getNotificationsUrl: `${DEV_SERVER_URL}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${DEV_SERVER_URL}/notificationmanagement/api/notification/deleteNotification`,
    },
    stable: {
      loginUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/login`,
      sendOtpUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/sendOtp`,
      registerUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/register`,
      checkUserUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/check`,
      verifyOtpUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/verifyOtp`,
      userInfoUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/updateProfile`,
      upload: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/upload`,
      getAnalyticsUrl:`${STABLE_SERVER_URL_USER}/analyticsmanagement/api/analytics/getAnalytics`,
      getOverviewAnalyticsUrl:`${STABLE_SERVER_URL_USER}/analyticsmanagement/api/analytics/getOverviewAnalytics`,
      getInventoryAnalyticsUrl:`${STABLE_SERVER_URL_USER}/analyticsmanagement/api/analytics/getInventoryAnalytics`,
      getShipmentAnalyticsUrl:`${STABLE_SERVER_URL_USER}/analyticsmanagement/api/analytics/getShipmentAnalytics`,
      shipmentsUrl: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/fetchShipments`,
      viewShipmentUrl: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/viewShipment?shipmentId=`,
      getProducts: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/getProducts`,
      getProductsByInventoryUrl: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/getProductsByInventory?invId=`,
      generateCodes: `${STABLE_SERVER_URL_SHIPMENT}/productmanagement/api/products/generateCodes`,
      getManufacturers: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/getManufacturers`,
      createShippingOrderUrl:`${STABLE_SERVER_URL_SHIPMENT}/shippingordermanagement/api/shipping/createShippingOrder`,
      getShippingOrdersUrl:`${STABLE_SERVER_URL_SHIPMENT}/shippingordermanagement/api/shipping/getShippingOrders`,
      getShippingOrderIdsUrl:`${STABLE_SERVER_URL_SHIPMENT}/shippingordermanagement/api/shipping/getShippingOrderIds`,
      viewShippingOrderUrl:`${STABLE_SERVER_URL_SHIPMENT}/shippingordermanagement/api/shipping/viewShippingOrder?soId=`,
      createShipmentUrl: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/createShipment`,
      shipmentsSearch: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      createPurchaseOrderUrl: `${STABLE_SERVER_URL_PO}/pomanagement/api/po/createPurchaseOrder`,
      addPOsFromExcelUrl: `${STABLE_SERVER_URL_PO}/pomanagement/api/po/addPOsFromExcel`,
      changePOStatus: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOsUrl: `${STABLE_SERVER_URL_SHIPMENT}/pomanagement/api/po/purchaseOrderStatistics`,
      inventoriesUrl: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventory`,
      inventorySearch: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      addProductsToInventory: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      addInventoryUrl: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addNewInventory`,
      productListUrl: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getProductListCounts`,
      getSerialNumbersByBatchNumber: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber:`${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getProductDetailsByWarehouseIdUrl: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getProductDetailsByWarehouseId?warehouseId=`,
      getRegionsUrl: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getRegions`,
      getCountryByRegionUrl: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getCountryDetailsByRegion?region=`,
      getWareHousesByCountryUrl: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?country=`,
      getWareHousesByRegionUrl: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getWarehouseDetailsByRegion?region=`,
      trackShipment: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId:`${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId:`${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${STABLE_SERVER_URL_TRACKANDTRACE}/tracktracemanagement/api/track/fetchTemp`,
      getOrganisations:`${STABLE_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId:`${STABLE_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/warehouses?id=`,
      addNewProduct: `${STABLE_SERVER_URL_PRODUCTS}/productmanagement/api/products/addProductName`,
      trackProduct: `${STABLE_SERVER_URL_TRACKANDTRACE}/tracktracemanagement/api/track/track?trackingNumber=`,
      addMultipleProducts: `${STABLE_SERVER_URL_PRODUCTS}/productmanagement/api/products/addMultipleProducts`,
      getNotificationsUrl: `${STABLE_SERVER_URL_PRODUCTS}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${STABLE_SERVER_URL_PRODUCTS}/notificationmanagement/api/notification/deleteNotification`,
    },
    test: {
      loginUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/login`,
      sendOtpUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/sendOtp`,
      registerUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/register`,
      checkUserUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/check`,
      verifyOtpUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/verifyOtp`,
      userInfoUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/updateProfile`,
      upload: `${TEST_SERVER_URL}/usermanagement/api/auth/upload`,
      getAnalyticsUrl:`${TEST_SERVER_URL}/analyticsmanagement/api/analytics/getAnalytics`,
      getOverviewAnalyticsUrl:`${TEST_SERVER_URL}/analyticsmanagement/api/analytics/getOverviewAnalytics`,
      getInventoryAnalyticsUrl:`${TEST_SERVER_URL}/analyticsmanagement/api/analytics/getInventoryAnalytics`,
      getShipmentAnalyticsUrl:`${TEST_SERVER_URL}/analyticsmanagement/api/analytics/getShipmentAnalytics`,
      shipmentsUrl: `${TEST_SERVER_URL}/shipmentmanagement/api/shipment/fetchShipments`,
      viewShipmentUrl: `${TEST_SERVER_URL}/shipmentmanagement/api/shipment/viewShipment?shipmentId=`,
      getManufacturers: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/getManufacturers`,
      createShippingOrderUrl:`${TEST_SERVER_URL}/shippingordermanagement/api/shipping/createShippingOrder`,
      getShippingOrdersUrl:`${TEST_SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrders`,
      getShippingOrderIdsUrl:`${TEST_SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrderIds`,
      viewShippingOrderUrl:`${TEST_SERVER_URL}/shippingordermanagement/api/shipping/viewShippingOrder?soId=`,
      createShipmentUrl: `${TEST_SERVER_URL}/shipmentmanagement/api/shipment/createShipment`,
      shipmentsSearch: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      createPurchaseOrderUrl: `${TEST_SERVER_URL}/pomanagement/api/po/createPurchaseOrder`,
      addPOsFromExcelUrl: `${TEST_SERVER_URL}/pomanagement/api/po/addPOsFromExcel`,
      changePOStatus: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOsUrl: `${TEST_SERVER_URL}/pomanagement/api/po/purchaseOrderStatistics`,
      inventoriesUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getInventory`,
      inventorySearch: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      getSerialNumbersByBatchNumber: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber:`${TEST_SERVER_URL}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addProductsToInventory: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      addInventoryUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/addNewInventory`,
      productListUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getProductListCounts`,
      getProductDetailsByWarehouseIdUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getProductDetailsByWarehouseId?warehouseId=`,
      getRegionsUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getRegions`,
      getCountryByRegionUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getCountryDetailsByRegion?region=`,
      getWareHousesByCountryUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?country=`,
      getWarehouseDetailsByCountryUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?name=`,
      getWareHousesByRegionUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByRegion?region=`,
      trackShipment: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId:`${TEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId:`${TEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${TEST_SERVER_URL}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${TEST_SERVER_URL}/tracktracemanagement/api/track/track?trackingNumber=`,
      getOrganisations:`${TEST_SERVER_URL}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId:`${TEST_SERVER_URL}/productmanagement/api/organisation/warehouses?id=`,
      addNewProduct: `${TEST_SERVER_URL}/productmanagement/api/products/addProductName`,
      getProducts: `${TEST_SERVER_URL}/productmanagement/api/products/getProducts`,
      getProductsByInventoryUrl: `${TEST_SERVER_URL}/shipmentmanagement/api/shipment/getProductsByInventory?invId=`,
      generateCodes: `${TEST_SERVER_URL}/productmanagement/api/products/generateCodes`,
      addMultipleProducts: `${TEST_SERVER_URL}/productmanagement/api/products/addMultipleProducts`,
      getNotificationsUrl: `${TEST_SERVER_URL}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${TEST_SERVER_URL}/notificationmanagement/api/notification/deleteNotification`,
    },
    demo: {
      loginUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/login`,
      sendOtpUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/sendOtp`,
      registerUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/register`,
      checkUserUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/check`,
      verifyOtpUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/verifyOtp`,
      userInfoUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/updateProfile`,
      upload: `${DEMO_SERVER_URL}/usermanagement/api/auth/upload`,
      getAnalyticsUrl:`${DEMO_SERVER_URL}/analyticsmanagement/api/analytics/getAnalytics`,
      getOverviewAnalyticsUrl:`${DEMO_SERVER_URL}/analyticsmanagement/api/analytics/getOverviewAnalytics`,
      getInventoryAnalyticsUrl:`${DEMO_SERVER_URL}/analyticsmanagement/api/analytics/getInventoryAnalytics`,
      getShipmentAnalyticsUrl:`${DEMO_SERVER_URL}/analyticsmanagement/api/analytics/getShipmentAnalytics`,
      createShippingOrderUrl:`${DEMO_SERVER_URL}/shippingordermanagement/api/shipping/createShippingOrder`,
      getShippingOrdersUrl:`${DEMO_SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrders`,
      getShippingOrderIdsUrl:`${DEMO_SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrderIds`,
      viewShippingOrderUrl:`${DEMO_SERVER_URL}/shippingordermanagement/api/shipping/viewShippingOrder?soId=`,
      shipmentsUrl: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipment/fetchShipments`,
      viewShipmentUrl: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipment/viewShipment?shipmentId=`,
      getManufacturers: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/getManufacturers`,
      createShipmentUrl: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipment/createShipment`,
      shipmentsSearch: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      createPurchaseOrderUrl: `${DEMO_SERVER_URL}/pomanagement/api/po/createPurchaseOrder`,
      addPOsFromExcelUrl: `${DEMO_SERVER_URL}/pomanagement/api/po/addPOsFromExcel`,
      changePOStatus: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOsUrl: `${DEMO_SERVER_URL}/pomanagement/api/po/purchaseOrderStatistics`,
      inventoriesUrl: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getInventory`,
      inventorySearch: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      getSerialNumbersByBatchNumber: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber:`${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addProductsToInventory: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      addInventoryUrl: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/addNewInventory`,
      getProductDetailsByWarehouseIdUrl: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getProductDetailsByWarehouseId?warehouseId=`,
      getWarehouseDetailsByCountryUrl: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?name=`,
      getRegionsUrl: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getRegions`,
      getCountryByRegionUrl: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getCountryDetailsByRegion?region=`,
      getWareHousesByCountryUrl: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?country=`,
      getWareHousesByRegionUrl: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByRegion?region=`,
      trackShipment: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId:`${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId:`${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${DEMO_SERVER_URL}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${DEMO_SERVER_URL}/tracktracemanagement/api/track/track?trackingNumber=`,
      getOrganisations:`${DEMO_SERVER_URL}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId:`${DEMO_SERVER_URL}/productmanagement/api/organisation/warehouses?id=`,
      addNewProduct: `${DEMO_SERVER_URL}/productmanagement/api/products/addProductName`,
      getProducts: `${DEMO_SERVER_URL}/productmanagement/api/products/getProducts`,
      getProductsByInventoryUrl: `${DEV_SERVER_URL}/shipmentmanagement/api/shipment/getProductsByInventory?invId=`,
      generateCodes: `${DEMO_SERVER_URL}/productmanagement/api/products/generateCodes`,
      addMultipleProducts: `${DEMO_SERVER_URL}/productmanagement/api/products/addMultipleProducts`,
      getNotifications: `${DEMO_SERVER_URL}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${DEMO_SERVER_URL}/notificationmanagement/api/notification/deleteNotification`,
    },
    prod: {
      loginUrl: `${PROD_SERVER_URL}/usermanagement/api/auth/login`,
      sendOtpUrl: `${PROD_SERVER_URL}/usermanagement/api/auth/sendOtp`,
      registerUrl: `${PROD_SERVER_URL}/usermanagement/api/auth/register`,
      checkUserUrl: `${PROD_SERVER_URL}/usermanagement/api/auth/check`,
      verifyOtpUrl: `${PROD_SERVER_URL}/usermanagement/api/auth/verifyOtp`,
      userInfoUrl: `${PROD_SERVER_URL}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${PROD_SERVER_URL}/api/auth/getAllUsers`,
      updateProfileUrl: `${PROD_SERVER_URL}/usermanagement/api/auth/updateProfile`,
      upload: `${PROD_SERVER_URL}/usermanagement/api/auth/upload`,
      getAnalyticsUrl:`${PROD_SERVER_URL}/analyticsmanagement/api/analytics/getAnalytics`,
      getOverviewAnalyticsUrl:`${PROD_SERVER_URL}/analyticsmanagement/api/analytics/getOverviewAnalytics`,
      getInventoryAnalyticsUrl:`${PROD_SERVER_URL}/analyticsmanagement/api/analytics/getInventoryAnalytics`,
      getShipmentAnalyticsUrl:`${PROD_SERVER_URL}/analyticsmanagement/api/analytics/getShipmentAnalytics`,
      shipmentsUrl: `${PROD_SERVER_URL}/shipmentmanagement/api/shipment/fetchShipments`,
      viewShipmentUrl: `${PROD_SERVER_URL}/shipmentmanagement/api/shipment/viewShipment?shipmentId=`,
      createShippingOrderUrl:`${PROD_SERVER_URL}/shippingordermanagement/api/shipping/createShippingOrder`,
      getShippingOrdersUrl:`${PROD_SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrders`,
      getShippingOrderIdsUrl:`${PROD_SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrderIds`,
      viewShippingOrderUrl:`${PROD_SERVER_URL}/shippingordermanagement/api/shipping/viewShippingOrder?soId=`,
      shipmentsSearch: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      getProducts: `${PROD_SERVER_URL}/productmanagement/api/products/getProducts`,
      getProductsByInventoryUrl: `${PROD_SERVER_URL}/shipmentmanagement/api/shipment/getProductsByInventory?invId=`,
      generateCodes: `${PROD_SERVER_URL}/productmanagement/api/products/generateCodes`,
      getManufacturers: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/getManufacturers`,
      createPurchaseOrderUrl: `${PROD_SERVER_URL}/pomanagement/api/po/createPurchaseOrder`,
      createShipmentUrl: `${PROD_SERVER_URL}/shipmentmanagement/api/shipment/createShipment`,
      addPOsFromExcelUrl: `${PROD_SERVER_URL}/pomanagement/api/po/addPOsFromExcel`,
      changePOStatus: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOsUrl: `${PROD_SERVER_URL}/pomanagement/api/po/purchaseOrderStatistics`,
      inventoriesUrl: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getInventory`,
      inventorySearch: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      getSerialNumbersByBatchNumber: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber:`${PROD_SERVER_URL}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addInventoryUrl: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/addNewInventory`,
      addProductsToInventory: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/addProductsToInventory`,
      productListUrl: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getProductListCounts`,
      addInventoriesFromExcel: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      getProductDetailsByWarehouseIdUrl: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getProductDetailsByWarehouseId?warehouseId=`,
      getRegionsUrl: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getRegions`,
      getCountryByRegionUrl: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getCountryDetailsByRegion?region=`,
      getWarehouseDetailsByCountryUrl: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?name=`,
      getWareHousesByCountryUrl: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?country=`,
      trackShipment: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId:`${PROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId:`${PROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${PROD_SERVER_URL}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${PROD_SERVER_URL}/tracktracemanagement/api/track/track?trackingNumber=`,
      getOrganisations:`${PROD_SERVER_URL}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId:`${PROD_SERVER_URL}/productmanagement/api/organisation/warehouses?id=`,
      addNewProduct: `${PROD_SERVER_URL}/productmanagement/api/products/addProductName`,
      addMultipleProducts: `${PROD_SERVER_URL}/productmanagement/api/products/addMultipleProducts`,
      getNotificationsUrl: `${PROD_SERVER_URL}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${PROD_SERVER_URL}/notificationmanagement/api/notification/deleteNotification`,
    },
  };

  const environment = process.env.ENVIRONMENT || 'test'; // change prod to test, local,stable, dev for respective environments
  const conf = confs[environment];
  return conf;
}
