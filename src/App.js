import React from "react";
import NotFound from "./Pages/NotFound";
import TablePKS from "./Pages/TablePKS";
import TableMou from "./Pages/TableMou";
import Landing from "./Pages/Landing";
import NewPKS from "./Pages/NewPKS";
import NewMOU from "./Pages/NewMOU";
import LaporanMainPKS1 from "./Pages/LaporanMainPKS1";
import LaporanPKS from "./Pages/LaporanPKS";
import LaporanMainMOU1 from "./Pages/LaporanMainMOU1";
import LaporanMOU from "./Pages/LaporanMOU";
import MainTahunanMOU from "./Pages/MainTahunanMOU";
import MainTahunanPKS from "./Pages/MainTahunanPKS";
import MoUupdate from "./Pages/MoUupdate";
import PKSUpdate from "./Pages/PKSUpdate";
import LapPKSUpdate from "./Pages/LapPKSUpdate";
import LapMOUupdate from "./Pages/LapMOUupdate";
// import MainBulananMOU from "./Pages/MainBulananMOU";
// import MainBulananPKS from "./Pages/MainBulananPKS";
// import MainMingguanMOU from "./Pages/MainMingguanMOU";
// import MainMingguanPKS from "./Pages/MainMingguanPKS";
import "./style/index.css";
import "./App.css";
import "./style/contact_us.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pks" element={<TablePKS />} />
        <Route path="/pks/addnew" element={<NewPKS />} />
        <Route path="/pks/addnew/editpks/:id" element={<PKSUpdate />} />
        <Route path="/mou" element={<TableMou />} />
        <Route path="/mou/addnew" element={<NewMOU />} />
        <Route path="/mou/addnew/editmou/:id" element={<MoUupdate />} />
        <Route path="/laporanpks" element={<LaporanMainPKS1 />} />
        <Route path="/laporanpks/addnewlaporanpks" element={<LaporanPKS />} />
        <Route path="/laporanpks/addnewlaporanpks/updatelaporanpks/:id" element={<LapPKSUpdate />} />
        <Route path="/laporanmou" element={<LaporanMainMOU1/>} />
        <Route path="/laporanmou/addnewlaporanmou" element={<LaporanMOU/>}/>
        <Route path="/laporanmou/addnewlaporanmou/updatelaporanmou/:id" element={<LapMOUupdate/>}/>
        <Route path="/laporantahunanmou" element={<MainTahunanMOU />} />
        <Route
          path="/laporantahunanmou/laporantahunanpks"
          element={<MainTahunanPKS />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
