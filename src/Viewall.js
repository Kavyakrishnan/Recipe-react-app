import axios from 'axios'
import React, { useState } from 'react'

const Viewall = () => {
 
    var [viewrecipie,setView]=useState([])
        axios.get("http://localhost:4003/api/view").then(
            (response)=>{
                console.log(response.data)
                setView(response.data)
                
    
            }
        )
    var viewrecipie=[
        {
            "title":"Masaladosha",
            "category":"veg",
            "description":"xxx",
            "prepaidby":"Gpay",
            "img":"https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2019/Id_Fresh_Masala_Dosa_Recipe_With_Sambar_and_Chutney_2.jpg"
          },          
                  {
            "title":"Biriyani",
            "category":"Non-veg",
            "description":"xxx",
            "prepaidby":"Gpay", 
            "img":"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/yot9zfocxiqxeghusxny"
          },
        {
            "title":"Meals",
            "category":"veg",
            "description":"xxx",
            "prepaidby":"Gpay",
            "img":"https://www.watscooking.com/images/dish/normal/150.jpg",
        },
        {
            "title":"idli",
            "category":"veg",
            "description":"xxx",
            "prepaidby":"Gpay",
            "img":"https://www.thespruceeats.com/thmb/A_g1pdGtPZBJyJ9ycu18iDzegL4=/1887x1415/smart/filters:no_upscale()/idli-56a510b63df78cf772862c34.jpg",
        },
        {
            "title":"puttu",
            "category":"veg",
            "description":"xxx",
            "prepaidby":"Gpay",
            "img":"https://www.archanaskitchen.com/images/archanaskitchen/Indian_Breakfast_Tiffins/Kerala_Style_Puttu_Recipe_Steamed_Rice_Cakes_with_Coconut-1.jpg",
        },
        {
            "title":"porotta chickencurry",
            "category":"veg",
            "description":"xxx",
            "prepaidby":"Gpay",
            "img":"https://i.pinimg.com/originals/28/6a/ed/286aedcacad6d3836b928133cb7e98df.jpg",
        },
    ]
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
        <div class="Container">
    <div class="row g-3">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-5">
{viewrecipie.map((value,key)=>{
    return<div className='col col-12 col-sm-6 col-md-4 col-lg-4'>

    <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-5">
      <img src={value.img}  class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Dishes</h5>
        <p class="card-text">{value.title}</p>        
       <p class="card-text">{value.category}</p> 
       <p class="card-text">{value.description}</p> 
       <p class="card-text">{value.prepaidby}</p> 
       <td>   <button onClick={()=>{Deleteapicall(value._id)}}   className="btn btn-danger">Delete</button></td>
      
        
      </div>
    </div>
  </div>
</div>
  </div>

})}



                </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Viewall