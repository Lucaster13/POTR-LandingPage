import { useRoutes } from "react-router";
import ROUTES from "./routes";
import Nav from "./Nav";

function App() {
  const content = useRoutes(ROUTES);

  return (
    <div className="container mx-auto">
      <Nav />
      {content}
    </div>
  );
}

export default App;
