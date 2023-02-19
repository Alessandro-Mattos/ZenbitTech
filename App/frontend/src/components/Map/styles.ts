import styled from 'styled-components';
import map from '../../assets/map.svg';

export const MapSection = styled.section`
position: relative;
`;

export const MapIMG = styled.div`
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background-image: url(${map});
  background-size: cover;
  margin-left: 50%;
  
`;
