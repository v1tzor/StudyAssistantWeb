import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.APPWRITE_ENDPOINT)
    .setProject(import.meta.env.APPWRITE_PROJECT_ID);

const account = new Account(client);

export { client, account };
