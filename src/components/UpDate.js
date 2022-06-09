import { Button, DialogActions, DialogContent, TextField } from '@mui/material';
import './User.css'

const UpDate = ({
  handleCloser, 
  setPhone,
  setEmail,
  setWebsite,
  setName,
  setUserName,
  username,
  name,
  phone,
  email,
  website,
  updateUser }) => {

    return (

<>
<div className="updatepopup">
  <div className='buttonside'> 
  <h2>Edit User</h2>
<Button onClick={handleCloser}>X</Button>
</div>
<DialogContent>
{/* 
                <div><TextField id="outlined-basic" placeholder="Id" style={{ width: "400px", padding: "2px 2px 2px 2px" }} /></div>
                <div><TextField id="outlined-basic" placeholder="Action" style={{ width: "400px", padding: "2px 2px 2px 2px" }} /></div> */}
                <div><TextField id="outlined-basic" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Name" style={{ width: "400px", padding: "2px 2px 2px 2px" }} /></div>
                <div><TextField id="outlined-basic" onChange={(e) => { setUserName(e.target.value) }} value={username} placeholder="UserName"  style={{ width: "400px", padding: "2px 2px 2px 2px" }} /></div>
                <div><TextField id="outlined-basic" onChange={(e) => { setPhone(e.target.value) }} value={phone} placeholder="Phone" name="phone" style={{ width: "400px", padding: "2px 2px 2px 2px" }} /></div>
                <div><TextField id="outlined-basic" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Email" name="email" style={{ width: "400px", padding: "2px 2px 2px 2px" }} /></div>
                <div><TextField id="outlined-basic" onChange={(e) => { setWebsite(e.target.value) }} value={website} placeholder="Website" name="website" style={{ width: "400px", padding: "2px 2px 2px 2px" }} /></div>
</DialogContent>
<DialogActions>
                <div><button onClick={updateUser}>update</button></div>
                    <button onClick={handleCloser} >X Cancel</button>
                </DialogActions>
                </div>
</>

    )

}
export default UpDate;