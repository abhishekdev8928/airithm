import { createBrowserRouter } from "react-router-dom";
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
import ResourcesPage from "../pages/ResourcesPage";
import PricingPage from "../pages/PricingPage";
import AboutPage from "../pages/AboutPage";
import DemoPage from "../pages/DemoPage";
import SecurityPage from "../pages/SecurityPage";
import PlatformArchitecture from "@/pages/PlatformArchitecture";
import AutonomousTestingPage from "@/pages/AutonomousTestingPage";
import Integrations from "../pages/Integrations";
import AgenticArchitecturePage from "../pages/AgenticArchitecturePage";
import MemoryPage from "../pages/MemoryPage";
import DeploymentOptionsPage from "../pages/DeploymentOptionsPage";
import PlatformCapabilitiesPage from "../pages/PlatformCapabilitiesPage";

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
    path: "/declarative-context-protocol",
    element: <Declarative_Context_Protocol />
  },
  {
    path: "/tcm",
    element: <TcmPage />,
  },
  {
    path: "/context-capsule",
    element: <ContextCapsulePage />
  },
  {
    path: "/reflective-memory",
    element: <ReflectiveMemory />
  }, {
    path: "/neuro-test",
    element: <NeuroTestPage />
  }, {
    path: "/hybrid-attention-memory-network-page",
    element: <HamnPage />
  },
  {
    path: "/core-test",
    element: <CoreTestPage />
  }, {
    path: "/company",
    element: <CompanyPage />
  }, {
    path: "/resources",
    element: <ResourcesPage />
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/demo",
    element: <DemoPage />,
  }, {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/platform-architecture",
    element: <PlatformArchitecture />
  },
  {
    path: "/security",
    element: <SecurityPage />
  }, {
    path: "/autonomous-testing-vs-traditional-testing",
    element: <AutonomousTestingPage />
  },

  
  {
    path:"/integrations",
    element:<Integrations/>
  },{
    path:"/agentic-architecture",
    element:<AgenticArchitecturePage/>
  },{
    path:"/memory-and-graph-rag",
    element:<MemoryPage/>
  },{
    path:"/deployment-options",
    element:<DeploymentOptionsPage/>
  },{
    path:"/platform-capabilities",
    element:<PlatformCapabilitiesPage/>
  }
]);

export default router;
