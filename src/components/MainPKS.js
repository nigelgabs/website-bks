import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/PKS.css";
import { IoChevronForwardOutline } from "react-icons/io5";

const MainPKS = () => {

  const [pks, setPks] = useState([]);

  useEffect(()=> {
    getPkss();
  }, []);


  const getPkss = async () => {
    const response = await axios.get("http://localhost:5006/pks");
    setPks(response.data);
  }

  const deletePks= async (PksId)=> {
    await axios.delete(`http://localhost:5006/pks/${PksId}`)
    getPkss();
  }
  return (
    <div
      className="hero is-fullheight"
      style={{ marginLeft: "200px", padding: "70px" }}>
      <div className="columns mt-5 is-centered">
        <div className="column is-full">
          <h1 className="title">PKS</h1>
          <h2 className="subtitle">biodata perusahaan</h2>
          <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
            <ul>
              <li class="is-active">
                PKS
                <IoChevronForwardOutline />
              </li>
              <Link to="/pks/addnew">
                <li>Addnew</li>
              </Link>
            </ul>
          </nav>
          <Link to="/pks/addnew" className="button is-primary mb-2">
            Add New
          </Link>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>No MoU</th>
                <th>No PKS</th>
                <th>Tentang</th>
                <th>Mitra</th>
                <th>Keterangan</th>
                <th>File</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {pks.map((Pks, index)=> (
                <tr key={Pks.uuid}>
                  <td>{index + 1}</td>
                  <td>{Pks.no_mou}</td>
                  <td>{Pks.no_pks}</td>
                  <td>{Pks.tentang}</td>
                  <td>{Pks.mitra}</td>
                  <td>{Pks.keterangan}</td>
                  <td>{Pks.file}</td>
                <td>
              <Link to={`/pks/addnew/editpks/${Pks.uuid}`} className='button is-small is-info'>Edit</Link>
               <button onClick={()=> deletePks(Pks.uuid)} className='button is-small is-danger'>Delete</button>
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

export default MainPKS;
