import React from 'react'
import '../Css/Footer.css'

function Footer() {
  return (
    <div>
      <footer className="col-10">
  <div className="l-constrained-3">
    <div className="row-10 group">
      <div className="col-32">
        <div className="wrapper-26 group">
          <p className="text-55">About Apartment</p>
          <img
            className="location-2"
            src="images/location_2.png"
            alt=""
            width={16}
            height={21}
          />
          <p className="title">Address</p>
        </div>
        <div className="row-21 group">
          <img
            className="phone"
            src="images/phone.png"
            alt=""
            width={13}
            height={24}
          />
          <p className="title-2">+01 1234567890</p>
        </div>
        <div className="row-22 group">
          <img
            className="mail"
            src="images/mail.png"
            alt=""
            width={19}
            height={15}
          />
          <p className="title-3">demo@gmail.com</p>
        </div>
      </div>
      <div className="col-30 group">
        <p className="information">Information</p>
        <p className="text-56">
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt
        </p>
      </div>
      <div className="col-16">
        <p className="text-57">Useful Link</p>
        <p className="text-58">
          There are many variations of passages of Lorem Ipsum available, but
          the i
        </p>
      </div>
      <div className="col-17">
  <p className="newsletter">Newsletter</p>
  <form>
    <input type="email" id="emailInput" className="rectangle-30-holder" placeholder="Enter your email" />
    <button type="submit" className="rectangle-31-holder">Subscribe</button>
  </form>
  <img
    className="layer-7"
    src="images/layer_7.png"
    alt=""
    width={196}
    height={31}
  />
</div>

    </div>
    <div className="shape-7" />
    <p className="text-60">© 2019 All Rights Reserved. Free html Templates</p>
  </div>
</footer>

    </div>
  )
}

export default Footer
