import styled, { css } from "styled-components";
import { Title } from "../ClassesTimeline/styles";

export const LearnWebhackingSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 75vh;
  padding: 2rem 7rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    div {
      width: 100%;
    }

    img {
      display: none;
    }
  }
`;

export const LeftWrapper = styled.div`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;

    p {
      margin-top: 1rem;
      margin-bottom: 3rem;
      font-size: ${fontSizes["medium-md"]};
      color: ${colors["gray200"]};
    }
  `}
`;

export const LeftWrapperTitle = styled(Title)`
  align-items: flex-start;

  h2 {
    text-align: left;
  }
`;