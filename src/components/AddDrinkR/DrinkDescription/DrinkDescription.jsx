import { useState } from 'react';
import { getCategoryList } from '../../../api/getCategoryList';

import { CATEGORY } from './category';
import { GLASSES } from './glasses';

const DrinkDescription = ({ formik, setFileAvatar }) => {
  const [imageURL, setImageURL] = useState('');
  // const [fileAvatar, setFileAvatar] = useState();

  const handleUploadAvatar = (e) => {
    const nameOfFile = e.target.files[0];
    setFileAvatar(nameOfFile);
    const fileURL = URL.createObjectURL(nameOfFile);
    setImageURL(fileURL);
  };

  return (
    <>
      <label htmlFor="drinkThumb">+</label>
      <input
        type="file"
        id="drinkThumb"
        name="drinkThumb"
        onChange={handleUploadAvatar}
      />
      {imageURL && (
        <img
          src={imageURL === '' ? null : imageURL}
          alt="avatar of the user"
          width={335}
          height={400}
        />
      )}
      <input
        type="text"
        name="drink"
        value={formik.values.drink}
        placeholder="Enter item title"
        onChange={formik.handleChange}
      />
      <input
        type="text"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        placeholder="Enter about recipe"
      />
      <select name="category" onChange={formik.handleChange}>
        {CATEGORY.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <select name="glass" onChange={formik.handleChange}>
        {GLASSES.map((glass, index) => {
          return (
            <option key={index} value={glass}>
              {glass}
            </option>
          );
        })}
      </select>
      <div>
        <input
          type="radio"
          id="alcoholic"
          name="alcoholic"
          value="Alcoholic"
          onChange={formik.handleChange}
          checked={formik.values.alcoholic === 'Alcoholic'}
        />
        <label htmlFor="alcoholic">Alcoholic</label>
        <input
          type="radio"
          id="non-alcoholic"
          name="alcoholic"
          value="Non-alcoholic"
          onChange={formik.handleChange}
          checked={formik.values.alcoholic === 'Non-alcoholic'}
        />
        <label htmlFor="non-alcoholic">Non-alcoholic</label>
      </div>
    </>
  );
};

export default DrinkDescription;
