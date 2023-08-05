import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return <h1>There was an error: {error.message}</h1>;
}
