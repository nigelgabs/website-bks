import React, {useState} from 'react';
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import {IoCloudUpload, IoChevronForwardOutline} from 'react-icons/io5'


export const PKSLaporan = () => {
  const [no_mou, setNo_mou] = useState("");
  const [no_pks, setNo_pks] = useState("");
  const [tentang, setTentang] = useState("");
  const [pic, setPic] = useState("");
  const [no_telp, setNo_telp] = useState("");
  const [email, setEmail] = useState("");
  const [Keterangan, setKeterangan] = useState("");
  const [file, setFile] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveLaporanPks = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5006/laporanpks',{
      no_mou: no_mou,
      no_pks: no_pks,
      tentang: tentang,
      pic: pic,
      no_telp: no_telp,
      email: email,
      Keterangan: Keterangan,
      file: file
    });
    navigate("/laporanpks");
    } catch (error) {
      setMsg(error.response.data.msg);
    }
   }
  return (
    <div 
    className="hero is-fullheight"
    style={{ marginLeft: "200px", padding: "70px" }}>
      <div className="card is-shadowless">
          <div className="card-content">
            <NavLink to={"/laporanpks"}><button type="submit" className="button is-info">Kembali</button></NavLink>
            <br/>
            <br/>
            <h1 className='title'>Laporan PKS</h1>
            <h2 className='subtitle'>Masukkan Soft File dokumen</h2>
            <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
              <ul>
                <Link to="/laporanpks/"><li>Laporan PKS</li></Link>
                <li class="is-active"><IoChevronForwardOutline/>Addnew</li>
              </ul>
            </nav>
            <div className="content">
            <form onSubmit={saveLaporanPks}>
            <p className='has-text-centered'>{msg}</p>
                <div className="field">
                  <label className="label">No MoU</label>
                        <div class="field is-grouped">
                          <p class="control is-expanded">
                            <input class="input" type="text" className="input" value={no_mou} onChange={(e) => setNo_mou(e.target.value)} placeholder="....."/>
                          </p>
                        </div>
                  <label className="label">No PKS</label>
                      <div class="field is-grouped">
                        <p class="control is-expanded">
                          <input class="input" type="text" className="input" value={no_pks} onChange={(e) => setNo_pks(e.target.value)} placeholder="....."/>
                        </p>
                      </div>
                  <label className="label">Tentang</label>
                    <div className="control">
                      <input type="text" className="input" value={tentang} onChange={(e) => setTentang(e.target.value)} placeholder="....."/>
                    </div>
                  <label className="label">PIC</label>
                    <div className="control">
                      <input type="text" className="input" value={pic} onChange={(e) => setPic(e.target.value)}  placeholder="Atas Nama" />
                    </div>
                  <label className="label">Nomor Telp</label>
                    <div className="control">
                    <input type="tel" id="phone" name="phone" className="input" value={no_telp} onChange={(e) => setNo_telp(e.target.value)} placeholder="+628..." required/>
                    </div>
                    <br/>
                  <label className="label">Email</label>
                    <div className="control">
                      <input type="email"  id="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" />
                    </div>
                  <br/>
                  <label className="label">Keterangan</label>
                    <div className="control">
                      <textarea name="" id="" cols="10" rows="10" value={Keterangan} onChange={(e) => setKeterangan(e.target.value)}></textarea>
                    </div>
                  <label className='label'>Import PDF</label>
                    <div class="file is-small" value={file} onChange={(e) => setFile(e.target.value)}>
                      <label class="file-label">
                        <input class="file-input" type="file" name="resume"></input>
                        <span class="file-cta">
                        <IoCloudUpload/><span class="file-label">Choose a file…</span>
                        </span>
                      </label>
                    </div>
                </div>
                  <div className="field">
                    <div className="control">
                      <button type="submit" className="button is-success">Save</button>
                    </div>
                  </div>
                  </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PKSLaporan;