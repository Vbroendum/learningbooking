import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import { PasswordInput, Input } from '@mantine/core';

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const context = useRouteContext({ from: "/" });
  console.log(context);

  const loginStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    padding: "20px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", width: "100%",  }}>
        <h1 style={{ textAlign: "flex-start" }}>EFIF</h1>
        <h3>Log på</h3>
      
      <div style={loginStyle}>
        <Input.Wrapper style={{ width: "20%", marginBottom: "24px" }} required label="Brugernavn">
        <Input placeholder="Indtast brugernavn" />
        </Input.Wrapper>
        <PasswordInput style={{ width: "20%", marginTop: "24px" }} required
        label="Password"
        placeholder="password"
    />
      </div>
    </div>
  );
}
