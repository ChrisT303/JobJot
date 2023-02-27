import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage, LandingPage, RegisterPage, ProtectedRoute } from "./pages";
import { AddJob, Profile, Stats, AllJobs, Shared } from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Shared />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="add-job" element={<AddJob />} />
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
