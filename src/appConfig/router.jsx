import {createBrowserRouter} from "react-router-dom";


import HomePage from '@/pages/HomePage';
import ContextIntelligencePage from '@/pages/ContextIntelligencePage';
import AutomationPage from '@/pages/AutomationPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ai-automation",
    element: <AutomationPage />,
  },
  {
    path: "/context-intelligence-platform",
    element: <ContextIntelligencePage />,
  },
]);

export default router;
