
import AplClient from "Utilities/ApolloClient";
import { apolloException } from "Utilities/CustomeException";
import { loginQuery } from "./Query";

/**
 * Method used to call the login Graphql server to
 *  get the user information
 * @argument Username
 * @argument password
 * @returns pormise ( user )
 * @returns error : Throw appolo exception
 */
export function loginApi(userName, password) {
  try {
    return AplClient.getClient().query({query: loginQuery.LOGIN});
  } catch(exception) {
    throw new apolloException(exception , "getAemContent");
  }
}
