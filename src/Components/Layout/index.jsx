import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="mb-6 mt-20 flex flex-col items-center">{children}</div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
