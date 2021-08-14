import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'

const Reports = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm="12">
              <h4 id="traffic" className="card-title mb-0">
                VCT Reports
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Reports
