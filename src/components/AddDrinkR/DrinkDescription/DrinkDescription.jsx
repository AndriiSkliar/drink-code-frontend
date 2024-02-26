import { useState } from 'react';

import { CATEGORY } from './category';
import { GLASSES } from './glasses';
import {
  TabletMainContainer,
  TabletContainer,
  DescHelper,
  InputImage,
  ImageLabel,
  InputBG,
  DrinkImg,
  DrinkInput,
  DrinkLabel,
  SelectLabel,
  CategoryInput,
  PositionContainer,
  RadioMainContainer,
  RadioSecondaryContainer,
} from './DrinkDescription.styled';

const DrinkDescription = ({
  formik,
  setFileAvatar,
  pictureActive,
  setPictureActive,
}) => {
  const [imageURL, setImageURL] = useState('');

  const handleUploadAvatar = (e) => {
    const currentFile = e.target.files[0];
    if (!currentFile) return;
    const checkEndOfName =
      currentFile.name.endsWith('.jpg') || currentFile.name.endsWith('.png');
    if (!checkEndOfName) {
      alert('Please select jpg or png file!');
      return;
    }
    setFileAvatar(currentFile);
    setPictureActive(true);
    const fileURL = URL.createObjectURL(currentFile);
    setImageURL(fileURL);
  };

  return (
    <TabletMainContainer>
      <DescHelper>
        {!pictureActive && <InputBG></InputBG>}
        <InputImage
          type="file"
          id="drinkThumb"
          name="drinkThumb"
          onChange={handleUploadAvatar}
          required
        />
        {!pictureActive && <ImageLabel htmlFor="drinkThumb">+</ImageLabel>}
        {pictureActive && (
          <DrinkImg
            src={imageURL === '' ? null : imageURL}
            alt="avatar of the user"
            width={335}
            height={400}
          />
        )}
      </DescHelper>
      <TabletContainer>
        <DrinkLabel htmlFor="drinkInput">Enter item title</DrinkLabel>
        <DrinkInput
          type="text"
          name="drink"
          id="drinkInput"
          value={formik.values.drink}
          onChange={formik.handleChange}
          required
        />
        <DrinkLabel htmlFor="descriptionInput">Enter about recipe</DrinkLabel>
        <DrinkInput
          type="text"
          name="description"
          id="descriptionInput"
          value={formik.values.description}
          onChange={formik.handleChange}
          required
        />
        <PositionContainer>
          <SelectLabel>Category</SelectLabel>
          <CategoryInput name="category" onChange={formik.handleChange}>
            <option value="undefined">Category</option>
            {CATEGORY.map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </CategoryInput>
        </PositionContainer>
        <PositionContainer>
          <SelectLabel className="glassmargin">Glass</SelectLabel>
          <CategoryInput name="glass" onChange={formik.handleChange}>
            <option value="undefined">Glass</option>
            {GLASSES.map((glass, index) => {
              return (
                <option key={index} value={glass}>
                  {glass}
                </option>
              );
            })}
          </CategoryInput>
        </PositionContainer>
        <RadioMainContainer>
          <RadioSecondaryContainer>
            <input
              type="radio"
              id="alcoholic"
              name="alcoholic"
              value="Alcoholic"
              onChange={formik.handleChange}
              checked={formik.values.alcoholic === 'Alcoholic'}
            />
            <label htmlFor="alcoholic">Alcoholic</label>
          </RadioSecondaryContainer>
          <RadioSecondaryContainer>
            <input
              type="radio"
              id="non-alcoholic"
              name="alcoholic"
              value="Non-alcoholic"
              onChange={formik.handleChange}
              checked={formik.values.alcoholic === 'Non-alcoholic'}
            />
            <label htmlFor="non-alcoholic">Non-alcoholic</label>
          </RadioSecondaryContainer>
        </RadioMainContainer>
      </TabletContainer>
    </TabletMainContainer>
  );
};

export default DrinkDescription;
