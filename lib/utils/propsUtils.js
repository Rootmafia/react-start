
export const themeConst = (propertyName) => (props) => props.theme[propertyName];
export const themeDimension = (propertyName) => (props) => props.theme.dimensions[propertyName];
export const themeButton = (propertyName) => (props) => props.theme.button[propertyName];
export const themeColors = (propertyName) => (props) => props.theme.colors[propertyName];

