import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { PersistGate } from "redux-persist/integration/react";

import App from "@components/App";
import store, { persistor } from "@store";
import { SUPABASE_LINK, SUPABASE_KEY } from "@constants";

const supabase = createClient(`${SUPABASE_LINK}`, `${SUPABASE_KEY}`);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SessionContextProvider supabaseClient={supabase}>
        <App />
      </SessionContextProvider>
    </PersistGate>
  </Provider>
);
