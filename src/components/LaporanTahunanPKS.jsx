import React from "react";
import { Link } from "react-router-dom";

const LaporanMainPKS = () => {
  return(
    <div
      className="hero is-fullheight"
      style={{ marginLeft: "200px", padding: "70px" }}>
      <div className="columns mt-5 is-centered">
        <div className="column is-full">
          <h1 className="title">Laporan Tahunan PKS</h1>
          <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
            <ul>
              <Link to="/laporantahunanmou">
                <li>MoU</li>
              </Link>
              <li class="is-active">
                PKS
              </li>
            </ul>
          </nav>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                {/* <th>Dokumen</th> */}
                <th>Tentang</th>
                <th>Nomor</th>
                <th>Bulan</th>
                <th>Tahun</th>
                <th>Mitra</th>
                <th>Dari tgl</th>
                <th>Sampai tgl</th>
                <th>Status</th>
                <th>File</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
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
                <td></td>   
                <button class="button is-info">Edit</button>
                <button class="button is-danger">Hapus</button>   
              </tr>
            </tbody>
          </table>
          <nav class="pagination" role="navigation" aria-label="pagination">
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default LaporanMainPKS;