import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import AdminJobs from "./components/admin/AdminJobs";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import JobCreate from "./components/admin/JobCreate";
import Applicants from "./components/admin/Applicants";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/jobs",
      element: <Jobs />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/description/:id",
      element: <JobDescription />,
    },
    // For Recruiters
    {
      path: "/admin/companies",
      element: <Companies />,
    },
    {
      path: "/admin/jobs",
      element: <AdminJobs />,
    },
    {
      path: "/admin/companies/create",
      element: <CompanyCreate />,
    },
    {
      path: "/admin/companies/:id",
      element: <CompanySetup />,
    },
    {
      path: "/admin/job/create",
      element: <JobCreate />,
    },
    {
      path: "/admin/job/edit/:id",
      element: <JobCreate />,
    },
    {
      path: "/admin/jobs/:id/applicants",
      element: <Applicants />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
