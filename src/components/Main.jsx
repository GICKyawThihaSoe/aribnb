import React from "react";
import banner from "../assets/bg.svg";
import pt1 from "../assets/photo1.svg";
import star from "../assets/star.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import data from "../data/data";


const Main = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="p-10">
        <div className="flex justify-center items-center mt-8">
          <img style={{ width: "800px" }} src={banner} alt="" />
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-4xl text-black1 font-bold mb-4">
              Online Experience
            </h1>
            <p className="text-black2 w-72">
              Join unique interactive activities led by one-of-a-kind hosts—all
              without leaving home.
            </p>
          </div>
          <div className="mt-16">
            <Slider {...settings}>
              {data.map((data) => (
                <div key={data.id}>
                  <Card
                    soldout={data.soldout}
                    num={data.num}
                    nam={data.nam}
                    country={data.country}
                    text={data.text}
                    cost={data.cost}
                    person={data.person}
                    image={data.image}
                    star={star}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
