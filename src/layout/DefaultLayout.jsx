import { Outlet } from "react-router-dom";
import Header from "../components/HeaderPrincipal";


function DefaultLayout() {
    return (
        <>
            {<Header /> }
            <Outlet />
            
        </>
    )
   
}
export default DefaultLayout;