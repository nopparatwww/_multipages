import { verifyUser } from "../../data/users";
import { useRef } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";

function Login({ setToken ,setRole}) {
  const userRef = useRef();
  const passRef = useRef();
  return (
    <div className="login-container">
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        style={{ textAlign: "center", marginBottom: "1rem" }}
        placeholder="Enter username"
        ref={userRef}
      />
      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        style={{ textAlign: "center" }}
        placeholder="Enter password"
        ref={passRef}
      />
      <button
        className="btn btn-success mt-3"
        onClick={() => {
          const user = userRef.current.value.trim();
          const pass = passRef.current.value.trim();
          userRef.current.value = "";
          passRef.current.value = "";
          const userInfo = verifyUser(user, pass);
          
          if (userInfo === null) {
            alert("Wrong username or password");
            userRef.current.focus();
          }else{
            setToken(userInfo.token)
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
