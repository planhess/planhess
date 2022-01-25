import { gql } from "@apollo/client";

export const GET_ALL_SHOPS = gql`
  query GetAllShops {
    getAllShops {
      idshop
      name
      description
      location
      idcategory
      coordinates {
        idcoordinates
        latitude
        longitude
      }
    }
  }
`;
