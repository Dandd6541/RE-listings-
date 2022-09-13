export default function() {

    <>
    <h1>Create Lisiting</h1> 
    
    <form onSubmit={addListing} className="NewListingForm"> 
      
      <input type='text' value={newListing.price} name="price" onChange={handleChange}></input>
      <label>Price:</label>
      
      <input type='text' value={newListing.address} name="address" onChange={handleChange}></input>
      <label>Address:</label>
     
      <input type="text" value={newListing.description} name="description" onChange={handleChange} /> 
      <label>Description:</label>
      
      <ul>
      <button type="submit" >Edit Lisitng</button>
      </ul>
    </form>
    </>
    return <h1>Hello shalom  </h1>
}