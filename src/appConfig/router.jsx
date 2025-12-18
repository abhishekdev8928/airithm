import {createBrowserRouter} from "react-router-dom";
import HomePage from '@/pages/HomePage';
import ContextIntelligencePage from '@/pages/ContextIntelligencePage';
import AutomationPage from '@/pages/AutomationPage';
import RealTimeContext from "@/pages/RealTimeContext"
import Declarative_Context_Protocol from "../pages/Declarative_Context_Protocol";
import TcmPage from "../pages/TcmPage"
import ContextCapsulePage from "../pages/ContextCapsulePage"
import ReflectiveMemory from "../pages/ReflectiveMemory"
import NeuroTestPage from "../pages/NeuroTestPage"
import HamnPage from "../pages/HamnPage";
import CoreTestPage from "../pages/CoreTestPage";
import CompanyPage from "../pages/CompanyPage";
 
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
  {
    path: "/real-time-context",
    element: <RealTimeContext />,
  },
  {
    path:"/declarative-context-protocol",
    element:<Declarative_Context_Protocol/>
  },
  {
    path: "/tcm",
    element: <TcmPage />,
  },
  {
    path:"/context-capsule",
    element:<ContextCapsulePage />
  },
  {
    path:"/reflective-memory",
    element:<ReflectiveMemory/>
  },{
    path:"/neuro-test",
    element:<NeuroTestPage/>
  },{
      path:"/hybrid-attention-memory-network-page",
      element:<HamnPage />
    },
    {
      path:"/core-test",
      element:<CoreTestPage />
    },{
      path:"/company",
      element:<CompanyPage />
    }
]);

export default router;
