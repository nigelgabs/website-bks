import React, {useState, useEffect}from "react";
import axios from "axios";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LaporanMainPKS = () => {
  const [laporanmou, setLaporanmou] = useState([]);

  useEffect(()=> {
    getLaporanMous();
  }, []);


  const getLaporanMous = async () => {
    const response = await axios.get("http://localhost:5006/laporanmou");
    setLaporanmou(response.data);
  }

  const deleteLaporanMou= async (LaporanmouId)=> {
    await axios.delete(`http://localhost:5006/laporanmou/${  LaporanmouId}`)
    getLaporanMous();
  }
  return(
    <div
      className="hero is-fullheight"
      style={{ marginLeft: "200px", padding: "70px", overflow:"auto" }}>
      <div className="columns mt-5 is-centered">
        <div className="column is-full">
          <h1 className="title">Laporan MOU</h1>
          {/* <h2 className="subtitle">biodata perusahaan</h2> */}
          <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
            <ul>
              <li class="is-active">
                Laporan MOU
                <IoChevronForwardOutline />
              </li>
              <Link to="/laporanmou/addnewlaporanmou">
                <li>Addnew</li>
              </Link>
            </ul>
          </nav>
          <Link to="/laporanmou/addnewlaporanmou" className="button is-primary mb-2">
            Add New
          </Link>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>No MOU</th>
                <th>Tentang</th>
                <th>PIC</th>
                <th>No Telp</th>
                <th>Email</th>
                <th>Keterangan</th>
                <th>File</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {laporanmou.map((Laporanmou, index)=> (
                <tr key={Laporanmou.uuid}>
                  <td>{index + 1}</td>
                  <td>{Laporanmou.no_mou}</td>
                  <td>{Laporanmou.tentang}</td>
                  <td>{Laporanmou.pic}</td>
                  <td>{Laporanmou.no_telp}</td>
                  <td>{Laporanmou.email}</td>
                  <td>{Laporanmou.keterangan}</td>
                  <td>{Laporanmou.file}</td>
                <td>
              <Link to={`/laporanmou/addnewlaporanmou/updatelaporanmou/${Laporanmou.uuid}`} className='button is-small is-info'>Edit</Link>
               <button onClick={()=> deleteLaporanMou(Laporanmou.uuid)} className='button is-small is-danger'>Delete</button>
            </td>
            </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          {/* <nav class="pagination" role="navigation" aria-label="pagination">
            <a
              class="pagination-previous is-disabled"
              title="This is the first page">
              Previous
            </a>
            <a class="pagination-next">Next page</a>
            <ul class="pagination-list">
              <li>
                <a
                  class="pagination-link is-current"
                  aria-label="Page 1"
                  aria-current="page">
                  1
                </a>
              </li>
              <li>
                <a class="pagination-link" aria-label="Goto page 2">
                  2
                </a>
              </li>
              <li>
                <a class="pagination-link" aria-label="Goto page 3">
                  3
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </div>
  );
};

export default LaporanMainPKS;