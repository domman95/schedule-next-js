import Page from "../src/components/Page";
import { AppWrapper } from "../src/context/state";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Page>
        <Component {...pageProps} />
      </Page>
    </AppWrapper>
  );
}

export default MyApp;
