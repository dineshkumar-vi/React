
import gql from "graphql-tag";

export const apolloQuery = {
  GET_AEM_CONTENT : gql`
  query aemcontent
  {
    getAEMContent(
    masterURL:"en/master",
    customURL:"en/",
    locale: "en",
    fragments: [ "gbcx-labels" ],
    hierarchy:["197500" ] )
    {
      fragmentName
      contentArray
      {
        key
        value
      }
    }
  }`
};
