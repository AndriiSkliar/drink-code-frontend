import React from 'react';
import StyledHero from './StyledHero';

import images from '../../assets/images/Hero/images';

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
        {/* //!Должно перенаправлять на страничку создания коктейлей addDrink */}
        <a href="/add" className="addDrinkLink"> 
          Add drink
        </a>
      </div>

      <div className="hero-picture-wrapper">
        <picture>
          <source
                      srcSet={images.blue_tea_mobile}
            type="image/png"
            media="(min-width:280px)"
          />

          <source
            srcSet={images.blue_tea_tablet}
            type="image/png"
            media="(min-width:768px)"
          />
          <source
            srcSet={images.blue_tea_desktop}
            type="image/png"
            media="(min-width:1200px)"
          />
          <img
            src={images.blue_tea_desktop_jpg}
            alt="Blue tea in a glass"
            className="hero-picture"
          />
        </picture>

  
      </div>
    </StyledHero>
  );
};

export default Hero;
