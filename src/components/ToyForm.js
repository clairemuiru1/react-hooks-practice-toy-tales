import React ,{useState} from "react";

function ToyForm() {
  const [formData,newFormData]=useState({
    name:"",
    image:""
  })

  const handleInputChange = (e) =>{
    const {name, value} = e.target
    newFormData({
      ...formData,
      [name] : value
    })
  }

  async function newToy(e) {
    e.preventDefault()
    try{
      const response = await fetch ("http://localhost:3001/toys",{
        method : "POST",
        headers: { "Content-Type": "application/json"},
        body:JSON.stringify(formData)
      })
      if(response.ok){
        newFormData({
          name:'',
          image:''
        })
      }else{
        console.log("Failed to create toy")
      }

    } catch (error){
      console.log("Error occured while creating toy:", error)
    }
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={newToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleInputChange}
        />
        <br />
        <button>Create new toy</button>
      </form>
    </div>
  );
}

export default ToyForm;
