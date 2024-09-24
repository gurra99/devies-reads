import React, { useEffect, useState, useContext } from "react";
import {
  FormContainer,
  FormWrapper,
  Label,
  FormGroup,
  FormTextContainer,
  Header,
  SignInContainer,
} from "./sign-in.styles";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/fragments/input-field/input-field";
import { SubmitButton } from "../../components/fragments/submit-button/submit-button";
import DataContext from "../../context/data-context";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { setAccessToken, setUserId } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      fetch("https://devies-reads-be.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      })
        .then((resp) => {
          if (!resp.ok) {
            setError("Wrong Email and Password");
            throw Error("Something went wrong!");
          }
          return resp.json();
        })
        .then((data) => {
          setUserId(data.userId);
          setAccessToken(data.accessToken);
          toast.success("Signed In");
          navigate(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const isButtonDisabled = () => {
    if (email && password) {
      return false;
    }
    return true;
  };

  return (
    <SignInContainer>
      <FormContainer>
        <Header>Sign In</Header>
        <FormWrapper autoComplete="off" onSubmit={handleSubmit}>
          <FormGroup>
            <FormTextContainer>
              <Label>Email</Label>
              {error && <Label style={{ color: "red" }}>{error}</Label>}
            </FormTextContainer>
            <InputField
              value={email}
              name="formEmail"
              id="formEmail"
              onChangeHandler={(event) => {
                handleChangeEmail(event.target.value);
              }}
              invalid={false}
            />
          </FormGroup>

          <FormGroup>
            <FormTextContainer>
              <Label>Password</Label>
            </FormTextContainer>
            <InputField
              value={password}
              name="formPassword"
              type="password"
              id="formPassword"
              onChangeHandler={(event) => {
                handleChangePassword(event.target.value);
              }}
              invalid={false}
            />
          </FormGroup>
          <SubmitButton
            description={"Submit"}
            disabled={isButtonDisabled()}
            type="submit"
            data-cy="submit-button"
          />
        </FormWrapper>
      </FormContainer>
    </SignInContainer>
  );
};

export default SignIn;
