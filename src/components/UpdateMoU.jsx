import React, {useState, useEffect} from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams} from "react-router-dom";
import {IoChevronForwardOutline, IoCloudUpload} from "react-icons/io5";
import { Link } from "react-router-dom";


const UpdateMoU = () => {
  
  const [no_mou, setNo_mou] = useState("");
  const [tentang, setTentang] = useState("");
  const [mitra, setMitra] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [file, setFile] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();
  

  useEffect(()=> {
    const getMouById = async () => {
      try {
        const response = await axios.get(`http://localhost:5006/mou/${id}`)
        setNo_mou(response.data.no_mou);
        setTentang(response.data.tentang);
        setMitra(response.data.mitra);
        setKeterangan(response.data.keterangan);
        setFile(response.data.file);
      } catch (error) {
        if(error.response) {
          setMsg(error.response.data.msg);
       }
      }
    }
    getMouById();
  }, [id]);
  
  const UpdateMoU = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5006/mou/${id}`,{
        no_mou,
        tentang,
        mitra,
        keterangan,
        file
       
    });
    navigate("/mou");
    } catch (error) {
      if(error.response) {
      setMsg(error.response.data.msg);
    }
   }
   }
  return(
    <div 
    className="hero is-fullheight"
    style={{ marginLeft: "200px", padding: "70px" }}>
        <div className="card is-shadowless">
          <div className="card-content">
            <NavLink to={"/mou"}><button type="submit" className="button is-info">Kembali</button></NavLink>
            <br/>
            <br/>
            <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
              <ul>
               <Link to="/mou/"><li >MoU<IoChevronForwardOutline/></li></Link>
               <li class="is-active">Addnew</li>
              </ul>
            </nav>
            <h1 className='title'>MoU</h1>
            <h2 className='subtitle'>Masukkan biodata perusahaan</h2>
            <div className="content">
            <form onSubmit={UpdateMoU}>
            <p className='has-text-centered'>{msg}</p>
                <div className="field">
                  <label className="label">No MoU</label>
                    <div className="control">
                      <input type="text" className="input" value={no_mou} onChange={(e) => setNo_mou(e.target.value)} placeholder="..."/>
                    </div>
                  <label className="label">Tentang</label>
                    <div className="control">
                      <input type="text" className="input" value={tentang} onChange={(e) => setTentang(e.target.value)} placeholder="..." />
                    </div>
                    <br/>
                  <label className="label">Mitra</label>
                    <div className="control" >
                      <input type="text" className="input" value={mitra} onChange={(e) => setMitra(e.target.value)} placeholder="..." />
                    </div>
                  <label className="label">Keterangan</label>
                    <div className="control">
                      <textarea name="" id="" cols="10" rows="10" value={keterangan} onChange={(e) => setKeterangan(e.target.value)}></textarea>
                    </div>
                    <br />
                  <label className="label">Import PDF</label>
                    <div class="file is-small" value={file} onChange={(e) => setFile(e.target.value)}>
                      <label class="file-label">
                        <input class="file-input" type="file" name="resume"></input>
                        <span class="file-cta">
                        <IoCloudUpload/><span class="file-label" >Choose a file…</span>
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
  );
};

export default UpdateMoU;