import styled from '@emotion/styled';

export const LogoContainer = styled.div`
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  &.circle {
    border-radius: 50%;
    overflow: hidden;
  }

  &.small img {
    width: 2rem;
  }

  &.sm img {
    width: 4rem;
  }

  &.medium img {
    width: 8rem;
  }

  &.ml img {
    width: 10rem;
  }

  &.large img {
    width: 20rem;
  }

  & img {
    width: 100%;
  }
`;
