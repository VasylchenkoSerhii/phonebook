import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { LogOutBtn, Greeting, Wripper } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Wripper>
      <Greeting>
        Hello, <b>{user.name}</b>
      </Greeting>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutBtn>
    </Wripper>
  );
}
