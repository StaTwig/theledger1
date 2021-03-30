import React, { useState } from "react";
import uploadBlue from "../../assets/icons/UploadBlue.svg";
import uploadWhite from "../../assets/icons/UploadWhite.svg";
import { useSelector, useDispatch } from "react-redux";
import { turnOn, turnOff } from "../../actions/spinnerActions";
import SuccessPopup from "./successPopup";
import FailPopup from "./failPopup";
import { updateTrackingStatus } from "../../actions/shipmentActions";
import Modal from "../../shared/modal";
import "./style.scss";
import { Formik } from "formik";
const UpdateStatus = (props) => {
  const profile = useSelector((state) => {
    return state.user;
  });
  const [shipmentId, setShipmentId] = useState([]);
  const [comments, setComments] = useState("");
  const [firstName, setFirstName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationLocation, setOrganisationLocation] = useState("");
  const [photo, setPhoto] = useState("");
  const [updateStatusLocation, setUpdateStatusLocation] = useState("");
  const [alerttrue, setTrue] = useState("");
  const [openUpdatedStatus, setOpenUpdatedStatus] = useState(false);
  const [openShipmentFail, setOpenShipmentFail] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const setFile = (evt) => {
    setPhoto(evt.target.files[0]);
  };

  const updateStatus = async (values) => {
    console.log("1", values);
    const { shipmentId, comments, updateStatusLocation, alerttrue } = values;
    const data = {
      id: shipmentId,
      shipmentUpdates: {
        updateComment: comments,
        updatedBy: profile.firstName,
        orgid: profile.organisation,
        orglocation: profile.location,
        updatedAt: updateStatusLocation,
        isAlertTrue: alerttrue,
      },
    };
   const result = await updateTrackingStatus(data);
    console.log("1", result);

    if (result.status === 200) {
      setOpenUpdatedStatus(true);
      console.log("2", result);
      setMessage("Status updated Successfully");
    } else {
      setOpenShipmentFail(true);
      setErrorMessage("Failed to Update");
    }
  };

  const closeModal = () => {
    setOpenUpdatedStatus(false);
    props.history.push("/shipments");
  };
  const closeModalFail = () => {
    setOpenShipmentFail(false);
  };
  return (
    <div className="updateStatus">
      <div className="d-flex justify-content-between">
        <h1 className="breadcrumb">UPDATE STATUS</h1>
        <div className="d-flex">
          <button className="btn btn-primary font-weight-bold">
            <img
              src={uploadWhite}
              width="20"
              height="17"
              className="mr-2 mb-1"
            />
            <span>Upload</span>
          </button>
        </div>
      </div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          shipmentId: "",
          firstName: profile.firstName,
          organisationName: profile.organisation,
          organisationLocation: profile.location,
          updateStatusLocation: "",
          alerttrue: "",
          comments: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.shipmentId) {
            errors.shipmentId = "Required";
          }
          if (!values.updateStatusLocation) {
            errors.updateStatusLocation = "Required";
          }
          if (!values.comments) {
            errors.comments = "Required";
          }
          if (!values.alerttrue) {
            errors.alerttrue = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          updateStatus(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          dirty,
        }) => (
          <form onSubmit={handleSubmit} className="mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <div className="col mr-3">
                    <div className="panel commonpanle">
                      <div className="form-group">
                        <label className="mb-1 text-secondary">ShipmentID</label>
                        <input
                          type="text"
                          className="form-control"
                          name="shipmentId"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.shipmentId}
                        />
                        {errors.shipmentId && touched.shipmentId && (
                          <span className="error-msg text-danger">
                            {errors.shipmentId}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="panel commonpanle">
                      <h6 className="poheads potext mt-3 mb-3">
                        Account Holder Details
                      </h6>
                      <div className="form-group">
                        <label className="mb-1 text-secondary">UserName*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          onChange={(e) => setFirstName(e.target.value)}
                          value={profile.firstName}
                          readonly
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1 text-secondary">
                          Organisation Name*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="organisationName"
                          onChange={(e) => setOrganisationName(e.target.value)}
                          value={profile.organisation}
                          readonly
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1 text-secondary">
                          Organisation Location*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="organisationLocation"
                          onChange={(e) =>
                            setOrganisationLocation(e.target.value)
                          }
                          value={profile.location}
                          readonly
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1 text-secondary">
                          Update Status Location*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="updateStatusLocation"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.updateStatusLocation}
                        />
                        {errors.updateStatusLocation &&
                          touched.updateStatusLocation && (
                            <span className="error-msg text-danger">
                              {errors.updateStatusLocation}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="panel commonpanle">
                      <label className="mb-1 text-secondary">
                        is Alert True?
                      </label>
                      <input
                        type="radio"
                        name="alerttrue"
                        placeholder="YES"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value="True"
                      />
                      <label className="mb-1">Yes</label>
                      <input
                        type="radio"
                        name="alerttrue"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value="False"
                      />
                      <label className="mb-1">No</label>
                      {errors.alerttrue && touched.alerttrue && (
                        <span className="error-msg text-danger">
                          {errors.alerttrue}
                        </span>
                      )}
                      <h6 className="poheads potext mt-3 mb-3">Comment*</h6>
                      <input
                        type="text"
                        className="form-control"
                        name="comments"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.comments}
                      />
                      {errors.comments && touched.comments && (
                        <span className="error-msg text-danger">
                          {errors.comments}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col ml-5">
                    <h6 className="font-weight-bold mb-4">Upload Image</h6>
                    <div className="d-flex flex-column upload">
                      <img
                        src={uploadBlue}
                        name="photo"
                        width="50"
                        height="50"
                        className="mt-3"
                      />
                      <label>
                        Drag and drop files here{" "}
                        <input type="file" class="select" onChange={setFile} />{" "}
                      </label>
                      <div>or</div>
                      <label class="btn-primary btn browse">
                        Browse Files
                        <input
                          type="file"
                          class="select"
                          onChange={setFile}
                        />{" "}
                      </label>
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="d-flex flex-row justify-content-between">
                  <div />
                  <div>
                    {" "}
                    <button
                      className="btn btn-outline-primary mr-4"
                      onClick={() => props.history.push("/shipments")}
                    >
                      CANCEL
                    </button>
                    <button
                      className="btn btn-orange fontSize20 font-bold mr-4 product"
                      onClick={updateStatus}
                    >
                      <span>UPDATE STATUS</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
      {openUpdatedStatus && (
        <Modal
          close={() => closeModal()}
          size="modal-sm" //for other size's use `modal-lg, modal-md, modal-sm`
        >
          <SuccessPopup
            onHide={closeModal} //FailurePopUp
          />
        </Modal>
      )}
      {openShipmentFail && (
        <Modal
          close={() => closeModalFail()}
          size="modal-sm" //for other size's use `modal-lg, modal-md, modal-sm`
        >
          <FailPopup
            onHide={closeModalFail} //FailurePopUp
          />
        </Modal>
      )}
      {message && (
        <div className="alert alert-success d-flex justify-content-center mt-3">
          {message}
        </div>
      )}

      {errorMessage && (
        <div className="alert alert-danger d-flex justify-content-center mt-3">
          {errorMessage}
        </div>
      )}
    </div>
  );
};
export default UpdateStatus;
