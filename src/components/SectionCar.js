import React, { useEffect, useState } from 'react';
import imgCar from "../img/Image/Car.svg";
import iconUser from "../img/Image/icon_users.svg";
import iconSetting from "../img/Image/icon_settings.svg";
import iconCalendar from "../img/Image/icon_calendar.svg";
// import cars from "../img/images/car06.min.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars, fetchCars } from '../features/cars/carsSlice';

function SectionCar() {

  const dispatch = useDispatch();
  const cars = useSelector(getAllCars);
  const carsStatus = useSelector((state) => state.cars.status);
  const error = useSelector((state) => state.cars.error);
  const [carsFilter, setCarsFilter] = useState([]);
  const [capacity, setCapacity] = useState();
  const [jam, setJam] = useState();
  const [tanggal, setTanggal] = useState();

  const doFilterCars = ( ) => {
  
    const filterCarResult =  cars.filter((item) => {
      let dateTime = new Date(tanggal + " " + jam);
      let epochTime = dateTime.getTime();
      let date = new Date(item.availableAt);
      let newDate = date.getTime();

      let availableFilter = item.available === true;
      let dateFilter = newDate < epochTime;
      let capacityFilter = item.capacity >= capacity;
      return capacityFilter && dateFilter && availableFilter;
    });
    setCarsFilter(filterCarResult);
    console.log(filterCarResult);
  }

  const shows = ( ) => {
    setCarsFilter(cars);
  }

  useEffect (() => {
    if (carsStatus === 'idle') {
      dispatch(fetchCars());
    }

    console.log("Cars Status :", carsStatus);
    }, [carsStatus, dispatch]);

    let content;

    if (carsStatus === 'loading') {
      content = <div> Still loading... </div>;
    } else if (carsStatus === 'succeeded') {
      content = (
        <>
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
                        <input type="date" className="form-control" placeholder="Pilih Tanggal" id="inputDate" onChange={(e) => setTanggal((e.target.value))} required/>
                      </div>
                      <div className="col-lg">
                        <label for="inputTime" className="form-label">Waktu Jemput</label>
                        <input type="time" id="inputTime" className="form-control" placeholder="00:00" onChange={(e) => setJam((e.target.value))} required/>
                      </div>
                      <div className="col-lg">
                        <label for="penumpang" className="form-label">Jumlah Penumpang</label>
                        <input id="jumlahPenumpang" type="number" className="form-control" placeholder="Jumlah Penumpang" onChange={(e) => setCapacity(Number(e.target.value))} required/>
                      </div>
                      <div className="col-lg">
                        <button className="btn btn-success" id="load-btn" onClick={doFilterCars}>Cari Mobil</button>
                      </div>
                    </div>
                </div>
              </div>

              <div className="container my-lg-2">
                  <button id="clear-btn" className="btn btn-outline-primary" onClick={shows}>Tampilkan Semua Mobil</button>
                  <div id="cars-container" className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-lg-3 row-cols-md-2 g-3 mb-5 mt-3">
                      {carsFilter.map(
                        (item) => {
                          return (
                            <div className="card col-lg-4 cardCars" key={item.id}>
                              <div className="card-body">
                                        <img src={item.image} className="imageCars"/>
                                        <div className="txt-Tipe"> {item.manufacture} {item.model}</div>
                                        <div className="txt-Harga">Rp {item.rentPerDay} / hari</div>
                                        <div className="txt-Caption">{item.description}</div>
                                        <div className="txt-Caption"><img src={iconUser}/>  {item.capacity}</div>
                                        <div className="txt-Caption"><img src={iconSetting}/>  {item.transmission}</div>
                                        <div className="txt-Caption"><img src={iconCalendar}/>    {item.year}</div>
                                </div>
                                <button type="submit" className="btn btn-success" id="btn-pilihMobil">Pilih Mobil</button>
                              </div> 
                            );
                          }
                        )
                      }
                    </div>
                </div>
        </>
      );

    } else if (carsStatus === 'failed') {
      content = <div>{error}</div>;
    };

  return <>{content}</>

};

export default SectionCar;


// function SectionCar() {
//   return (

//     <div className="section">

//       <div id="section1">
//                 <div className="container-fluid pt-5 landingPage">
//                         <div className="row">
//                             <div className="col-md-6" id="texthome">
//                                 <h1><b>Sewa dan Rental Mobil Terbaik di kawasan Surabaya</b></h1>
//                                 <p>Selamat datang di Binar Car Rental. Kami Menyediakan mobil kualitas terbaik dengan harga terjangkau.Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
//                             </div>
//                             <div className="col-md-6 mt-lg-5">
//                                 <img src={imgCar} id="ImgCar" class="img-fluid"/>
//                             </div>
//                         </div>
//                     </div>
//         </div>

//     <div className="container position-relative cariMobil">
//       <div className="formCariMobil">
//         <form id="form" action="">
//           <div className="row">

//             <div className="col-lg">
//               <label for="inputDriver" className="form-label">Tipe Driver</label>
//               <select className="form-select" placeholder="Pilih Tipe Driver" id="inputDriver" required>
//                 <option className="opsi" selected>Pilih Tipe Driver</option>
//                 <option className="opsi" value="Dengan Sopir">Dengan Sopir</option>
//                 <option className="opsi" value="Tanpa Sopir">Tanpa Sopir (Lepas Kunci)</option>
//               </select>
//             </div>

//             <div className="col-lg">
//               <label for="inputDate" className="form-label">Tanggal</label>
//               <input type="date" className="form-control" placeholder="Pilih Tanggal" id="inputDate" required/>
//             </div>

//             <div className="col-lg">
//               <label for="inputTime" className="form-label">Waktu Jemput</label>
//               <input type="time" id="inputTime" className="form-control" placeholder="00:00"/>
//             </div>

//             <div className="col-lg">
//               <label for="penumpang" className="form-label">Jumlah Penumpang</label>
//               <input id="jumlahPenumpang" type="number" className="form-control" placeholder="Jumlah Penumpang" value=""/>
//             </div>

//             <div className="col-lg">
//               <button className="btn btn-success" id="load-btn">Cari Mobil</button>
//             </div>

//           </div>
//         </form>
//       </div>
//     </div>

//     <div className="container my-lg-2">

//       <button id="clear-btn" className="btn btn-outline-danger">Hapus Pencarian</button>

//       <div id="cars-container" className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-lg-3 row-cols-md-2 g-3 mb-5 mt-3">
      

//         {/* <div className="card col-lg-4 cardCars">
//           <div className="card-body">
//             <img src={cars} className="imageCars"/>
//             <div className="txt-Tipe">Nama/Tipe Mobil</div>
//             <div className="txt-Harga">Rp 430.000 / hari</div>
//             <div className="txt-Caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
//             <div className="txt-Caption"><img src={iconUser}/>    4 orang</div>
//             <div className="txt-Caption"><img src={iconSetting}/>    Manual</div>
//             <div className="txt-Caption"><img src={iconCalendar}/>    Tahun 2020</div>
//             <button type="submit" className="btn btn-success" id="btn-pilihMobil">Pilih Mobil</button>
//           </div>
//         </div> 

//         <div className="card col-lg-4 cardCars">
//           <div className="card-body">
//             <img src={cars} className="imageCars"/>
//             <div className="txt-Tipe">Nama/Tipe Mobil</div>
//             <div className="txt-Harga">Rp 430.000 / hari</div>
//             <div className="txt-Caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
//             <div className="txt-Caption"><img src={iconUser}/>    4 orang</div>
//             <div className="txt-Caption"><img src={iconSetting}/>    Manual</div>
//             <div className="txt-Caption"><img src={iconCalendar}/>    Tahun 2020</div>
//             <button type="submit" className="btn btn-success" id="btn-pilihMobil">Pilih Mobil</button>
//           </div>
//         </div> 

//         <div className="card col-lg-4 cardCars">
//           <div className="card-body">
//             <img src={cars} className="imageCars"/>
//             <div className="txt-Tipe">Nama/Tipe Mobil</div>
//             <div className="txt-Harga">Rp 430.000 / hari</div>
//             <div className="txt-Caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
//             <div className="txt-Caption"><img src={iconUser}/>    4 orang</div>
//             <div className="txt-Caption"><img src={iconSetting}/>    Manual</div>
//             <div className="txt-Caption"><img src={iconCalendar}/>    Tahun 2020</div>
//             <button type="submit" className="btn btn-success" id="btn-pilihMobil">Pilih Mobil</button>
//           </div>
//         </div>  */}


//       </div>
//     </div>

//   </div>
//   );
// };

// export default SectionCar;