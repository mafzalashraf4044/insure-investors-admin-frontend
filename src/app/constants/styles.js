//  utils
import {getSizeWrtWidth} from 'utils/styles';

export const navWidth = '5vw';
export const navBg = '#101f77';

export const headingFontSize = 28;

export const contentPaddingBottom = 40;
export const contentPaddingHorizontal = 30;

export const headerHeight = (2 * contentPaddingBottom) + headingFontSize;

export const contentPadding = `
  padding: 0 ${getSizeWrtWidth(contentPaddingHorizontal)} ${getSizeWrtWidth(contentPaddingBottom)} ${getSizeWrtWidth(contentPaddingHorizontal)};
`;

export const textOverflowEllipsis = `
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const flex = `
  display: flex;
`;

export const flexColumn = `
  display: flex;
  flex-direction: column;
`;

export const flexCC = `
  ${flex}
  justify-content: center;
  align-items: center;
`;

export const flexColumnCC = `
  ${flexColumn}
  justify-content: center;
  align-items: center;
`;

export const flexSbC = `
  ${flex}
  justify-content: space-between;
  align-items: center;
`;

export const flexColumnSbC = `
  ${flexColumn}
  justify-content: space-between;
  align-items: center;
`;

export const flexFsC = `
  ${flex}
  justify-content: flex-start;
  align-items: center;
`;

export const flexColumnFsC = `
  ${flexColumn}
  justify-content: flex-start;
  align-items: center;
`;

export const flexFsFs = `
  ${flex}
  justify-content: flex-start;
  align-items: flex-start;
`;

export const flexColumnFsFs = `
  ${flexColumn}
  justify-content: flex-start;
  align-items: flex-start;
`;
