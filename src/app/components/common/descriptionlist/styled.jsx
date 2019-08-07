import styled from 'styled-components';

//  constants
import {
  flexCC,
  flexSbC,
  flexFsC,
  flexFsFs,
  flexFsFsWrap,
  flexColumnFsFs,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles'

export const DescriptionList = styled.div`
  width: 100%;
  padding: ${getSizeWrtWidth(15)};
  border-radius: 5px;
  background-color: #eeeeee;
  margin-bottom: ${getSizeWrtWidth(15)};
`;

export const DescriptionListTitle = styled.h2`
  font-size: ${getSizeWrtWidth(14)};
  color: #0f203f;
  font-weight: 700;
`;

export const DescriptionListItem = styled.div`
  ${flexSbC}
  width: 100%;
  margin-bottom: ${getSizeWrtWidth(30)};
`;

export const DescriptionListHeader = styled.div`
  ${flexFsC}
  padding-right: ${getSizeWrtWidth(30)};
  margin-right: ${getSizeWrtWidth(15)};
  border-right: 1px solid #cfd1dc;
`;

export const DescriptionListFields = styled.div`
  ${flexFsFs}
  width: 100%;
`;

export const DescriptionListField = styled.div`
  flex: 1;
  ${flexColumnFsFs}
`;

export const DescriptionTitle = styled.p`
  font-size: ${getSizeWrtWidth(12)};
  color: #868b96;
  font-weight: 700;
  margin: 0 0 ${getSizeWrtWidth(10)} 0;
`;

export const DescriptionValue = styled.div`
  font-size: ${getSizeWrtWidth(14)};
  color: #525c6e;
  font-weight: 700;
  margin: 0;
`;