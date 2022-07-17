import { UiProvider } from "./context/ui";
import DoughPage from "./Pages/DoughPage";

function App() {
  return (
    <UiProvider>
      <DoughPage />
    </UiProvider>
  );
}

export default App;
