import React from "react";
import "../style/landing.css";
import "../style/slider.css";
import { Link } from "react-router-dom";
import EnjiniringImage from "../img/Enjiniring.jpg";
// import PLNImage from "../img/IT-PLN.png";
import KominfoImage from "../img/Kominfo.jpg";
import PIIimage from "../img/Penandatanganan_PII.jpg";
import UndipImage from "../img/UNDIP.jpg";
import bks from "../img/bkss.jpg";

function LandingPage() {
  return (
    <div class="all">
      <div class="main" id="Home">
        <header>
          <div class="navigation">
            <h1>BKS | IT-PLN</h1>
            <a href="#Home"><h2>Home</h2></a>
            <a href="#Tentang"><h2>Tentang</h2></a>
            <a href="#Organisasi"><h2>Stuktur</h2></a>
            <a href="#contactUs"><h2>Contact</h2></a>
            <div class="button">
              <Link to="/Login">
                <button class="btn1">Login</button>
              </Link>
              <Link to="/Register">
                <button class="btn2">Daftar</button>
              </Link>
            </div>
          </div>
        </header>
      </div>

      <div id="Tentang">
    <div class="about">
    <h1>About Us</h1>
      <div class="myabout">
        <div class="main1">
          <h2>BKS (Bagian Kerja Sama) </h2>
          <p>Divisi dalam suatu perusahaan yang mengurus Kerja Sama</p>
          <p>dengan perusahaan lain baik itu dibidang Akademik dan non Akademik</p>
        </div>         
        <div class="main2">
          <h2>MOU</h2>
          <p>Nota Kesepakatan yang dibuat sebagai langkah awaln dalam membuat</p>
          <p>kontrak kerjasama atau perjanjian yang lebih mengikat antara dua belah pihak</p>
        </div>
        <div class="main3">
          <h2>PKS</h2>
          <p>perjanjian utama yang memuat ketentuan mengenai bagaimana suatu</p>
          <p>kerja sama tersebut dijalankan termasuk hak dan kewajiban para pihak.</p>
        </div>
      </div>
      <div class="about2">
        <div class="main-slider">
          <section>
            <div class="wrapper">
              <div class="slides">
                <span id="slides-1"></span>
                <span id="slides-2"></span>
                <span id="slides-3"></span>
                <span id="slides-4"></span>
                <div class="images">
                  <img src={EnjiniringImage} alt="enjiniring" />
                  <img src={KominfoImage} alt="kominfo" />
                  <img src={PIIimage} alt="PII" />
                  <img src={UndipImage} alt="Undip" />
                </div>
                <div class="slider">
                  <a href="#slides-1">1</a>
                  <a href="#slides-2">2</a>
                  <a href="#slides-3">3</a>
                  <a href="#slides-4">4</a>
                </div>
              </div>
            </div>
          </section> 
        </div>
      </div>
      <div class="about3">
        <div class="visi">
          <h2>Visi</h2>
          <p>Menjadi Perguruan Tinggi yang berkelas internasional, modern, mandiri, dan unggul</p>
          <p>di Bidang Energi dan Teknologi yang berwasan lingkungan</p>
        </div>
        <div class="misi">
          <h2>Misi</h2>
          <li>
            Menyelenggarakan program pendidikan akademik dan vokasi yang modern, mandiri, dan unggul 
            dengan tata kelola yang baik dan berstandar internasional.
          </li>
          <li>
            Menyelenggarakan penelitian terapan yang berfokus pada energy dan Teknologi berwawasan lingkungan 
            untuk kesejahteraan manusia.
          </li>
          <li>
            Melaksanakan Pengabdian Kepada Masyarakat (PKM) dalam bentuk pembinaan, pelatihan, konsultasi, 
            dan pemberdayaan Masyarakat.
          </li>
          <li>
            Membangun kerjasama dengan berbagai pihak dalam skala nasional maupun internasional, dalam rangka memastikan 
            <i> continous improvement</i> dan keberlangsungan kualitas <i>output</i> produk dan layanan.
          </li>
          <li>
            Berkonstribusi bagi Negeri dalam menciptakan sumber daya manusia yang berakhlak dan berdaya saing tinggi.
          </li>
        </div>
      </div> 
    </div>
    <div id="Organisasi" class="Organisasi">
      <div class="judul">
        <h1>Stuktur Organisasi</h1>
      </div>
      <div class="struktur">
        <img src={bks}/>
      </div>
    </div>
    
  </div>
      <div id="contactUs">
      <section class="header1">
        <h1>Contact Us</h1>
      </section>
      <section class="box-contact">
        <h2>Contact Information</h2>
        <p>
          Jika ada pertanyaan lebih lanjut, silahkan menghubungi kami lewat
          platform yang tersedia
        </p>
        <ul>
          <li>
            Email:
            <a href="mailto: kerjasama@itpln.ac.id">
                    {" "}
                    kerjasama@itpln.ac.ids
                  </a>
                </li>
                <li>
                  Phone: <a href="tel:(021)544042/44">(021)5440342/44 </a>
                </li>
              </ul>
            </section>
            <section class="box-form">
              <form action="submit_contact_form.php" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label for="message">Message:</label>
                <br />
                <textarea id="message" name="message" rows="4" required></textarea>
                <br />
                <input type="submit" value="Submit" />
              </form>
            </section>
            <footer>&copy; 2023 Bagian KerjaSama IT-PLN</footer>
    </div> 
    </div>
  );
}

export default LandingPage;

