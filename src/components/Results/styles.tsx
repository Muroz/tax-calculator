import styled from "styled-components";

export const ResultTitle = styled.h3`
  color: #54575a;
  font-weight: 600;
  margin: 0;
  border-bottom: 1px solid gray;
`;

export const ResultContainer = styled.div`
  align-items: center;
  border: 0.5px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  max-width: 30rem;
  width: 75%;
`;

export const ResultRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const ResultLabel = styled.span<{ bold?: boolean }>`
  color: #54575a;
  font-size: 16px;
  text-align: left;
  ${(props) => props.bold && `font-weight: bold`};
`;

export const ResultValue = styled.span<{ color?: string; bold?: boolean }>`
  color: ${(props) => (props.color ? props.color : `#54575a`)};
  font-size: 20px;
  ${(props) => props.bold && `font-weight: bold`};
`;
