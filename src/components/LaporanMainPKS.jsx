import React, {useState, useEffect}from "react";
import axios from "axios";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LaporanMainPKS = () => {
  const [laporanpks, setLaporanpks] = useState([]);

  useEffect(()=> {
    getLaporanPkss();
  }, []);


  const getLaporanPkss = async () => {
    const response = await axios.get("http://localhost:5006/laporanpks");
    setLaporanpks(response.data);
  }

  const deleteLaporanPks= async (LaporanpksId)=> {
    await axios.delete(`http://localhost:5006/laporanpks/${  LaporanpksId}`)
    getLaporanPkss();
  }
  return(
    <div
      className="hero is-fullheight"
      style={{ marginLeft: "200px", padding: "70px", overflow:"auto"}}>
      <div className="columns mt-1 is-centered">
        <div className="column is-full">
          <h1 className="title">Laporan PKS</h1>
          {/* <h2 className="subtitle">biodata perusahaan</h2> */}
          <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
            <ul>
              <li class="is-active">
                Laporan PKS
                <IoChevronForwardOutline />
              </li>
              <Link to="/laporanpks/addnewlaporanpks">
                <li>Addnew</li>
              </Link>
            </ul>
          </nav>
          <Link to="/laporanpks/addnewlaporanpks" className="button is-primary mb-2">
            Add New
          </Link>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>No MoU</th>
                <th>No PKS</th>
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
            {laporanpks.map((Laporanpks, index)=> (
                <tr key={Laporanpks.uuid}>
                  <td>{index + 1}</td>
                  <td>{Laporanpks.no_mou}</td>
                  <td>{Laporanpks.no_pks}</td>
                  <td>{Laporanpks.tentang}</td>
                  <td>{Laporanpks.pic}</td>
                  <td>{Laporanpks.no_telp}</td>
                  <td>{Laporanpks.email}</td>
                  <td>{Laporanpks.keterangan}</td>
                  <td>{Laporanpks.file}</td>
                <td>
              <Link to={`/laporanpks/addnewlaporanpks/updatelaporanpks/${Laporanpks.uuid}`} className='button is-small is-info'>Edit</Link>
               <button onClick={()=> deleteLaporanPks(Laporanpks.uuid)} className='button is-small is-danger'>Delete</button>
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