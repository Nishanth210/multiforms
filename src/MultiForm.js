import React, { useState } from "react";
import DepartmentForm from "./DepartmentForm";
import LabInformationForm from "./LabInformationForm";
import PurchaseOrderForm from "./PurchaseOrderForm";
import EquipmentDetailsForm from "./EquipmentDetailsForm";
import "../src/Form.css"

function MultiForm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    DepartmentNumber: "",
    DepartmentName: "",
    HodName: "",
    LabNumber: "",
    DepartmentNumber: "",
    Location: "",
    LabIncharge: "",
    PurchaseOrderNumber: "",
    PurchaseOrderDate: "",
    Supplier: "",
    PurchaseorderValue: "",
    EquipmentSerialNumber: "",
    PurchaseOrderNumber: "",
    PurchaseOrderDate: "",
    EquipmentValue: "",
    Description: "",
    Invoice: "",
    Lab: "",
    Status: "",
  });

  const FormTitles = ["Department Details", "Lab Information", "Purchase Order Details","Equipment Details"];

  const PageDisplay = () => {
    if (page === 0) {
      return <DepartmentForm formData={formData} setFormData={setFormData}/>;
    } else if (page === 1) {
      return <LabInformationForm formData={formData} setFormData={setFormData}/>;
    } else if(page===2){
      return <PurchaseOrderForm formData={formData} setFormData={setFormData}/>;
    }else{
        return <EquipmentDetailsForm formData={formData} setFormData={setFormData}/>
    }
  };

  return (
    <div className="form">
      
        <div className="body">{PageDisplay()}</div>
        <div className="Submition">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                 console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    
  );
}

export default MultiForm;