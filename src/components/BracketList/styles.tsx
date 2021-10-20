import styled from "styled-components";
import { deviceBreakpoints } from "../../styles";

export const BracketList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media ${deviceBreakpoints.laptop} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Bracket = styled.div<{ isCurrent?: boolean }>`
  align-items: center;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: center;
  padding: 1rem;
  width: 12rem;
  ${(props) => props.isCurrent && `background: #21c9218f`}
`;
