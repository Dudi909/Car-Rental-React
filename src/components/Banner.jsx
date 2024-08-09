import React from "react";
import Zenix from "../assets/zenix 1.png";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section id="banner" className="bg-red">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center text-light">
            <div>
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="text-white">
                {" "}
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link to="/sewa" className="btn btn-success">
                Mulai Sewa Mobil
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src={Zenix} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
