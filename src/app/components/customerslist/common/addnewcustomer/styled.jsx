import styled from 'styled-components';

//  icon
import Close from 'components/common/icons/Close';
import Commercial from 'components/common/icons/Commercial';
import Reo from 'components/common/icons/Reo';
import Personal from 'components/common/icons/Personal';
import AccordionPopupOpen from 'components/common/icons/AccordionPopupOpen';
import AccordionPopupClose from 'components/common/icons/AccordionPopupClose';

//  constants
import {
  contentPadding,
  headerHeight,
  contentPaddingHorizontal,
  flexSbC,
  flexCC,
  flexFsC,
  flexColumnCC,
  flexColumnFsFs,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles';

export const AddNewCustomer = styled.div`
  ${flexColumnFsFs}
  ${contentPadding}
  position: relative;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: #FFF;
  position: absolute;
  right: ${getSizeWrtWidth(30)};
  top: ${getSizeWrtWidth(30)};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const CloseIcon = styled(Close)`
  width: ${getSizeWrtWidth(14)};
  height: ${getSizeWrtWidth(14)};
`;

export const Header = styled.div`
  ${flexFsC}
  height: ${getSizeWrtWidth(headerHeight)};
`;

export const Title = styled.div`
  font-size: ${getSizeWrtWidth(22)};
  color: #03105c;
  font-weight: 800;
`;

export const Section = styled.div`
  width: 100%;
  margin-bottom: ${getSizeWrtWidth(30)};
`;

export const SectionTitle = styled.div`
  font-size: ${getSizeWrtWidth(18)};
  color: #0f203f;
  font-weight: 700;
  margin: 0 0 ${getSizeWrtWidth(15)} 0;
`;

export const SectionContent = styled.div`
  width: 100%;
`;

export const Departments = styled.div`
  ${flexFsC}
`;

export const Department = styled.div`
  ${flexColumnCC}
  width: ${getSizeWrtWidth(133)};
  height: ${getSizeWrtWidth(133)};
  border-radius: 10px;
  background-color: rgba(213,213,213,0.10196078431372549);
  border: 1px solid #00a8d2;
  cursor: pointer;
  margin-right: ${getSizeWrtWidth(15)};

  &:hover {
    background-color: #00a8d2;
    
    p {
      color: #FFF;
    }

    path {
      fill: #FFF;
    }
  }
`;

export const CommercialIcon = styled(Commercial)`
  width: ${getSizeWrtWidth(50)};
  height: ${getSizeWrtWidth(50)};
`;

export const ReoIcon = styled(Reo)`
  width: ${getSizeWrtWidth(50)};
  height: ${getSizeWrtWidth(50)};
`;

export const PersonalIcon = styled(Personal)`
  width: ${getSizeWrtWidth(50)};
  height: ${getSizeWrtWidth(50)};
`;

export const DepartmentTitle = styled.p`
  font-size: ${getSizeWrtWidth(14)};
  color: #00a8d2;
  font-weight: 400;
  margin: ${getSizeWrtWidth(10)} 0 0 0;
`;

export const SectionExpandable = styled.div`
  width: 100%;
`;

export const SectionExpandableHeader = styled.div`
  ${flexSbC}
  background-color: ${props => props.expanded ? '#FFF' : '#f7f7f7'};
  margin: 0 -${getSizeWrtWidth(30)};
  padding: ${getSizeWrtWidth(15)} ${getSizeWrtWidth(30)};
`;

export const SectionExpandableTitle = styled.div`
  font-size: ${getSizeWrtWidth(18)};
  color: #0f203f;
  font-weight: 700;
  margin: 0;
`;

export const SectionContentToggleButton = styled.button`
  ${flexCC}  
  border: none;
  cursor: pointer;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const AccordionPopupOpenIcon = styled(AccordionPopupOpen)`
  width: ${getSizeWrtWidth(22)};
  height: ${getSizeWrtWidth(22)};
`;

export const AccordionPopupCloseIcon = styled(AccordionPopupClose)`
  width: ${getSizeWrtWidth(22)};
  height: ${getSizeWrtWidth(22)};
`;

export const PolicyInfoItemHeader = styled.div`

`;

export const PolicyInfoItemHeaderTop = styled.div`%;
`;

export const PolicyInfoItemId = styled.div`
  font-size: ${getSizeWrtWidth(18)};
  color: #525c6e;
  font-weight: 700;
  margin: 0 0 ${getSizeWrtWidth(5)} 0;
`;

export const PolicyInfoItemHeaderBottom = styled.div`
  ${flexFsC}
`;
