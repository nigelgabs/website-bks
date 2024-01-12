import React, {useState, useEffect} from 'react'
import { NavLink, useNavigate, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from "axios";
import {IoCloudUpload, IoChevronForwardOutline} from 'react-icons/io5'

export const UpdateLapMOU = () => {
  const [no_mou, setNo_mou] = useState("");
  const [tentang, setTentang] = useState("");
  const [pic, setPic] = useState("");
  const [no_telp, setNo_telp] = useState("");
  const [email, setEmail] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [file, setFile] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();
  

  useEffect(()=> {
    const getLaporanMouById = async () => {
      try {
        const response = await axios.get(`http://localhost:5006/laporanmou/${id}`)
        setNo_mou(response.data.no_mou);
        setTentang(response.data.tentang);
        setPic(response.data.pic);
        setNo_telp(response.data.no_telp);
        setEmail(response.data.email);
        setKeterangan(response.data.keterangan);
        setFile(response.data.file);
      } catch (error) {
        if(error.response) {
          setMsg(error.response.data.msg);
       }
      }
    }
    getLaporanMouById();
  }, [id]);
  
  const updateLaporanMou = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5006/laporanmou/${id}`,{
        no_mou: no_mou,
        tentang: tentang,
        pic: pic,
        no_telp: no_telp,
        email: email,
        keterangan: keterangan,
        file: file
       
    });
    navigate("/laporanmou");
    } catch (error) {
      if(error.response) {
      setMsg(error.response.data.msg);
    }
   }
   }
  return (
    <div 
    className="hero is-fullheight"
    style={{ marginLeft: "200px", padding: "70px" }}>
      <div className="card is-shadowless">
          <div className="card-content">
            <NavLink to={"/laporanmou"}><button type="submit" className="button is-info">Kembali</button></NavLink>
            <br/>
            <br/>
            <h1 className='title'>Laporan MOU</h1>
            <h2 className='subtitle'>Masukkan Soft File dokumen</h2>
            <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
              <ul>
                <Link to="/laporanmou/"><li>Laporan MOU</li></Link>
                <li class="is-active"><IoChevronForwardOutline/>Addnew</li>
              </ul>
            </nav>
            <div className="content">
            <form onSubmit={updateLaporanMou} style={{marginLeft:"-100px"}}>
            <p className='has-text-centered'>{msg}</p>
                <div className="field">
                  <label className="label">No MOU</label>
                      <div class="field is-grouped">
                        <p class="control is-expanded">
                          <input class="input" type="text" className="input" value={no_mou} onChange={(e) => setNo_mou(e.target.value)} placeholder="Find PKS"/>
                        </p>
                        {/* <p class="control">
                          <a class="button is-info">
                            Search
                          </a>
                        </p> */}
                      </div>
                  <label className="label">Tentang</label>
                    <div className="control">
                      <input type="text" className="input" value={tentang} onChange={(e) => setTentang(e.target.value)}placeholder="..."/>
                    </div>
                  <label className="label">PIC</label>
                    <div className="control">
                      <input type="text" className="input" value={pic} onChange={(e) => setPic(e.target.value)}  placeholder="Atas Nama" />
                    </div>
                  <label className="label">Nomor Telp</label>
                    <div className="control">
                    <input type="tel" id="phone" name="phone" className="input" value={no_telp} onChange={(e) => setNo_telp(e.target.value)} placeholder="+628..."/>
                    </div>
                    <br/>
                  <label className="label">Email</label>
                    <div className="control">
                      <input type="email"  id="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" />
                    </div>
                  <br/>
                  <label className="label">Keterangan</label>
                    <div className="control">
                      <textarea name="" id="" cols="10" rows="10" value={keterangan} onChange={(e) => setKeterangan(e.target.value)}></textarea>
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

export default UpdateLapMOU;