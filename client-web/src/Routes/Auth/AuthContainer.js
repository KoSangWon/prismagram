import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");

  const [requestSecret] = useMutation(LOG_IN);

  const onLogin = (e) => {
    e.preventDefault();
    if (email !== "") {
      requestSecret({
        update: (_, {data}) => { // useMuation에 대한 결과를 확인할 수 있음
          const {requestSecret} = data;
          if(!requestSecret){
            toast.error("You don't have an account yet, create one");
            setTimeout(() => setAction("signUp"))
          }
        },
        variables: { email: email.value },
      });
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onLogin={onLogin}
    />
  );
};
