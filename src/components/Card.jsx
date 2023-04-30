import React from "react";

const Card = (props) => {
  return (
    <>
      <section className="card justify-center mt-5 md:flex  md:items-center md:ml-10 mb-5 ">
        <div className="card--img flex-none">
          <img
            className="card_img h-80 w-60 mx-auto mt-5 rounded "
            src={`./assets/${props.item.coverImg}`}
            alt=""
          />
        </div>
        <div className="card--info justify-center md:flex md:flex-col text-center md:text-left mx-8 md:mr-4 md:h-80">
          <div className="location_container tracking-widest md:flex">
            <p>
              <i className="fa-solid fa-location-dot text-red-500"></i>
              {props.item.location}
            </p>
            <a
              className="md:ml-5 text-blue-700 underline underline-offset-4"
              href={props.item.googleMaps}
            >
              View on Google Maps
            </a>
          </div>

          <div>
            <h1 className="card--title text-2xl font-bold">
              {props.item.title}
            </h1>
          </div>
          <p className="md:mt-6 md:mb-5 font-semibold">{props.item.date}</p>
          <p className="">{props.item.description}</p>
        </div>
      </section>
      <hr className="mt-5 mx-8 last:hidden" />
    </>
  );
};

export default Card;
