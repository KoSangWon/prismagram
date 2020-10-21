import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";

const QUERY = gql`
  {
    isLoggedIn @client # 서버까지 가지 않고 동작
  }
`;

export default () => {

  const {data} = useQuery(QUERY);
  // console.log('a', data, loading, error);
  console.log(data?.isLoggedIn)

  return (
    data?
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <AppRouter isLoggedIn={data.isLoggedIn} />
      </>
    </ThemeProvider>:null
  );
};
