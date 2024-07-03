import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import FetchItems from '../components/FetchItems'
import { useSelector } from "react-redux";
import LoadingSpinner from '../components/LoadingSpinner'
// import HomeItem from "./components/HomeItem";

function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.currentlyFetching ? <LoadingSpinner></LoadingSpinner> : <Outlet></Outlet>}
      
   <Footer></Footer>
    </>
  )
}

export default App
