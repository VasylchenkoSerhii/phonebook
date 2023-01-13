import { Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
}
