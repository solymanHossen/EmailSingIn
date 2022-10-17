
import './App.css';
import { signInWithGoogle } from './firebaseAuth';

function App() {
  const img1=localStorage.getItem("profilePic")
 
  
  return (
    <div className="App">
      <div >
        <button className="singIn" onClick={signInWithGoogle}>SingIn</button>
      </div>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={img1}></img>
   
    </div>
  );
}

export default App;
