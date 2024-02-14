import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import TextButton from "../buttons/textButton/textButton.component";

export const DirectoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(300px, 400px);
  gap: 20px;
  grid-auto-flow: dense;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(200px, auto);
    gap: 20px;
    grid-auto-flow: dense;
  }
`;
DirectoryContainer.displayName = "BreedsCatsDirectoryContainer";

export const CardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-base);
`;

CardImageOverlay.displayName = "CardImageOverlay";

export const CardButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 20px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.35s ease;
  z-index: 10;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

CardButtonWrapper.displayName = "CardButtonWrapper";

export const CenteredButton = styled(TextButton)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: var(--border-radius-base);
  height: 100%;

  img {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:hover {
    ${CardImageOverlay} {
      display: block;
      transition: var(--transition);
      background: var(--accent-color);
      opacity: 0.6;
    }

    img {
      opacity: 1;
    }

    ${CardButtonWrapper} {
      opacity: 1;
      z-index: 10;
    }
  }

  &:not(:hover) {
    ${CardButtonWrapper} {
      opacity: 0;
    }
  }
`;
ImageContainer.displayName = "CatsImageContainer";

export const CardLink = styled(Link)`
  width: 100%;
  display: inline-block;

  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;
