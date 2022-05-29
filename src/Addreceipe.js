import React from 'react'

const Addreceipe = () => {
  return (
    <div><div class="Container">
    <div class="row g-3">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-5">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Receipe Title</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Category</label>
                   <select class="form-control">
                       <option value="">Veg</option>
                       <option value="">Non-veg</option>

                   </select>
                    
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <textarea name="" id="" cols="30" rows="8">Description</textarea>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Prepaid By</label>
                    <input type="text" class="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  className="btn btn-success">Submit</button>
                </div>
              
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addreceipe