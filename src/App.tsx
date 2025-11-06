import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Teams from "./pages/Teams";
import Resources from "./pages/Resources";
import Partnership from "./pages/Partnership";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/events"} component={Events} />
      <Route path={"/teams"} component={Teams} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/partnership"} component={Partnership} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <LoadingScreen />
          <Toaster />
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

