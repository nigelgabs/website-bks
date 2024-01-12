import React, {useEffect} from 'react'
import PKSLaporan from "../components/PKSLaporan";
import Layout from './Layout'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

export const LaporanPKS = () => {
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
  return (
    <Layout>
      <PKSLaporan/>
    </Layout>
  )
}

export default LaporanPKS
