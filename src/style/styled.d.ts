import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string
    colors: {
        background: string
        primaryAccent: string
        secondaryAccent: string
        topBarBackground: string
        stroke: string
        primaryText: string
        secondaryText: string
    };
  }
}