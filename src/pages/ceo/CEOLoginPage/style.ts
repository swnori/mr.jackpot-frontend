import styled from 'styled-components';

export const LoginContainer = styled.div`
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
