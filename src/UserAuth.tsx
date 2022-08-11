import React, { FunctionComponent, useState } from "react";
import { auth } from "./firebase";
import "./App.css";

interface UserAuthProps {
  email: string;
  password: string;
}

const UserAuth: FunctionComponent<UserAuthProps> = () => {
  const [data, setData] = useState<UserAuthProps>({ email: "", password: "" });
  const { email, password } = data;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const signUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((user)=> console.log(user))
    .catch((err)=> console.log(err))
  };
  const signIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((user)=> console.log(user))
    .catch((err)=> console.log(err))
  };
  return (
    <div className="App">
      <div>
        <form>
          <div>SignIn Form with Google </div>
          <br />
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label>username</label>
            </div>
            <input
              onChange={changeHandler}
              type="email"
              name="email"
              value={email}
              className="form-control"
              placeholder="email"
            />
            <div className="col-auto">
              <label>password</label>
            </div>
            <input
              onChange={changeHandler}
              type="password"
              value={password}
              name="password"
              className="form-control"
              placeholder="password"
            />
          </div>
          <br />
          <button
            style={{ width: 90 }}
            type="submit"
            onClick={signIn}
            className="btn btn-primary"
          >
            Sign In
          </button>{" "}
          &nbsp;
          <button
            style={{ width: 90 }}
            onClick={signUp}
            type="submit"
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAuth;
