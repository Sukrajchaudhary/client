import React, { useState } from 'react'


const UploadData = () => {
  const[loadind,setLoading]=useState(false)
  const[error,setError]=useState("")
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'category') {
      setCategory(value);
    } else if (name === 'price') {
      setPrice(value);
    } else if (name === 'image') {
      setImage(files[0]);
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const formData = new FormData();
      formData.append('name', name);
      formData.append('category', category);
      formData.append('price', price);
      formData.append('image', image);
      const response = await fetch('http://localhost:500/api/creatPost',{
        method:"Post",
        body:formData
      });
      const data = response.json();
      console.log(data)

    } catch (error) {
      setError(error)
    }
  }
// 

if(loadind){
  return (
<div className="alert alert-success" role="alert">
  Please Wait Data Is Submitting.............
</div>
  );
}
setTimeout(() => {
  setLoading(false)
}, 3000);

if(error){
  return(
    <p>Some Errors Occurs</p>

  );
}
  return (
    <>
      <div className="form ">
        <p className='text-center'>Please Enter Details....</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Enter Product Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Product Name" name="name" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Enter Price</label>
            <input type="text" className="form-control" id="price" placeholder="Enter Price" name="price" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Enter Category</label>
            <input type="text" className="form-control" id="category" placeholder="Enter Category" name="category" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Please Choose a File..</label>
            <input className="form-control" type="file" name="image" onChange={handleChange} />
          </div>
          <button type='submit' className='btn btn-success btn-sm'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default UploadData
