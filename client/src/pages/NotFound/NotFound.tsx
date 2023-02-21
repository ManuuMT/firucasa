import { Link, useRouteError } from "react-router-dom";

type RouteError = {
  statusText?: string;
  message?: string;
};

const NotFound: React.FC = () => {
  const error = useRouteError() as RouteError;

  return (
    <div>
      <h1>404</h1>
      <p>{error.statusText || error.message}</p>
      <Link to="/">
        <div>Back to Home</div>
      </Link>
    </div>
  );
};
export default NotFound;
