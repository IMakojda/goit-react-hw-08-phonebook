import styled from "styled-components";
import { NavLink } from 'react-router-dom';
export const Title = styled.h1`
  margin-top: 150px;
  font-size: 45px;
  text-align: center;
}
`
export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #1976d2;
  font-size: 45px;
  &.active {
    color: #0e44c2;
  }
  &:hover{
    color:#0e44c2;
  }
`;