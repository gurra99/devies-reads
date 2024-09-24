import styled from "styled-components";
import { dimensions } from "../../../utilities/dimensions";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  width: min(80%, 15.6rem);
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--color-grey);
  margin-block: 0.94rem;
  color: var(--color-black);

  @media (min-width: ${dimensions.mediumDevices}) {
    width: min(100%, 44rem);
  }
`;

export const Image = styled.img`
  width: 7.5rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 1.25rem;
  white-space: normal;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;

  @media (min-width: ${dimensions.mediumDevices}) {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`;

export const ProductNameContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fs-300);

  @media (min-width: ${dimensions.mediumDevices}) {
    flex: 4;
    flex-direction: column;

    & p:last-child {
      color: var(--color-grey);
    }
  }
`;

export const Title = styled.p`
  width: 100%;
  color: var(--color-primary);
  font-weight: bold;
  font-size: var(--fs-400);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;

  @media (min-width: ${dimensions.mediumDevices}) {
    margin-left: 1.5rem;
  }
`;

export const Text = styled.p`
  width: 100%;
  text-align: center;
  font-size: var(--fs-300);
`;

export const ButtonContainer = styled.div`
  @media (min-width: ${dimensions.mediumDevices}) {
    flex: 2;
  }
`;
