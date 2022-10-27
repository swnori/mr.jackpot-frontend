import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  div {
    cursor: default;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SignUpUtilContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 7em;
  gap: 1.5em;
`;
