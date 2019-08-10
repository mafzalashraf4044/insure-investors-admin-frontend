import styled from 'styled-components';

//  constants
import {
  contentPadding,
} from 'constants/styles';

export const PageContent = styled.div`
  ${contentPadding}  
  height: 100%;
  width: 75%;
  background-color: ${props => props.bgColor || '#FFF'};
`;
