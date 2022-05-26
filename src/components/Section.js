import React from 'react';
import Card from './Card';
import iconOren from "../img/Image/icon_completetumbsup.svg";
import iconPink from "../img/Image/icon_price.svg";
import iconBiru from "../img/Image/icon_24hrs.svg";
import iconHijau from "../img/Image/icon_professional.svg";
import imgService from "../img/Image/Service.svg";
import iconCentang from "../img/Image/Logocentang.svg";
import imgCar from "../img/Image/Car.svg";
import imgDee from "../img/Image/dee.svg";
import imgJohn from "../img/Image/john.svg";
import rating from "../img/Image/Ratestars.svg";
import buttonLeft from "../img/Image/LeftButton.svg";
import buttonRight from "../img/Image/RightButton.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function Section() {
  return (

    <div className="section">

      <div id="section1">
                <div className="container-fluid pt-5 landingPage">
                        <div className="row">
                            <div className="col-md-6" id="texthome">
                                <h1><b>Sewa dan Rental Mobil Terbaik di kawasan Surabaya</b></h1>
                                <p>Selamat datang di Binar Car Rental. Kami Menyediakan mobil kualitas terbaik dengan harga terjangkau.Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                                <a className="btn btn-success" href="/cariMobil" role="button">Mulai Sewa Mobil</a>
                            </div>
                            <div className="col-md-6 mt-lg-5">
                                <img src={imgCar} id="ImgCar" class="img-fluid"/>
                            </div>
                        </div>
                    </div>
        </div>

      <div id="section2">
      <div className="container my-md-5 pb-3">
          <div className="row align-items-center g-1">
            <div className="col-md-6 my-5 pt-5">
                <img src={imgService} id="imgService"/>
            </div>
            <div className="col-md-6 mt-md-5">
              <div id="textService" className="my-md-5 mr-1">
                <h2><b>Best Car Rental for any kind of trip in Surabaya!</b></h2>
                    <p>Sewa mobil di Surabaya bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <div>
                      <p className="centang"><img src={iconCentang}/> Sewa Mobil Dengan Supir di Bali 12 Jam </p>
                      <p className="centang"><img src={iconCentang}/> Sewa Mobil Lepas Kunci di Bali 24 Jam </p>
                      <p className="centang"><img src={iconCentang}/> Sewa Mobil Jangka Panjang Bulanan </p>
                      <p className="centang"><img src={iconCentang}/> Gratis Antar - Jemput Mobil di Bandara  </p>
                      <p className="centang"><img src={iconCentang}/> Layanan Airport Transfer / Drop In Out </p>
                  </div>
              </div>
            </div>
          </div>
      </div>
      </div>

      <div id="section3">
        <div className="container my-5 pt-5 pb-2">
          <div className="row">
              <div className="textWhyUs mb-lg-5 mt-1 ml-2">
              <h2><b>Why Us?</b></h2>
              <p>Mengapa harus pilih Binar Car Rental?</p>
              </div>
          </div>
          <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 mb-5 mt-1">
            <Card
              title="Mobil Lengkap"
              description="Tersedia berbagai pilihan mobil dengan kondisi masih baru, bersih dan terawat"
              imgSrc={iconOren}
            />
            <Card
              title="Harga Murah"
              description="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
              imgSrc={iconPink}
            />
            <Card
              title="Layanan 24 Jam"
              description="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
              imgSrc={iconBiru}
            />
            <Card
              title="Sopir Profesional"
              description="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
              imgSrc={iconHijau}
            />
          </div>
        </div>
      </div>

      <div id="section4">
      <div className="container my-5 pt-2">
          <div className="row my-md-5 mb-sm-2">
              <div className="textTestimoni pd-2">
                <h2><b>Testimonial</b></h2>
                <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
            </div>

            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="carousel slide" id="carouselExampleIndicators" data-ride="carousel">
                  
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row text-center kontenTesti">
                        <div className="col-lg-9">
                          <div className="single-box mt-2">
                            <div className="row" id="carousel-body">
                              <div className="col-md-3 mt-md-4">
                                <img src={imgDee} alt="" className="testijohn"/>
                              </div>
                              <div className="col-md-9 text-start pb-md-3">
                                <div className="rating">
                                  <img src={rating} alt="rating-stars" className="ratestars"/>
                                </div>
                                <div className="testitext my-md-3">
                                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                  <p><b>Dee 32, Bromo</b></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row text-center kontenTesti">
                        <div className="col-lg-9">
                          <div className="single-box mt-2">
                            <div className="row" id="carousel-body">
                              <div className="col-md-3 mt-md-4">
                                <img src={imgJohn} alt="" className="testijohn"/>
                              </div>
                              <div className="col-md-9 text-start pb-md-3">
                                <div className="rating">
                                  <img src={rating} alt="rating-stars" className="ratestars"/>
                                </div>
                                <div className="testitext my-md-3">
                                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                  <p><b>John 31, Bromo</b></p>
                                </div>
                              </div>
        
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="nextLeft" aria-hidden="true"><img src={buttonLeft} alt="" onmouseover="this.src={buttonLeft}" onmouseout="this.src={buttonLeft}"/></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="nextRight" aria-hidden="true"><img src={buttonRight} alt="" onmouseover="this.src={buttonRight}" onmouseout="this.src={buttonRight}"/></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>

      <div id="section5">
      <div className="my-5 container">
        <div className="row py-lg-5">
          <div className="col-12">
          <div className="konten5 text-center">
            <h2 className="textkonten5 mb-3"><b>Sewa Mobil di Surabaya Sekarang!</b></h2>
            <p className="textkonten5 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. </p>
            <a className="btn btn-success" href="/cariMobil" role="button">Mulai Sewa Mobil</a>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div id="section6">
      <div className="container my-5 pb-5 pt-5">
        <div className="row">
          <div className="col-md-5 my-3">
            <div id="textFAQ">
              <h3><b>Frequently Asked Question</b></h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="col-md-7 mt-2 mb-5">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Apakah ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
  </div>
  );
};

export default Section;