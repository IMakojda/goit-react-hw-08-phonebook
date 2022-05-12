import { useState, } from "react";
import { Form, Label, Button } from "./LoginView.styled";
import { useDispatch } from "react-redux";
import authOperations from "Redux/AuthReducer/AuthOperation";


export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }))
    resetState();
  };

  const resetState = () => {
    setEmail('');
    setPassword('')

  };

  return (
    <div>
      <h1>
        Login
      </h1>
      <Form onSubmit={handleSubmit} autoComplete='on'>
        <Label> <span>Email</span>
          <input type='email' name="email" value={email} onChange={handleChange} required />
        </Label>
        <Label><span>Password</span>
          <input type='password' name="password" value={password} onChange={handleChange} required autoComplete="on" />
        </Label>
        <Button type="submit">LogIn</Button>
      </Form>
    </div>

  );
};