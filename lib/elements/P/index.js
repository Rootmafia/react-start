import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { rem } from 'polished';

import {
  fontColors,
  fontSizes,
  fontStyles,
  fontWeights
} from "../../modifiers";

const modifierConfig = {
  ...fontColors,
  ...fontSizes,
  ...fontStyles,
  ...fontWeights,
};

const P = styled.p`
  font-size: ${props => rem(props.theme.fontSizes.medium)};
  margin: 0;
  ${applyStyleModifiers(modifierConfig)};
`;

P.modifiers = modifierConfig;

/** @component */
export default P;
