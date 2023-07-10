import React from "react";
import "./Form.css"

const PurchaseOrderForm=({formData,setFormData})=>{
    return(
        <form>
            <div className="lab-form">
                
                <h1>PURCHASE OREDR DETAILS</h1>
                <div className="inputbox">
                    <input type="number" placeholder="Purchase Order Number" value={formData.PurchaseOrderNumber}
                        onChange={(e) => {
                        setFormData({ ...formData, PurchaseOrderNumber: e.target.value });
                        }}></input>
                </div>
                <div className="inputbox">
                    <input type="date" placeholder="Purchase Date" value={formData.PurchaseDate}
                        onChange={(e) => {
                        setFormData({ ...formData, PurchaseDate: e.target.value });
                        }}></input>
                </div>
                <div className="inputbox">
                    <input type="text" placeholder="Supplier" value={formData.Supplier}
                        onChange={(e) => {
                        setFormData({ ...formData, Supplier: e.target.value });
                        }}></input>
                </div>
                <div className="inputbox">
                    <input type="number" placeholder="Purchase Order Value"  value={formData.PurchaseOrderValue}
                        onChange={(e) => {
                        setFormData({ ...formData, PurchaseOrderValue: e.target.value });
                        }}></input>
                </div>
                 
                
            </div>
            
        </form>
    );
}
export default PurchaseOrderForm;