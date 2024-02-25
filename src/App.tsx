import { useState } from "react";
import Navbar from "./components/common/Navbar";
import Section from "./components/common/Section";
import Uploader from "./components/Uploader";
import Mapper from "./components/Mapper";

function App() {
  const [sharedHeaders, setSharedHeaders] = useState<any>(null);

  return (
    <>
      <Navbar />
      <Section>
        <Uploader setHeaders={setSharedHeaders} />
        <Mapper sharedHeaders={sharedHeaders} />
      </Section>
    </>
  );
}

export default App;
