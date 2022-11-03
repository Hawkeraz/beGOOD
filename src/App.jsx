import "./App.scss";
import Valoran from "./Valoran";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <div>
      <Valoran />
      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
}

export default App;
