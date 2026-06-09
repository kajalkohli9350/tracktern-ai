function AddApplication() {
    const [formData,
setFormData]
=
useState({

 companyName:"",
 role:"",
 status:"Applied"

});
const handleChange =
(e)=>{

 setFormData({

  ...formData,

  [e.target.name]:
  e.target.value

 });

}
const handleSubmit =
async(e)=>{

 e.preventDefault();

 await axios.post(

 "http://localhost:5000/api/applications/add",

 formData

 );

 alert(
 "Application Added"
 );

}
    return (
        <div className="add-application">
            <h2>Add Application</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Company Name:</label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                         <option value="Rejected">Rejected</option>
                    </select>
                </div>
                <button type="submit">Add Application</button>
            </form>
        </div>
    );
}

export default AddApplication;