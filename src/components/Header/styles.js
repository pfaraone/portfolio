import styled from "styled-components"

import { Link } from "gatsby"

export const NavLink = styled(Link)`
  flex-direction: column;
  justify-content: center;
  padding: 0 !important;
  position: relative;
  text-decoration: none;
  width: calc(3 * var(--header-padding));

  ${props => (props.active ? "color: var(--secondary) !important;" : "")}

  span {
    font-size: 13px;
    line-height: 1;
    padding-top: calc(var(--header-padding) / 4);
  }
`
