import React from "react";

import Navbar from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/footer";
import Cari from "../pages/Cari";

export default function Sewa() {
  return (
    <>
      <Navbar />
      <Banner />

      <section id="search">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form className="row g-3 justify-content-center">
                <div className="col-auto">
                  <label className="form-label">Tipe Driver</label>
                  <select className="form-select" id="typeDriver">
                    <option value="Dengan Supir">Dengan Sopir</option>
                    <option value="Lepas Kunci">
                      Tanpa Sopir (Lepas Kunci)
                    </option>
                  </select>
                </div>
                <div className="col-auto">
                  <label className="form-label">Tanggal</label>
                  <input
                    type="date"
                    id="tanggal"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                  />
                </div>
                <div className="col-auto">
                  <label className="form-label">Waktu / Jam Jemput</label>
                  <input
                    type="time"
                    id="jam"
                    className="form-control"
                    placeholder="Pilih Waktu"
                  />
                </div>
                <div className="col-auto">
                  <label className="form-label">Jumlah Penumpang</label>
                  <input
                    type="number"
                    id="Penumpang"
                    className="form-control"
                    placeholder="Pilih Jumlah Penumpang"
                  />
                </div>
                <div className="col-auto">
                  <button type="button" id="Cari" className="btn btn-success">
                    Cari Mobil
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Cari />
      <Footer />
    </>
  );
}
