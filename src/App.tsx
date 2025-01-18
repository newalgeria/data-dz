import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Api from "./pages/Api";
import ApiDetail from "./pages/ApiDetail";
import DatasetDetail from "./pages/DatasetDetail";
import GettingStarted from "./pages/GettingStarted";
import Auth from "./pages/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/api" element={<Api />} />
        <Route path="/api/:id" element={<ApiDetail />} />
        <Route path="/dataset/:id" element={<DatasetDetail />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;