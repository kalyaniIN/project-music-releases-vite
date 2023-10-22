import React from 'react';
import { ButtonsContainer } from './ButtonsContainer';

export const CoverImage = ({ coverImage }) => {
  return (
    <div className="image">
      <img src={coverImage} alt="Album Cover" />
      <ButtonsContainer />
    </div>
  );
};