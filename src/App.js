import React, { useEffect, useState } from 'react';
import User from './components/User';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@mui/material/Modal';
import { Button, TextField, Typography } from '@mui/material';
import AddId from './components/AddId';
import './App.css';
import UpDate from './components/UpDate';
const HomePage = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [userId, setUserId] = useState(null);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (id, name, username, phone, email, website) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        id:id,
        name: name,
        username: username,
        phone: phone,
        email: email,
        website: website
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  function onSelectUser(id) {
    let user = users[id - 1];
    setName(user.name)
    setUserName(user.username)
    setPhone(user.phone)
    setEmail(user.email)
    setWebsite(user.website)
    setUserId(user.id)

  }

  const updateUser = () => {
const user={name,username,phone,email,website}
console.log("user", user);
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
method:'PATCH',
headers:{
  'Accept':'application/json',
  'Content-Type':'application/json'
},
body:JSON.stringify(user)
}).then((result) => {
  result.json().then((resp) => {
    console.log(resp)
    fetchData()
  })
})

  }

  const [isAddIdOpen, setAddIdState] = useState(false);
  const handleAddId = () => setAddIdState(false);

  const [isUpDateOpen, setUpDateState] = useState(false);
  const heandleUpDate = () => {
    setUpDateState(false);
  }
  const [val, setVal] = useState();

  return (
    <div style={{ width: "100%", textAlign:"center  " }}>
      <h1 >React-App</h1>
      <div style={{ textAlign: 'right' }} >
        <button className='product_btns' onClick={() => setAddIdState(true)}><AddIcon /></button>
      </div>
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <table className='data user-data'  style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Action</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Website</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th><Typography id="outlined-basic" placeholder="Id" style={{ width: "167.5px", padding: "2px 2px 2px 2px" }} /></th>
                <th><Button onClick={() =>updateUser()} style={{ }}>Update</Button>
                <Button onClick={() => setVal(() => "")}>Cancel</Button></th>
                <th><TextField id="outlined-basic" required onChange={(e) => { setName(e.target.value) }} value={name}  placeholder="Name" style={{ width: "167.5px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" required onChange={(e) => { setUserName(e.target.value) }} value={username} placeholder="UserName"  style={{ width: "167.5px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" required onChange={(e) => { setPhone(e.target.value) }} value={phone} placeholder="Phone" name="phone" style={{ width: "167.5px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" required onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Email" name="email" style={{ width: "167.5px", padding: "2px 2px 2px 2px" }} /></th>
                <th><TextField id="outlined-basic" required onChange={(e) => { setWebsite(e.target.value) }} value={website} placeholder="Website" name="website" style={{ width: "167.5px", padding: "2px 2px 2px 2px" }} /></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <User
                  id={user.id}
                  key={user.id}
                  name={user.name}
                  username={user.username}
                  phone={user.phone}
                  email={user.email}
                  website={user.website}
                  onDelete={onDelete}
                  onSelectUser={onSelectUser}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        open={isAddIdOpen}
        onClose={() => handleAddId(false)}
      >
        <AddId onAdd={onAdd} handleCloser={() => { handleAddId(false) }} />
      </Modal>
      <Modal
          open={isUpDateOpen}
          onClose={() => heandleUpDate(false)}
        >
          <UpDate updateUser={updateUser}  handleCloser={() => { heandleUpDate (false) }} />
        </Modal>
    </div >
  )
}
export default HomePage;