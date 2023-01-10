import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logOut } from 'redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <p>Welcome {user.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
