import { useState } from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";

const GuestCredentials = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-500);
  text-align: center;
  margin-top: 1.2rem;
  line-height: 1.6;

  & span {
    font-weight: 600;
    font-family: "Sono";
  }
`;

function LoginForm() {
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

  function handleGuestLogin() {
    login({ email: guestEmail, password: guestPassword });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
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
        <Button disabled={isLoading} size="large">
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
        <Button
          onClick={handleGuestLogin}
          size="large"
          variation="secondary"
          type="button"
          disabled={isLoading}
        >
          Log in as Guest
        </Button>
      </FormRowVertical>

      <GuestCredentials>
        To test the application, you can log in as a guest.
      </GuestCredentials>
    </Form>
  );
}

export default LoginForm;
