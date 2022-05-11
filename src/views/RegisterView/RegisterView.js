import { useState, } from "react";
import { Form, Label, Button } from "./RegisterView.styled";
import { useDispatch } from "react-redux";
import authOperations from "Redux/AuthReducer/AuthOperation";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')



  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'userPassword':
        setPassword(value);
        break;


      default:
        return;
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }))
    resetState();
  };

  const resetState = () => {
    setName('');
    setEmail('');
    setPassword('')

  };

  return (
    <div>
      <h1>
        Registration Page
      </h1>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Label> <span>Name</span>
          <input type='text' name="name" value={name} onChange={handleChange} required />
        </Label>
        <Label> <span>Email</span>
          <input type='email' name="email" value={email} onChange={handleChange} required />
        </Label>
        <Label><span>Password</span>
          <input type='password' name="userPassword" value={password} onChange={handleChange} required autoComplete="on" />
        </Label>
        <Button type="submit">Registration</Button>
      </Form>
    </div>

  );
};