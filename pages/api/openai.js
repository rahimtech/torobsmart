import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-LzIl9aALldV3AUTMYX7GHw9V",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
console.log("openai: ", openai);
const response = await openai.listEngines();
