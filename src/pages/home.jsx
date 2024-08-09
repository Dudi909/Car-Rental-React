import React from "react";

import imageService from "../assets/img_service.png";
import iconcomplete from "../assets/icon_complete.svg";
import iconprice from "../assets/icon_price.svg";
import iconprofesional from "../assets/icon_professional.svg";
import icon24hrs from "../assets/icon_24hrs.svg";
import img_photo from "../assets/img_photo.png";
import img_photo1 from "../assets/img_photo (1).png";
import rate from "../assets/Rate.svg";

import Navbar from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/footer";

// Import Accordion React components
import { Accordion } from "react-bootstrap";

// Import Swiper React components
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />

      <section id="our-services">
        <div className="container py-5 my-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <img
                src={imageService}
                className="img-fluid"
                alt="TMMIN car rental service"
              />
            </div>
            <div className="col-12 col-md-6">
              <h2> Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>
                {" "}
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul>
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us">
        <div className="container py-5 my-5">
          <h2 className="mb-3"> Why us?</h2>
          <p className="mb-4"> Mengapa harus pilih Binar Car Rental? </p>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={iconcomplete}
                    className="mb-4"
                    alt="TMMIN Car Rental - Mobil Lengkap"
                  />
                  <h3 className="mb-4">Mobil Lengkap</h3>
                  <p className="card-text">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={iconprice}
                    className="mb-4"
                    alt="TMMIN Car Rental - Harga murah"
                  />
                  <h3 className="mb-4">Harga Murah</h3>
                  <p className="card-text">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={icon24hrs}
                    className="mb-4"
                    alt="TMMIN Car Rental - Layanan 24 Jam"
                  />
                  <h3 className="mb-4">Layanan 24 Jam</h3>
                  <p className="card-text">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={iconprofesional}
                    className="mb-4"
                    alt="TMMIN Car Rental - Sopir Profesional"
                  />
                  <h3 className="mb-4">Sopir Profesional</h3>
                  <p className="card-text">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Testimonial">
        <div className="py-5 my-5">
          <div className="text-center">
            <h2 className="mb-3">Testimonial</h2>
            <p className="mb-4">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
        </div>
        <div className="swiper-container">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={10}
            loop={true}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="col-md-10">
                <div className="card bg-red text-light">
                  <div className="card-body py-5">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-3 text-center">
                        <img
                          src={img_photo}
                          alt="TMMIN Car Rental - Customer"
                        />
                      </div>
                      <div className="col-12 col-md-9">
                        <img src={rate} alt="TMMIN Car Rental - Rate" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dicta quisquam eaque autem obcaecati,
                          reprehenderit modi accusamus praesentium ea quam quo a
                          velit temporibus quia delectus ipsam deserunt tenetur
                          suscipit. Sint?
                        </p>
                        <label>John Dee 32, Bromo</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-10">
                <div className="card bg-red text-light">
                  <div className="card-body py-5">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-3 text-center">
                        <img
                          src={img_photo1}
                          alt="TMMIN Car Rental - Customer"
                        />
                      </div>
                      <div className="col-12 col-md-9">
                        <img src={rate} alt="TMMIN Car Rental - Rate" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dicta quisquam eaque autem obcaecati,
                          reprehenderit modi accusamus praesentium ea quam quo a
                          velit temporibus quia delectus ipsam deserunt tenetur
                          suscipit. Sint?
                        </p>
                        <label>John Dee 32, Bromo</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-10">
                <div className="card bg-red text-light">
                  <div className="card-body py-5">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-3 text-center">
                        <img
                          src={img_photo}
                          alt="TMMIN Car Rental - Customer"
                        />
                      </div>
                      <div className="col-12 col-md-9">
                        <img src={rate} alt="TMMIN Car Rental - Rate" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dicta quisquam eaque autem obcaecati,
                          reprehenderit modi accusamus praesentium ea quam quo a
                          velit temporibus quia delectus ipsam deserunt tenetur
                          suscipit. Sint?
                        </p>
                        <label>John Dee 32, Bromo</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-10">
                <div className="card bg-red text-light">
                  <div className="card-body py-5">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-3 text-center">
                        <img
                          src={img_photo}
                          alt="TMMIN Car Rental - Customer"
                        />
                      </div>
                      <div className="col-12 col-md-9">
                        <img src={rate} alt="TMMIN Car Rental - Rate" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dicta quisquam eaque autem obcaecati,
                          reprehenderit modi accusamus praesentium ea quam quo a
                          velit temporibus quia delectus ipsam deserunt tenetur
                          suscipit. Sint?
                        </p>
                        <label>John Dee 32, Bromo</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="button-wrapper">
            <div className="swiper-button-prev custom-swiper-button-prev">
              <i className="bi bi-arrow-left-short"></i>
            </div>
            <div className="swiper-button-next custom-swiper-button-next">
              -
            </div>
          </div>
        </div>
        {/* <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="card bg-red text-light">
                <div className="card-body py-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3 text-center">
                      <img src={img_photo} alt="TMMIN Car Rental - Customer" />
                    </div>
                    <div className="col-12 col-md-9">
                      <img src={rate} alt="TMMIN Car Rental - Rate" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta quisquam eaque autem obcaecati, reprehenderit modi
                        accusamus praesentium ea quam quo a velit temporibus
                        quia delectus ipsam deserunt tenetur suscipit. Sint?
                      </p>
                      <label>John Dee 32, Bromo</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card bg-red text-light">
                <div className="card-body py-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3 text-center">
                      <img src={img_photo1} alt="TMMIN Car Rental - Customer" />
                    </div>
                    <div className="col-12 col-md-9">
                      <img src={rate} alt="TMMIN Car Rental - Rate" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta quisquam eaque autem obcaecati, reprehenderit modi
                        accusamus praesentium ea quam quo a velit temporibus
                        quia delectus ipsam deserunt tenetur suscipit. Sint?
                      </p>
                      <label>John Dee 32, Bromo</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card bg-red text-light">
                <div className="card-body py-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3 text-center">
                      <img src={img_photo} alt="TMMIN Car Rental - Customer" />
                    </div>
                    <div className="col-12 col-md-9">
                      <img src={rate} alt="TMMIN Car Rental - Rate" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta quisquam eaque autem obcaecati, reprehenderit modi
                        accusamus praesentium ea quam quo a velit temporibus
                        quia delectus ipsam deserunt tenetur suscipit. Sint?
                      </p>
                      <label>John Dee 32, Bromo</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card bg-red text-light">
                <div className="card-body py-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3 text-center">
                      <img src={img_photo1} alt="TMMIN Car Rental - Customer" />
                    </div>
                    <div className="col-12 col-md-9">
                      <img src={rate} alt="TMMIN Car Rental - Rate" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta quisquam eaque autem obcaecati, reprehenderit modi
                        accusamus praesentium ea quam quo a velit temporibus
                        quia delectus ipsam deserunt tenetur suscipit. Sint?
                      </p>
                      <label>John Dee 32, Bromo</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card bg-red text-light">
                <div className="card-body py-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3 text-center">
                      <img src={img_photo} alt="TMMIN Car Rental - Customer" />
                    </div>
                    <div className="col-12 col-md-9">
                      <img src={rate} alt="TMMIN Car Rental - Rate" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta quisquam eaque autem obcaecati, reprehenderit modi
                        accusamus praesentium ea quam quo a velit temporibus
                        quia delectus ipsam deserunt tenetur suscipit. Sint?
                      </p>
                      <label>John Dee 32, Bromo</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-navigation">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div> */}
      </section>
      <section id="Sewa MObil Sekarang">
        <div className="container py-5 my-5">
          <div className="bg-red text-light">
            <div className="py-5">
              <div className="row align-items-center">
                <div className="col">
                  <div className="text-center">
                    <h1 className="mb-5">Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p className="card-text mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <Link to="/sewa" className="btn btn-success">
                      Mulai Sewa Mobil
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Frequently Ask Question">
        <div className="container py-5 my-5">
          <div className="row align-items-top">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <h2 className="mb-3"> Frequently Ask Question </h2>
              <p className="mb-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
              </p>
            </div>
            <div className="col-12 col-md-6">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Apa saja syarat yang dibutuhkan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Berapa hari minimal sewa mobil lepas kunci?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Apakah Ada biaya antar-jemput?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Bagaimana jika terjadi kecelakaan
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* <div className="accordion" id="accordionExample">
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Apakah Ada biaya antar-jemput?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Bagaimana jika terjadi kecelakaan
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
