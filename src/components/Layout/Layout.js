import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";
import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";

export default function Layout() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>LOADING.../</div>}>
        <Outlet />
      </Suspense>
    </Container>
  )
};