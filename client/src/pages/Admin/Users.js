import React,{useState,useEffect} from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Chart } from "chart.js";
import Chartadmin from '../Admin/Chartadmin';
import Donut from '../Admin/Donut';
import BarChat from '../Admin/BarChart';
const Users = () => {
  const [auth,setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-5 p-3">
        <div className="row m-3">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          {/* <div className="col-md-9 m-2">
            <h1>All Users</h1>
            <h1>{auth?.user?.name}</h1>
            <h1>hello</h1> */}
            <div className="col-md-9  m-10 ">
          <h1 className="text-center">ADMIN DASHBOARD</h1>
         <div className="w-25  p-3 new ">
         <Chartadmin />
         <Donut/>
         <Chartadmin/>
         <Donut/>
         <Chartadmin/>
         <Donut/>
        <BarChat/>
         </div>
        </div>
          </div>
        </div>
      {/* </div> */}
    </Layout>
  );
};

export default Users;
