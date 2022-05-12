import { Title, Link } from "./HomeView.styled";
export default function HomeView() {
  return (
    <Title>
      Welcome this is a page for storing telephone contacts.
      Please <Link to="/login">Login</Link>
    </Title>
  );
};