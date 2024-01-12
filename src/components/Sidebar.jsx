import React from "react";
import { NavLink } from "react-router-dom";



const Sidebar = () => {

  return (
<div class="sidebar">
        <ul>
          <li>
            <NavLink to={"/Dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/mou"}>MoU</NavLink>
          </li>
          <li>
            <NavLink to={"/pks"}>PKS</NavLink>
          </li>
          <li>
            <NavLink to={"/laporanpks"}>Laporan PKS</NavLink>
          </li>
          <li>
            <NavLink to={"/laporanmou"}>Laporan MOU</NavLink>
          </li>
          <li>
            <NavLink to={"/laporantahunanmou"}>Laporan Tahunan</NavLink>
          </li>
          {/* <li>
            <NavLink to={"/laporanbulananmou"}>Laporan Bulanan</NavLink>
          </li>
          <li>
            <NavLink to={"/laporanmingguanmou"}>Laporan Mingguan</NavLink>
          </li> */}
        </ul>
</div>
  );
}

export default Sidebar;