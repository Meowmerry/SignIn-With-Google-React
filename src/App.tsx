import { useState, useEffect } from "react";
import { Hompage } from "./Homepage";
import "./App.css";
import UserAuth from "./UserAuth";
import { auth } from "./firebase";
interface UserAuthSignInProps {
  uid: string | undefined;
  email: string | null | undefined;
}

function App() {
  const [presentUser, setPresentUser] = useState<UserAuthSignInProps | null>(
    null
  );

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentUser({
          uid: user?.uid,
          email: user?.email,
        });
      } else {
        setPresentUser(null);
      }
    });
  }, []);
  return (
    <div className="App">
      <div className="App-header">
        {presentUser ? <Hompage /> : <UserAuth email="" password="" />}
      </div>
    </div>
  );
}

export default App;
