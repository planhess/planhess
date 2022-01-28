import { prisma } from "../../../prisma/prismaClient";
import { gql } from "apollo-server";
import { shop } from "@prisma/client";
import { coordinatesSchema as Coordinates } from "./coordinates";
export const shopSchema = gql`
  ${Coordinates}
  type Shop {
    idshop: ID
    name: String
    description: String!
    location: String!
    idcategory: Int!
    coordinates: Coordinates
  }
  type Query {
    getAllShops: [Shop]
    getShopById(id: Int!): Shop
  }
`;

export const getAllShops = async (): Promise<Array<shop>> =>
  prisma.shop.findMany({
    include: {
      coordinates: true,
    },
  });

export const getShopById = async (root: any, args: any): Promise<shop> => {
  const shop = await prisma.shop.findUnique({
    where: {
      idshop: args.id,
    },
    include: {
      coordinates: true,
    },
  });
  return shop;
};
