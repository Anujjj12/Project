// import "@/styles/globals.css";
import { wrapper } from "@/store/store";
import "@/styles/login.scss";
import "@/styles/footer.scss";
import "@/styles/global.scss";
import "@/styles/header.scss";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

const DynamicApp = dynamic(() => import("./AppWrapper"), {
  ssr: false,
});

export default function App(rest) {
  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    if (window && typeof window !== "undefined") {
      window.__NEXT_REDUX_STORE__ = store;
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId="<your_client_id>">
      {" "}
      <Provider store={store}>
        <DynamicApp {...props} />
      </Provider>
    </GoogleOAuthProvider>
  );
}
