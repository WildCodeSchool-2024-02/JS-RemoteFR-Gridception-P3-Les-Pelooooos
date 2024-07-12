import PropTypes from "prop-types";
import { useLocation, Link } from "react-router-dom";

export default function NavBarLinks({ to, icon, activeIcon }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to}>
      <img src={isActive ? activeIcon : icon} alt="icon" />
    </Link>
  );
}

NavBarLinks.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  activeIcon: PropTypes.string.isRequired,
};
