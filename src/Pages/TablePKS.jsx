import React, {useEffect} from "react";
import  MainPKS from "../components/MainPKS"
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";


const TableMou  = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state => state.auth));

  useEffect(() => {
    dispatch(getMe());
  },[dispatch]);

  useEffect(() => {
  if(isError){
    navigate("/");
  }
  },[isError, navigate]);
  return(
    <Layout>
      <MainPKS/>
   </Layout>
  );
}

export default TableMou;