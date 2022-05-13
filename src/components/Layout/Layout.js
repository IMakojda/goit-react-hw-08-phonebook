import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";
import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";
import Spinner from 'react-bootstrap/Spinner'

export default function Layout() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner animation="border" variant="primary" size="xl" />}>
        <Outlet />
      </Suspense>
    </Container>
  )
};