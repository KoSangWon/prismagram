import React from "react";
import { gql, useQuery } from "@apollo/client";
import styled, { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { HashRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Routes";
import Footer from "./Footer";
import Header from "./Header";

export const LOGIN_QUERY = gql`
  {
    isLoggedIn @client # 서버까지 가지 않고 동작
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

export default () => {
  const { data } = useQuery(LOGIN_QUERY);
  // console.log('a', data, loading, error);
  console.log(data?.isLoggedIn);

  return data ? (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <>
        <Header />
        <Wrapper>
          <AppRouter isLoggedIn={data.isLoggedIn} />
          <Footer />
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </Wrapper>
        </>
      </Router>
    </ThemeProvider>
  ) : null;
};
