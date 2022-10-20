import "./App.css";
import Valoran from "./Valoran";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Valoran />
      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
}

export default App;
