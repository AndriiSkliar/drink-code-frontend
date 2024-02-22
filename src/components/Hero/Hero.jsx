import React from 'react';
import StyledHero from './StyledHero';
import { NavLink } from 'react-router-dom';
import images from 'src/assets/images/Hero/images';

const Hero = () => {
  return (
    <StyledHero className="heroContainer">
      <div className="heroContent">
        <h1 className="heroTitle">
          Craft Your Perfect Drink with Drink Master
        </h1>

        <p className="heroDescription">
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the world's finest
          beverages.
        </p>
        {/* Ссылка на страницу добавления напитка */}
        <NavLink to="/add" className="addDrinkLink">
          Add drink
        </NavLink>
      </div>

      <div className="hero-picture-wrapper">
        <picture>
          <source
            srcSet={images.blue_tea_mobile}
            type="image/png"
            media="(min-width:280px)"
            width="352px"
            height="313px"
          />

          <source
            srcSet={images.blue_tea_tablet}
            type="image/png"
            media="(min-width:768px)"
            width="359px"
            height="445px"
          />
          <source
            srcSet={images.blue_tea_desktop}
            type="image/png"
            media="(min-width:1200px)"
            width="359px"
            height="445px"
          />
          <img
            src={images.blue_tea_desktop_jpg}
            alt="Blue tea in a glass"
            className="hero-picture"
            width="359px"
            height="445px"
          />
        </picture>
      </div>
    </StyledHero>
  );
};

export default Hero;
