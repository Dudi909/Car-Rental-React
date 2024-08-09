import React from "react";
import logoList from "../assets/list item.png";

export default function Footer() {
  return (
    <section>
      <div className="container text-start">
        <div className="row">
          <div className="col-12 col-md-3">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-12 col-md-3">
            <p>Our Services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div className="col-12 col-md-3">
            <p>Connect with us</p>
            <img src={logoList} />
          </div>
          <div className="col-12 col-md-3">
            <p>Copyright Binar 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
