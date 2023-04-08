import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { get_api } from "./ducks/Actions";
import { BrowserRouter, Route , Switch} from "react-router-dom";
import { useEffect } from "react";
//component
import { Nav } from "./components/Nav";
import { AppCont } from "./components/AppCont";
import { GameDetail } from "./components/GameDetail";
import { Formulario } from "./components/Formulario";
function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    // if(state){
    //   return
    // }
    dispatch(get_api());
  }, []);
  return (
    
      <BrowserRouter>
        <Nav></Nav>
      <Switch>
        <Route path={"/formulario"} component={Formulario}>
         
        </Route>
        <Route path={"/:id"} component={GameDetail}></Route>
        <Route path={"/"} component={AppCont}>
       
        </Route>
        </Switch>
      </BrowserRouter>
  
  );
}

export default App;
