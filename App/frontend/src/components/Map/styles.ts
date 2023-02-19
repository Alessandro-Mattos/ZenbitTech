import styled from 'styled-components';
import map from '../../assets/map.svg';

export const MapSection = styled.section `
  position: absolute;
  top: -40px;
  left: 1000px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  overflow: hidden;
`;

export const MapIMG = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${map});
  background-size: cover;
  z-index: -1;
`;
