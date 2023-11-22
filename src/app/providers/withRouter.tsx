import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex flex-col items-center h-screen justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        {component()}
      </Suspense>
    </BrowserRouter>
  );
