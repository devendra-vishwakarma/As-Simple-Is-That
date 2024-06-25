import AddUser from "./Component/AddUser";
import AllUsers from "./Component/AllUsers";
import  {Route,Routes} from "react-router-dom";
import EditUser from "./Component/EditUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllUsers/>}/>
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/editUser" element={<EditUser/>}/>
      </Routes>
    </>
  );
}

export default App;
