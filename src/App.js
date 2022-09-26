import './App.css';
import {useState} from "react";
import Input from "./components/input/Input";
import Button  from "./components/button/Button";
import Form from "./components/form/Form";

function App() {

const [user,setUser] = useState({name: "", password:""});

const handleChange = (e) =>{
    if (e.target.type==="text"){
        setUser({...user,name: e.target.value});
        console.log(user);
    }else if(e.target.type==="password"){
        setUser({...user,password: e.target.value});
        console.log(user);
    }
}
const handleClick =()=>{
    if (user.name===""){
        alert("Kullanıcı adını boş bırakmayınız");
    }
    else if(user.password===""){
        alert("Şifreyi boş bırakmayınz")
    }
    else{
        alert("Kullanıcı adı:"+user.name+" "+"Parolanız:"+user.password);
    }
}

  return (
    <div className="App">
     <h2>Giriş Formu</h2>
        <Form>
        <Input type={"text"} placeHolder={"Kullanıcı adınız"}  value={user.name} onChange={handleChange}/>
        <Input type={"password"} placeHolder={"Parolanız"} value={user.password} onChange={handleChange} />
        <Button onClick={handleClick}/>
        </Form>
    </div>
  );
}

export default App;
