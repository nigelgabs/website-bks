import { FaSearch } from "react-icons/fa";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import swal from "sweetalert";
import { useDispatch} from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {

  // const Handclick = () => {
  //   swal({
  //     title: "Apakah anda yakin ingin keluar?",
  //     text: "Jika anda keluar, maka harus login kembali",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   })
  //   .then((Keluar) => {
  //     if (Keluar) {
  //       swal("Terima Kasih", {
  //         icon: "success",
  //       });
  //     } 
  //   });
  // }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
   dispatch(LogOut());
   dispatch(reset());
   navigate("/");
  };



  return (
    <div class="container" style={{ marginRight:"300px" }}>
      <div class="topbar">
        <div class="logo">
          <NavLink to={"/dashboard"}> 
          <h2 className="menu-label title">BKS | Admin</h2>
           </NavLink>
        </div>
        <div class="search">
          <input type="text" name="search" placeholder="Search Here..." />
          <i>
            <FaSearch class="search" />
          </i>
        </div>
        <i class="fas fa-bell"></i>
        <button class="button is-danger" onClick={logout}>Keluar</button>
      </div>
    </div>
)
}

export default Navbar;
