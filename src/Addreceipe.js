import axios from 'axios';
import React, { useState } from 'react'
import Header from './Header'

const Addreceipe = () => {
    var[title,setTitle]=useState("");
    var[category,setCategory]=useState("");
    var[description,setDescription]=useState("");
    var[prepaidby,setPrepaidby]=useState("");
    const subData=()=>{
      const  data={"title":title,"category":category,"description":description,"prepaidby":prepaidby}
        console.log(data)
        axios.post("http://localhost:4003/api/receipe",data).then((response)=>{
          if  (response.data.status=="success")
            {
alert("Successfully Inserted")
            }
            else
            {
alert("Error in Insertion")
            }
        

        })
        
    }
  return (
    <div>
        <Header/>
        <div class="Container">
    <div class="row g-3">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-5">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Receipe Title</label>
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Category</label>
                   <select class="form-control">
                       <option value="">Veg</option>
                       <option onChange={(e)=>{setCategory(e.target.value)}} value="">Non-veg</option>

                   </select>
                    
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <textarea onChange={(e)=>{setDescription(e.target.value)}}  name="" id="" cols="30" rows="8">Description</textarea>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Prepaid By</label>
                    <input onChange={(e)=>{setPrepaidby(e.target.value)}}  type="text" class="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData}  className="btn btn-success">Submit</button>
                </div>
              
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addreceipe