import { lazy, Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";

const Home = lazy(() => import("./pages/home"));
const Complete = lazy(() => import("./pages/complete"));
const Users = lazy(() => import("./pages/users"));

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/complete" component={Complete} />
      <Route path="/users" component={Users} />
    </Routes>
  );
};

export default App;
