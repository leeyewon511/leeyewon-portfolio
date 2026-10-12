import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { SmoothScroll } from "./components/portfolio/SmoothScroll";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <SmoothScroll>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>
            <Toaster position="bottom-right" richColors />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </SmoothScroll>
    </ErrorBoundary>
  );
}

export default App;
