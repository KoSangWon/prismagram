import React from "react";
import { gql, useQuery } from "@apollo/client";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import Footer from "./Footer";

const QUERY = gql`
  {
    isLoggedIn @client # 서버까지 가지 않고 동작
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%
`;

export default () => {

  const {data} = useQuery(QUERY);
  // console.log('a', data, loading, error);
  console.log(data?.isLoggedIn)

  return (
    data?
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <AppRouter isLoggedIn={data.isLoggedIn} />
        <Footer/>
      </Wrapper>
    </ThemeProvider>:null
  );
};
