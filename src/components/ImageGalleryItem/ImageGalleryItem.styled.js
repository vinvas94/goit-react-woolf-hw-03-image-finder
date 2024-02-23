import styled from 'styled-components';

const GalleryItem = styled.li`
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  border-radius: 4px;
  width: 240px;
  height: 200px;
`;

export { GalleryImage, GalleryItem };
