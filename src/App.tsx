import { AppProviders } from "@company/commons";
import { HomePage } from "./pages/Home";

const App = () => {
  return (
    <AppProviders>
      <HomePage />
    </AppProviders>
  );
};

export default App;
