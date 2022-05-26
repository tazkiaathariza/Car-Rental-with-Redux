import React from 'react';
import imgCar from "../img/Image/Car.svg";
import iconUser from "../img/Image/icon_users.svg";
import iconSetting from "../img/Image/icon_settings.svg";
import iconCalendar from "../img/Image/icon_calendar.svg";
import cars from "../img/images/car06.min.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function SectionCar() {
  return (

    <div className="section">

      <div id="section1">
                <div className="container-fluid pt-5 landingPage">
                        <div className="row">
                            <div className="col-md-6" id="texthome">
                                <h1><b>Sewa dan Rental Mobil Terbaik di kawasan Surabaya</b></h1>
                                <p>Selamat datang di Binar Car Rental. Kami Menyediakan mobil kualitas terbaik dengan harga terjangkau.Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            </div>
                            <div className="col-md-6 mt-lg-5">
                                <img src={imgCar} id="ImgCar" class="img-fluid"/>
                            </div>
                        </div>
                    </div>
        </div>

    <div className="container position-relative cariMobil">
      <div className="formCariMobil">
        <form id="form" action="">
          <div className="row">

            <div className="col-lg">
              <label for="inputDriver" className="form-label">Tipe Driver</label>
              <select className="form-select" placeholder="Pilih Tipe Driver" id="inputDriver" required>
                <option className="opsi" selected>Pilih Tipe Driver</option>
                <option className="opsi" value="Dengan Sopir">Dengan Sopir</option>
                <option className="opsi" value="Tanpa Sopir">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </div>

            <div className="col-lg">
              <label for="inputDate" className="form-label">Tanggal</label>
              <input type="date" className="form-control" placeholder="Pilih Tanggal" id="inputDate" required/>
            </div>

            <div className="col-lg">
              <label for="inputTime" className="form-label">Waktu Jemput</label>
              <input type="time" id="inputTime" className="form-control" placeholder="00:00"/>
            </div>

            <div className="col-lg">
              <label for="penumpang" className="form-label">Jumlah Penumpang</label>
              <input id="jumlahPenumpang" type="number" className="form-control" placeholder="Jumlah Penumpang" value=""/>
            </div>

            <div className="col-lg">
              <button className="btn btn-success" id="load-btn">Cari Mobil</button>
            </div>

          </div>
        </form>
      </div>
    </div>

    <div className="container my-lg-2">

      <button id="clear-btn" className="btn btn-outline-danger">Hapus Pencarian</button>

      <div id="cars-container" className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-lg-3 row-cols-md-2 g-3 mb-5 mt-3">
      

        {/* <div className="card col-lg-4 cardCars">
          <div className="card-body">
            <img src={cars} className="imageCars"/>
            <div className="txt-Tipe">Nama/Tipe Mobil</div>
            <div className="txt-Harga">Rp 430.000 / hari</div>
            <div className="txt-Caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            <div className="txt-Caption"><img src={iconUser}/>    4 orang</div>
            <div className="txt-Caption"><img src={iconSetting}/>    Manual</div>
            <div className="txt-Caption"><img src={iconCalendar}/>    Tahun 2020</div>
            <button type="submit" className="btn btn-success" id="btn-pilihMobil">Pilih Mobil</button>
          </div>
        </div> 

        <div className="card col-lg-4 cardCars">
          <div className="card-body">
            <img src={cars} className="imageCars"/>
            <div className="txt-Tipe">Nama/Tipe Mobil</div>
            <div className="txt-Harga">Rp 430.000 / hari</div>
            <div className="txt-Caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            <div className="txt-Caption"><img src={iconUser}/>    4 orang</div>
            <div className="txt-Caption"><img src={iconSetting}/>    Manual</div>
            <div className="txt-Caption"><img src={iconCalendar}/>    Tahun 2020</div>
            <button type="submit" className="btn btn-success" id="btn-pilihMobil">Pilih Mobil</button>
          </div>
        </div> 

        <div className="card col-lg-4 cardCars">
          <div className="card-body">
            <img src={cars} className="imageCars"/>
            <div className="txt-Tipe">Nama/Tipe Mobil</div>
            <div className="txt-Harga">Rp 430.000 / hari</div>
            <div className="txt-Caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            <div className="txt-Caption"><img src={iconUser}/>    4 orang</div>
            <div className="txt-Caption"><img src={iconSetting}/>    Manual</div>
            <div className="txt-Caption"><img src={iconCalendar}/>    Tahun 2020</div>
            <button type="submit" className="btn btn-success" id="btn-pilihMobil">Pilih Mobil</button>
          </div>
        </div>  */}


      </div>
    </div>

  </div>
  );
};

export default SectionCar;