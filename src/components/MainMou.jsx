import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoChevronForwardOutline} from "react-icons/io5"
const MainMou = () => {
  const [mou, setMou] = useState([]);

  useEffect(()=> {
    getMous();
  }, []);


  const getMous = async () => {
    const response = await axios.get("http://localhost:5006/mou");
    setMou(response.data);
  }

  const deleteMou= async (MouId)=> {
    await axios.delete(`http://localhost:5006/mou/${MouId}`)
    getMous();
  }
  return (
  <div
    className="hero is-fullheight"
    style={{ marginLeft: "200px", padding: "70px" }}>
    <div class="card-is-shadowless">
      <div className="columns mt-5 is-centered">
        <div className="column is-full">
          <h1 className="title">MoU</h1>
          <h2 className="subtitle">biodata perusahaan</h2>
          <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
            <ul>
              <li class="is-active">MoU<IoChevronForwardOutline/></li>
              <Link to="/mou/addnew"><li>Addnew</li></Link>
            </ul>
          </nav>
          <Link to="/mou/addnew" className="button is-primary mb-2">
            Add New
          </Link>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>No Mou</th>
                <th>Tentang</th>
                <th>Mitra</th>
                <th>Keterangan</th>
                <th>File</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mou.map((Mou, index)=> (
                <tr key={Mou.uuid}>
                  <td>{index + 1}</td>
                  <td>{Mou.no_mou}</td>
                  <td>{Mou.tentang}</td>
                  <td>{Mou.mitra}</td>
                  <td>{Mou.keterangan}</td>
                  <td>{Mou.file}</td>
                <td>
              <Link to={`/mou/addnew/editmou/${Mou.uuid}`} className='button is-small is-info'>Edit</Link>
               <button onClick={()=> deleteMou(Mou.uuid)} className='button is-small is-danger'>Delete</button>
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
            <a class="pagination-previous is-disabled" title="This is the first page">Previous</a>
            <a class="pagination-next">Next page</a>
            <ul class="pagination-list">
              <li>
                <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
              </li>
              <li>
                <a class="pagination-link" aria-label="Goto page 2">2</a>
              </li>
              <li>
                <a class="pagination-link" aria-label="Goto page 3">3</a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default MainMou;
