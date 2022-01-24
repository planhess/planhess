import { gql } from "apollo-server";

export const coordinatesSchema = gql`
  type Coordinates {
    idcoordinates: ID
    latitude: Float!
    longitude: Float!
  }
`;
