import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from 'redux/selectors';
import { logOut } from 'redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  return (
    <div>
      <p>Welcome {userEmail}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
