import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "./../../ui/SpinnerMini";

import styled from "styled-components";
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end; // Or space-between
  gap: 1.2rem;
`;

function LoginForm() {
  // Guest credentials
  const guestEmail = "mustafa@example.com";
  const guestPassword = "123456789";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  // Function to handle guest login
  function handleGuestLogin() {
    setEmail(guestEmail);
    setPassword(guestPassword);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        {/* Button Group for guest login */}
        <ButtonGroup>
          <Button
            onClick={handleGuestLogin}
            size="medium" // or any size you have
            variation="secondary" // or any style you have
            type="button" // Important to prevent form submission
            disabled={isLoading}
          >
            Use guest account
          </Button>
        </ButtonGroup>
      </FormRowVertical>

      <FormRowVertical>
        <Button disabled={isLoading} size="large">
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
