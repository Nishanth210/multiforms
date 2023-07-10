import React from "react";
import "./Form.css"

const EquipmentDetailsForm=({formData,setFormData})=>{
    return(
        <form>
            <div className="lab-form">
                
                <h1>EQUIPMENT DETAILS</h1>
                <div className="inputbox">
                    <input type="number" placeholder="Equipment Serial Number" value={formData.EquipmentSerialNumber}
                        onChange={(e) => {
                        setFormData({ ...formData, EquipmentSerialNumber: e.target.value });
                        }}></input>
                </div>
                <div className="inputbox">
                    <input type="number" placeholder="Purchase order Number" value={formData.PurchaseOrderNumber}
                        onChange={(e) => {
                        setFormData({ ...formData,PurchaseOrderNumber: e.target.value });
                        }}></input>
                </div>
                <div className="inputbox">
                    <input type="date" placeholder="Purchase Order Date" value={formData.PurchaseOrderDate}
                        onChange={(e) => {
                        setFormData({ ...formData, PurchaseOrderDate: e.target.value });
                        }}></input>
                </div>
                <div className="inputbox">
                    <input type="number" placeholder="Equipment Value" value={formData.EquipmentValue}
                        onChange={(e) => {
                        setFormData({ ...formData, EquipmentValue: e.target.value });
                        }}></input>
                </div>
                <div className="inputbox">
                    <input type="file" id="file" webkitdirectory multiple value={formData.Invoice}
                        onChange={(e) => {
                        setFormData({ ...formData, Invoice: e.target.value });
                        }}></input>
                </div>
                <div className="inputbox">
                    <textarea rows={3} className="description" placeholder="Description" value={formData.Description}
                        onChange={(e) => {
                        setFormData({ ...formData, Description: e.target.value });
                        }}></textarea>
                </div>
                <div className="inputbox">
                    <input type="text" placeholder="Lab" value={formData.Lab}
                        onChange={(e) => {
                        setFormData({ ...formData, Lab: e.target.value });
                        }}></input>
                </div>
                <div className="inputbox">
                    <label>Status :</label>
                    <select className='status'  value={formData.Status}
                        onChange={(e) => {
                        setFormData({ ...formData, Status: e.target.value });
                        }}>
                        <option></option>
                        <option >WorKing</option>
                        <option >Not Working</option>
                    </select>
                </div>
                
                
            </div>
            
        </form>
    );
}
export default EquipmentDetailsForm;