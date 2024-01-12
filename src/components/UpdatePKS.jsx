import React, { useState , useEffect} from "react"
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import { IoChevronForwardOutline, IoCloudUpload} from "react-icons/io5"

const UpdatePKS = () => {

  const [no_mou, setNo_mou] = useState("");
  const [no_pks, setNo_pks] = useState("");
  const [tentang, setTentang] = useState("");
  const [mitra, setMitra] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [file, setFile] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();
  

  useEffect(()=> {
    const getPksById = async () => {
      try {
        const response = await axios.get(`http://localhost:5006/pks/${id}`)
        setNo_mou(response.data.no_mou);
        setNo_pks(response.data.no_pks);
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
    getPksById();
  }, [id]);
  
  const updatePks = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5006/pks/${id}`,{
        no_mou: no_mou,
        no_pks: no_pks,
        tentang: tentang,
        mitra: mitra,
        keterangan: keterangan,
        file: file
       
    });
    navigate("/pks")
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
            <NavLink to={"/pks"}><button type="submit" className="button is-info">Kembali</button></NavLink>
            <br/>
            <br/>
            <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
              <ul>
                <Link to="/pks/"><li>PKS</li></Link>
                <li class="is-active"><IoChevronForwardOutline/>Addnew</li>
              </ul>
            </nav>
            <h1 className='title'>PKS</h1>
            <h2 className='subtitle'>Masukkan biodata perusahaan</h2>
            <div className="content">
            <form onSubmit={updatePks}>
            <p className='has-text-centered'>{msg}</p>
                <div className="field">
                  <label className="label">No MoU</label>
                    <div className="control">
                      <input type="text" className="input" value={no_mou} onChange={(e) => setNo_mou(e.target.value)} placeholder="..."/>
                    </div>
                  <label className="label">No PKS</label>
                    <div className="control">
                      <input type="text" className="input" value={no_pks} onChange={(e) => setNo_pks(e.target.value)}placeholder="..."/>
                    </div>
                  <label className="label">Tentang</label>
                    <div className="control">
                      <input type="text" className="input" value={tentang} onChange={(e) => setTentang(e.target.value)}placeholder="..."/>
                    </div>
                  <label className="label">Mitra</label>
                    <div className="control">
                      <input type="text" className="input" value={mitra} onChange={(e) => setMitra(e.target.value)}placeholder="..."/>
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
  ); 
}; 

export default UpdatePKS;