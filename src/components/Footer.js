import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="bg-dark text-light">
        <hr />
        <div className="container">
          <div className="row cols-2">
            <div className="col">
              <ul style={{ listStyleType: "none" }}>
                <li>About Us </li>
                <li>Partner with us </li>
                <li>Help Center</li>
              </ul>
            </div>
            <div className="col">
              <ul style={{ listStyleType: "none" }}>
                <li><b>Follow Us</b></li>
                <li>Instagram </li>
                <li>Facebook</li>
              </ul>
            </div>
            <div className="col">
              <ul style={{ listStyleType: "none" }}>
                <li><b>Contact Us</b></li>
                <li>Email</li>
                <li>Phone No.</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="text-center pb-3">2023 copyright : FoodiesPark.com</div>
        </div>
      </div>

    </>

  )
}
