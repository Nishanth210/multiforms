import React ,{useState} from "react";
import "./Form.css"
import MultiForm from "./MultiForm";

const DepartmentForm=({formData, setFormData})=>{
    

    return(
        <form>
            <div className="lab-form">
                
                <h1>DEPARTMENT INFO</h1>
                <div className="inputbox">
                    <input type="number" placeholder="Department number" value={formData.DepartmentNumber}
                        onChange={(e) => {
                        setFormData({ ...formData, DepartmentNumber: e.target.value });
                        }}>
                    </input>
                </div>
                <div className="inputbox">
                <label class="department">Choose Department :</label>
                    <select classname='department'  value={formData.DepartmentName}
                        onChange={(e) => {
                        setFormData({ ...formData, DepartmentName: e.target.value });
                        }}>
                        <option value="/"></option>
                        <option value="CSE">CSE</option>
                        <option value="ISE">ISE</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                    </select>
                </div>
                <div className="inputbox">
                    <input type="text" placeholder="HOD Name" value={formData.HodName}
                        onChange={(e) => {
                        setFormData({ ...formData, HodName: e.target.value });
                        }}>
                    </input>
                    
                </div>
            
                
            </div>
            
        </form>
    );
}
export default DepartmentForm;