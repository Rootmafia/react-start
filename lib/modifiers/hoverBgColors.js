import { lighten } from 'polished';

const hoverBgColors = {

  // colors
  hoverBgAmber: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.amber)};
    }
  `,
  hoverBgBlue: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.blue)};
    }
  `,
  hoverBgblueGrey: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.blueGrey)};
    }
  `,
  hoverBgBrown: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.brown)};
    }
  `,
  hoverBgCyan: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.cyan)};
    }
  `,
  hoverBgDeepOrange: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.deepOrange)};
    }
  `,
  hoverBgDeepPurple: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.deepPurple)};
    }
  `,
  hoverBgGreen: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.green)};
    }
  `,
  hoverBgIndigo: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.indigo)};
    }
  `,
  hoverBglightBlue: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.lightBlue)};
    }
  `,
  hoverBgLightGreen: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.lightGreen)};
    }
  `,
  hoverBgLime: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.lime)};
    }
  `,
  hoverBgOrange: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.orange)};
    }
  `,
  hoverBgPink: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.pink)};
    }
  `,
  hoverBgPurple: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.purple)};
    }
  `,
  hoverBgRed: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.red)};
    }
  `,
  hoverBgTeal: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.teal)};
    }
  `,
  hoverBgYellow: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.yellow)};
    }
  `,
};

export default hoverBgColors;
