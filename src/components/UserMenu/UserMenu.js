import OutlinedButtons from "components/Button/Button"
import { Div, Span } from "./UserMenu.styled"
import authSelector from "Redux/AuthReducer/Selector"
import { useDispatch, useSelector } from "react-redux"
import authOperations from "Redux/AuthReducer/AuthOperation"

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelector.getUserEmail);
  return (
    <Div>
      <Span>Welcome {email}</Span>
      <OutlinedButtons text={'Logout'} func={() => dispatch(authOperations.logOut())} />
    </Div>
  )

};
