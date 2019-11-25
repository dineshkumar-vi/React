import "isomorphic-unfetch";


import { HttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";


export default class AplClient {

  static apolloClient = null;

  static getClient() {
    if(AplClient.apolloClient === null) {
      AplClient.apolloClient = new ApolloClient({
        link: new HttpLink({
          uri: 
          "https://graphqlclient/query"
        }),
        cache
      });
    }
    return this.apolloClient;
  }
}
