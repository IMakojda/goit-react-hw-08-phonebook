import OutlinedButtons from "components/Button/Button"
import { Div, Span } from "./UserMenu.styled"
import authSelector from "Redux/AuthReducer/Selector"
import { useDispatch, useSelector } from "react-redux"
import authOperations from "Redux/AuthReducer/AuthOperation"
import FaceIcon from '@mui/icons-material/Face';
import { AvatartName } from "./UserMenu.styled"

function ucFirst(name) {
  if (!name) return name;
  return name[0].toUpperCase() + name.slice(1);
}

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUserName);

  return (
    <Div>
      <Span>Welcome
        <AvatartName>
          <FaceIcon sx={{ fontSize: 30 }} />
          {ucFirst(name)}
        </AvatartName>
      </Span>
      <OutlinedButtons text={'Logout'} func={() => dispatch(authOperations.logOut())} />
    </Div>
  )

};
