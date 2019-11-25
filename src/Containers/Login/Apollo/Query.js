
import gql from "graphql-tag";

export const loginQuery = {
  LOGIN : gql`
  query login
  {
    login(
    userName:"test",
    password:"test",
  )
  }`
};
