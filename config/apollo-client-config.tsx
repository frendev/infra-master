import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";

import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
  CONTENTFUL_ACCESS_TOKEN,
} from "./envs";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

const httpLink = new HttpLink({
  fetch,
  uri: CONTENTFUL_URL,
  headers: {
    authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    "Content-Language": "en-us",
  },
});

const link = ApolloLink.from([httpLink]);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: link as any,
  cache,
});

export default apolloClient;
