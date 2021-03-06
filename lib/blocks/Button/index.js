import styled from 'styled-components';
import { lighten, rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import Icon from './StyledIcon';
import Text from './StyledText';

import { bgColors, hoverBgColors } from '../../modifiers';

import gridScale from '../../utils/gridScale';

const customModifiers = {
  fullWidth: () => `flex: 1`
};

const modifierConfig = {
  ...bgColors,
  ...hoverBgColors,
  ...customModifiers
};

const StyledButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: ${props => props.theme.button.borderWidth} solid #865CD6;
  border-radius: ${props => props.theme.dimensions.borderRadius};
  color: ${props => props.theme.colors.chrome000};
  font-size: ${props => rem(props.theme.dimensions.fontSize)};
  display: flex;
  justify-content: center;
  text-align: center;  
  padding: ${props => `${gridScale(props, 1)} ${gridScale(props, 3)}`};
  outline: none;
  max-width: ${props => props.theme.dimensions.maxButtonWidth};
  transition: 0.1s ease-in-out;
    
  &:active,
  &:hover,
  &:focus {
    box-shadow: 0 0 0 ${props => props.theme.button.borderWidth} #865CD6;
  }

  ${applyStyleModifiers(modifierConfig)};
`;

/** @component */
export default StyledButton;
