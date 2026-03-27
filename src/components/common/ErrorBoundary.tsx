import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Enterprise-grade Error Boundary to prevent the entire app from crashing
 * on component or animation failures.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-secondary p-8 text-center">
          <div className="max-w-md">
            <h2 className="font-editorial text-3xl text-primary mb-4">Algo deu errado.</h2>
            <p className="text-muted mb-8">
              Pedimos desculpas pelo inconveniente. Por favor, tente recarregar a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-primary text-secondary uppercase text-[10px] tracking-widest hover:opacity-90 transition-opacity"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
