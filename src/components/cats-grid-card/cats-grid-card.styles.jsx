import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import TextButton from "../buttons/textButton/textButton.component";
import IconButton from "../buttons/iconButton/iconButton.component";
import { ICON_BUTTON_TYPE_CLASSES } from "../buttons/iconButton/iconButton.component";

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
DirectoryContainer.displayName = "CatsDirectoryContainer";

export const CardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-base);
  background: var(--accent-color);
  opacity: 0;
  transition: opacity 0.35s ease;
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

export const ButtonIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  opacity: 0;
  transition: opacity 0.35s ease;

  ${({ hover }) =>
    hover &&
    css`
      opacity: 1;
    `}
`;
ButtonIconWrapper.displayName = "ButtonIconWrapper";

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
  display: grid;

  img {
    display: block;
    position: absolute;
    left: -1000%;
    right: -1000%;
    top: -1000%;
    bottom: -1000%;
    margin: auto;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  @media (min-width: 768px) {
    &:nth-of-type(10n + 1),
    &:nth-of-type(10n + 4),
    &:nth-of-type(10n + 8),
    &:nth-of-type(10n + 9) {
      grid-row: span 2;
    }

    &:nth-of-type(10n + 4),
    &:nth-of-type(10n + 9) {
      grid-column: span 2;
    }
  }

  &:hover {
    ${CardImageOverlay} {
      opacity: 0.6;
    }

    img {
      transform: scale(1.1);
    }

    ${CardButtonWrapper} {
      opacity: 1;
    }

    ${ButtonIconWrapper} {
      opacity: 1;
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

export const ButtonIconContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  text-align: center;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const IconButtonStyled = styled(IconButton)`
  margin-right: 5px;
`;

export const IconText = styled.span`
  vertical-align: middle;
`;



// // cats-directory.styles.jsx
// import { Link } from "react-router-dom";
// import styled, { css } from "styled-components";

// import TextButton from "../buttons/textButton/textButton.component";

// export const DirectoryContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   grid-auto-rows: minmax(300px, 400px);
// 	/* grid-auto-rows: 100%; */
//   gap: 20px;
//   grid-auto-flow: dense;
//   padding: 20px;

	

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//     grid-auto-rows: minmax(200px, auto);
// 		/* grid-auto-rows: 100%; */
//     gap: 20px;
//     grid-auto-flow: dense;
//   }
// `;
// DirectoryContainer.displayName = "CatsDirectoryContainer";

// export const CardImageOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border-radius: var(--border-radius-base);
// `;

// CardImageOverlay.displayName = "CardImageOverlay";

// export const CardButtonWrapper = styled.div`
//   position: absolute;
//   width: 100%;
//   left: 0;
//   bottom: 20px;
//   text-align: center;
//   opacity: 0;
//   transition: opacity 0.35s ease;
//   z-index: 10;
//   text-align: center;

//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// CardButtonWrapper.displayName = "CardButtonWrapper";

// export const CenteredButton = styled(TextButton)`
//   position: relative;
//   left: 50%;
//   transform: translateX(-50%);
// `;

// export const ImageContainer = styled.div`
//   overflow: hidden;
//   position: relative;
//   border-radius: var(--border-radius-base);
//   height: 100%;

//   img {
//     display: block;
//     position: absolute;
//     left: -1000%;
//     right: -1000%;
//     top: -1000%;
//     bottom: -1000%;
//     margin: auto;
//     height: 100%;
//     width: 100%;
//     object-fit: cover;
//   }

// 	@media (min-width: 768px) {
//     &:nth-of-type(10n + 1),
//     &:nth-of-type(10n + 4),
//     &:nth-of-type(10n + 8),
//     &:nth-of-type(10n + 9) {
//       grid-row: span 2;
//       /* height: 200px; */
//     }

//     &:nth-of-type(10n + 4),
//     &:nth-of-type(10n + 9) {
//       grid-column: span 2;
//       /* height: 200px; */
//     }
//   }

//   &:hover {
//     ${CardImageOverlay} {
//       display: block;
//       transition: var(--transition);
//       background: var(--accent-color);
//       opacity: 0.6;
//     }

//     img {
//       transform: scale(1.1);
//       transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//     }

//     ${CardButtonWrapper} {
//       opacity: 1;
//       z-index: 10;
//     }
//   }

//   ${({ filtered }) =>
//     filtered &&
//     css`
//       font-size: 1.5em; // Збільшуємо розмір шрифту
//       height: 200px; // Збільшуємо висоту
//     `}
// `;
// ImageContainer.displayName = "CatsImageContainer";

// export const CardLink = styled(Link)`
//   width: 100%;
//   display: inline-block;

//   text-decoration: none;

//   &:hover {
//     text-decoration: none;
//   }
// `;

// export const ButtonIconWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 10; /* Забезпечує відображення поверх іншого вмісту */
// `;