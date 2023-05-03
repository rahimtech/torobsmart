import Header from "../src/components/Header.jsx";
import Login from "../src/components/Register/Login.jsx";
import Footer from "../src/components/Footer.jsx";
import Search from "../src/components/mainpage/Search";
import { Configuration, OpenAIApi } from "openai";

export default function Home() {
  // async function getDataGPT() {
  //   const configuration = new Configuration({
  //     organization: "org-LzIl9aALldV3AUTMYX7GHw9V",
  //     apiKey: process.env.OPENAI_API_KEY,
  //   });
  //   console.log("process.env.OPENAI_API_KEY: ", process.env.OPENAI_API_KEY);
  //   console.log("configuration: ", configuration);

  //   const openai = new OpenAIApi(configuration);
  //   console.log("openai: ", openai);
  //   // const response = await openai.listEngines();
  // }

  // const pi = getDataGPT();

  return (
    <>
      <Header />
      <Login />
      <section
        style={{ minHeight: "85vh" }}
        className="flex justify-center items-center"
      >
        <div className="flex h-full justify-center items-center">
          {/* this is Search Input */}
          <Search />
        </div>
      </section>
      <Footer />
    </>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
