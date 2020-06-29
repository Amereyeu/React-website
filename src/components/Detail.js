import React from "react";

function Detail({ bike, toggle }) {
  return (
    <div className="prod__wrap">
      <div className="prod">
        <div className="prod__img">
          <img src={bike.image} alt={bike.subtitle} />
        </div>

        <div className="prod__info">
          <div className="prod__info__content">
            <div className="prod__info__content__about">
              <h1>{bike.title}</h1>
              <h3>{bike.subtitle}</h3>

              <p>{bike.main_text}</p>

              <ul>
                <li>{bike.highlights.line1}</li>
                <li>{bike.highlights.line2}</li>
                <li>{bike.highlights.line3}</li>
              </ul>

              {bike.highlights.where.length ? (
                <>
                  <h4>Best used:</h4>
                  <p>{bike.highlights.where}</p>
                </>
              ) : (
                ""
              )}

              {bike.highlights.build_for.length ? (
                <>
                  <h4>Build for:</h4>
                  <p>{bike.highlights.build_for}</p>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="prod__buttons">
          <button className="prod__buttons__wish">wishlist</button>
          <button className="prod__buttons__buy" onClick={toggle}>
            buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
