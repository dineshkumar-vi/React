
import AplClient from "../../Utilities/ApolloClient";
import { apolloException } from "../../Utilities/CustomeException";
import { apolloQuery } from "./Query";

/**
 * Method used to call the AME Graphql server to
 *  get the application specific AEM labels
 * @returns pormise ( AEM content )
 * @returns error : Throw appolo exception
 */
export function getAemContentApi() {
  try {
    return AplClient.getClient().query({query: apolloQuery.GET_AEM_CONTENT});
  } catch(exception) {
    throw new apolloException(exception , "getAemContent");
  }
}
