import { prisma } from "../../../prisma/prismaClient";
import { gql } from "apollo-server";
import { shop } from "@prisma/client";

export const shopSchema = gql`
  type Shop {
    idshop: ID
    name: String
    description: String!
    location: String!
    idcategory: Int!
  }
  type Query {
    getAllShops: [Shop]
    getShopById(id: Int!): Shop
  }
`;

export const getAllShops = async (): Promise<Array<shop>> =>
  prisma.shop.findMany();

export const getShopById = async (root: any, args: any): Promise<shop> =>
  prisma.shop.findUnique({
    where: {
      idshop: args.id,
    },
  });
