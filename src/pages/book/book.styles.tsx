import styled from "styled-components";
import { dimensions } from "../../utilities/dimensions";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-block: 3%;
  flex-wrap: wrap;

  @media (min-width: ${dimensions.tablets}) {
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 17.5rem;
  margin-bottom: 5%;

  @media (min-width: ${dimensions.tablets}) {
    margin: 0 5% 0 0;
  }

  @media (min-width: ${dimensions.mediumDevices}) {
    width: 20rem;
    margin: 0 4% 0 0;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4%;

  @media (min-width: ${dimensions.tablets}) {
    width: min(80%, 50rem);
    border-bottom: solid 1px rgba(13, 54, 139, 0.1);
    padding: 2% 2% 5% 2%;
  }

  @media (min-width: ${dimensions.mediumDevices}) {
    width: min(98%, 50rem);
    flex-direction: row;
    align-items: flex-start;
    border-bottom: solid 1px rgba(13, 54, 139, 0.1);
    padding: 2% 2% 4% 2%;
  }
`;

export const TextContainer = styled.div`
  font-size: 2rem;
  @media (min-width: ${dimensions.tablets}) {
    margin-top: 8%;
  }

  @media (min-width: ${dimensions.mediumDevices}) {
    margin-top: unset;
  }
`;

export const Header = styled.h1`
  margin: 0 0 2% 0;
`;

export const DescriptionContainer = styled.p`
  font-size: 2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 6%;
  display: -webkit-box;
  color: var(--color-grey);
  line-height: 1.2;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 12;
  line-clamp: 12;

  @media (min-width: ${dimensions.mediumDevices}) {
    margin-bottom: 4%;
    line-height: 1.3;
    font-size: var(--fs-400);
  }
`;

export const DescriptionName = styled.span`
  font-size: 1.5rem;
  color: var(--color-black);
  margin-right: 0.6rem;
`;

export const DescriptionValue = styled.span`
  font-size: 1.5rem;
  margin-left: 0.01rem;
`;
