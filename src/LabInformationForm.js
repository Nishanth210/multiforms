import React from "react";
import "./Form.css"

const LabInformationForm=({formData, setFormData})=>{
    return(
        <form>
            <div className="lab-form">
                
                <h1>LAB INFORMATION</h1>
                <div className="inputbox">
                    <input type="number" placeholder="Lab number"  value={formData.LabNumber}
                        onChange={(e) => {
                        setFormData({ ...formData, LabNumber: e.target.value });
                        }}></input>
                </div>
                <div className="inputbox">
                    <input type="number" placeholder="Department number" value={formData.DepartmentNumber}
                        onChange={(e) => {
                        setFormData({ ...formData, DepartmentNumber: e.target.value });
                        }}></input>
                </div>
                <div className="inputbox">
                    <input type="text" placeholder="Location" value={formData.Location}
                        onChange={(e) => {
                        setFormData({ ...formData, Location: e.target.value });
                        }}></input>
                </div>
                <div className="inputbox">
                    <input type="text" placeholder="Lab Incharge name" value={formData.LabInchargeName}
                        onChange={(e) => {
                        setFormData({ ...formData, LabInchargeName: e.target.value });
                        }}></input>
                </div>
               
                
            </div>
            
        </form>
    );
}
export default LabInformationForm;