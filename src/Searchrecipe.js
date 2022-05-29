import axios from 'axios';
import React, { useState } from 'react'
import Header from './Header'

const Searchrecipe = () => {
    const[data,Searchdata]=useState([{  "category":"","description":"","prepaidby":"" }])
    const[title,setTitle]=useState("")

    
        
    const Searchapi=()=>{
        const valueread={"title":title}
        console.log(valueread)
        axios.post("http://localhost:4003/api/search",valueread).then((response)=>{
            Searchdata(response.data)
        })
    }
    
    

    const Deleteapicall=(id)=>{
        const data={"_id":id}
        console.log(data)
  
        axios.post("http://localhost:4003/api/delete",data).then(
            (response)=>{
                if(response.data.status=="success")
                {
  alert("Successfully deleted")
                }
                else
                {
  alert("Error in deletion")
                }
            }
        )
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
               
               
                
                <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={Searchapi}  className="btn btn-success">search</button>
                </div>
              {data.map((value,key)=>{



                  return    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="" class="form-label">Category</label>
                  <input value={value.category} type="text" class="form-control"/>


                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <label for="" className="form-label">Description</label>
                   <input type="text" value={value.description} className="form-control"/>
                   
               </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">prepaid By</label>
                    <input type="text" value={value.prepaidby} className="form-control"/>
                    
                </div>
                 
                <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={()=>{Deleteapicall(value._id)}}   className="btn btn-success">Delete</button>
                </div>
              </div>
               
               
             

             
              })}
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Searchrecipe