import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Gowun Dodum", sans-serif;
  font-weight: 400;
  font-style: normal;
}
li {
  list-style: none;
  color: inherit;
}
a {
  text-decoration: none ;
}
`;
export default GlobalStyle;
