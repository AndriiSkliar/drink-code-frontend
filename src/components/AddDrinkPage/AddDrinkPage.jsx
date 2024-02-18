export default function AddDrink() {
    return (
      <SectionContainer>
        <Container>
          <SectionWrap>
            <MainWrap>
              <PageTitle title="Craft Your Perfect Drink with Drink Master" />
              <MainDescr>
                Unlock your inner mixologist with Drink Master, your one-stop
                destination for exploring, crafting, and mastering the world`s
                finest beverages.
              </MainDescr>
  
              <MainLink to="/add">Add drink</MainLink>
            </MainWrap>
  
            <ImageWrap>
              <picture>
                <source
                  media="(min-width:1200px)"
                  srcSet={`${heroImgdescS} 1x, ${heroImgdescL} 2x`}
                />
                <source
                  media="(min-width:768px)"
                  srcSet={`${heroImgtabletS} 1x, ${heroImgtabletL} 2x`}
                />
                <source
                  media="(max-width:767px)"
                  srcSet={`${heroImgmobileS} 1x, ${heroImgmobileL} 2x`}
                />
                <img src={heroImgdescS} alt="main-coctail" />
              </picture>
              {/* <ImageBgBlue></ImageBgBlue> */}
            </ImageWrap>
          </SectionWrap>
        </Container>
      </SectionContainer>
    );
  }