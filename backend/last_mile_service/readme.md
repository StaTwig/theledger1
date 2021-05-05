`GET - GetEOLInfoBySerialNumber => lastmilemanagement/api/GetEOLInfoBySerialNumber?id={serial_num}`

`GET - GetEOLInfoByProductId => lastmilemanagement/api/GetEOLInfoByProductId?id={product_id}`

`GET - GetEOLInfoByIdentityId => lastmilemanagement/api/GetEOLInfoByIdentityId?id={aadhar_no}`

`GET - GetEOLInfoByPlaceAdministered => lastmilemanagement/api/GetEOLInfoByPlaceAdministered?place={warehouse_id}`


 ###### date format is YYYY-MM-DD
`GET - GetEOLListByDateWindow => lastmilemanagement/api/GetEOLListByDateWindow?startDate={date}&endDate={date}`

###### refer LastMileModel for request body parameters. 

`POST - AddNewEOL => lastmilemanagement/api/AddNewEOL`

###### Note: Updation requires all the params, So data has to be fetched before calling this API and whole data has to be sent with required params edited.

`POST - UpdateExistingEOLByID => lastmilemanagement/api/UpdateExistingEOLByID`  

###### Note: These otp api refered from  employee_service.

`POST - sendOtp => lastmilemanagement/api/sendOtp` 
`POST - verifyOtp => lastmilemanagement/api/verifyOtp` 

###### Note: This single api is designed to support filtering based on diff query params.

`GET - GetEOLInfoBySelection => lastmilemanagement/api/GetEOLInfoBySelection?region={region_name}`
`GET - GetEOLInfoBySelection => lastmilemanagement/api/GetEOLInfoBySelection?country={country_name}`
`GET - GetEOLInfoBySelection => lastmilemanagement/api/GetEOLInfoBySelection?country={country_name}&state={state_name}`
`GET - GetEOLInfoBySelection => lastmilemanagement/api/GetEOLInfoBySelection?country={country_name}&state={state_name}&district={district_name}`
`GET - GetEOLInfoBySelection => lastmilemanagement/api/GetEOLInfoBySelection?zipcode={zipcode}`
`GET - GetEOLInfoBySelection => lastmilemanagement/api/GetEOLInfoBySelection?productId={productId}`
`GET - GetEOLInfoBySelection => lastmilemanagement/api/GetEOLInfoBySelection?region={region_name}&productId={productId}`
`GET - GetEOLInfoBySelection => lastmilemanagement/api/GetEOLInfoBySelection?country={country_name}&productId={productId}`
`GET - GetEOLInfoBySelection => lastmilemanagement/api/GetEOLInfoBySelection?country={country_name}&state={state_name}&productId={productId}`
`GET - GetEOLInfoBySelection => lastmilemanagement/api/GetEOLInfoBySelection?zipcode={zipcode}&productId={productId}`
`GET - GetEOLInfoBySelection => lastmilemanagement/api/GetEOLInfoBySelection?country={country_name}&state={state_name}&district={district_name}&productId={productId}`