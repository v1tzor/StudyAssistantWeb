import { Client, Account, Databases } from "appwrite";

const PROJECT_ID = '685aefd7003bf3aab9fc';
const ENDPOINT = 'https://fra.cloud.appwrite.io/v1';

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);
const account = new Account(client);

export { client, account };