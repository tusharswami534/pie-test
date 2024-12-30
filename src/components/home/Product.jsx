import React from "react";
import GridOne from "../../assets/images/webp/grid-item-1.webp";
import GridTwo from "../../assets/images/webp/grid-item-2.webp";
import GridThree from "../../assets/images/webp/grid-item-3.webp";
import GridFour from "../../assets/images/webp/grid-item-4.webp";
import GridFive from "../../assets/images/webp/grid-item-5.webp";
import GridSix from "../../assets/images/webp/grid-item-6.webp";
import GridSeven from "../../assets/images/webp/grid-item-7.webp";
import GridEight from "../../assets/images/webp/grid-item-8.webp";
import GridNine from "../../assets/images/webp/grid-item-9.webp";
import GridTen from "../../assets/images/webp/grid-item-10.webp";
import GridEleven from "../../assets/images/webp/grid-item-11.webp";
import GridTwelve from "../../assets/images/webp/grid-item-12.webp";

const Product = () => {
  return (
    <div className="min-vh-100 py-5 product-section d-flex justify-content-center align-items-center">
      <div className="custom-container">
        <div className="d-flex flex-column flex-xl-row gap-3">
            <div className="product-card">
              <h1 className="text-white product-heading">Product</h1>
              <p className="m-0 text-white common-description">
                Due to the confusing nature of tax, the lack of awareness of the
                tax deduction system and the complicated tax refund process, we
                have experienced exceptional demand from the public for our
                service. From release in 2015, our original tax product has
                achieved 60x growth, bringing in over £5m revenue in 2022.
              </p>
              <p className="m-0 mt-2 text-white common-description">
                With over 8 years of industry experience, we have listened to
                our clients to evolve our app into a whole-of-market product
                that will also meet the needs of the tax return market as well
                as the tax refund market. The App is packed with all the
                features users need to meet the requirements of the upcoming
                switch to Making Tax Digital.
              </p>
              <p className="m-0 mt-2 text-white common-description">
                Once we establish the ourself in the UK, we plan to expand into
                other territories to take advantage of the £500 billion global
                market
              </p>
              <p className="m-0 mt-2 text-white common-description">
                We have highlighted some of our key features that will be the
                cornerstone of our product launch in April 23.
              </p>
            </div>
            <div className="d-flex grid-container justify-content-center align-items-center w-100 h-100">
              <div className="d-grid grid-box h-100">
                <div className="grid-item-1 d-flex">
                  <img className="grid-image-small" src={GridOne} alt="GridOne" />
                  <img className="grid-image-large" src={GridTwo} alt="GridTwo" />
                </div>
                <div className="grid-item-2 d-flex">
                <img className="grid-image-small" src={GridThree} alt="GridThree" />
                <img className="grid-image-large" src={GridFour} alt="GridFour" />
                </div>
                <div className="grid-item-3 d-flex">
                  <img className="grid-image-large" src={GridFive} alt="GridOne" />
                  <img className="grid-image-small" src={GridSix} alt="GridTwo" />
                </div>
                <div className="grid-item-4 d-flex">
                <img className="grid-image-large" src={GridSeven} alt="GridThree" />
                <img className="grid-image-small" src={GridEight} alt="GridFour" />
                </div>
                <div className="grid-item-5 d-flex">
                  <img className="grid-image-small" src={GridNine} alt="GridOne" />
                  <img className="grid-image-large" src={GridTen} alt="GridTwo" />
                </div>
                <div className="grid-item-6 d-flex">
                <img className="grid-image-small" src={GridEleven} alt="GridThree" />
                <img className="grid-image-large" src={GridTwelve} alt="GridFour" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
