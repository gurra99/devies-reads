import React, { useState, useContext } from "react";
import {
  FormContainer,
  FormWrapper,
  Label,
  FormGroup,
  FormTextContainer,
  Header,
  SignUpContainer,
} from "./sign-up.styles";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/fragments/input-field/input-field";
import { SubmitButton } from "../../components/fragments/submit-button/submit-button";
import DataContext from "../../context/data-context";
import { toast } from "react-toastify";

const SignUp = () => {
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const { setUserId, setAccessToken } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usernameInput.length <= 3) {
      console.log("Error");
      setErrorEmail("Email must be at least 3 characters long");
      return;
    }

    if (usernameInput && passwordInput) {
      fetch("https://devies-reads-be.onrender.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput,
        }),
      })
        .then((resp) => {
          if (!resp.ok) {
            setErrorEmail("Username has already been taken");
            throw Error("Something went wrong!");
          }
          return resp.json();
        })
        .then((data) => {
          setUserId(data.userId);
          setAccessToken(data.accessToken);
          toast.success("Signed Up");
          navigate(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChangeEmail = (value: string) => {
    setUsernameInput(value);
  };

  const handleChangePassword = (value: string) => {
    setPasswordInput(value);
  };

  const isButtonDisabled = () => {
    if (usernameInput && passwordInput) {
      return false;
    }
    return true;
  };

  return (
    <SignUpContainer>
      <FormContainer>
        <Header>Sign Up</Header>
        <FormWrapper autoComplete="off" onSubmit={handleSubmit}>
          <FormGroup>
            <FormTextContainer>
              <Label>Email</Label>
              {errorEmail && (
                <Label style={{ color: "red" }}>{errorEmail}</Label>
              )}
            </FormTextContainer>
            <InputField
              value={usernameInput}
              name="formSignUpEmail"
              id="userName"
              dataCy="validate-email-input"
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
              value={passwordInput}
              name="formSignUpPassword"
              type="password"
              dataCy="validate-password-input"
              id="passWord"
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
          />
        </FormWrapper>
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUp;
