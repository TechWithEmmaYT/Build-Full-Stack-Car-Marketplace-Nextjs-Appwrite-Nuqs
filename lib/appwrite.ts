import "server-only";
import { Client, Account, Storage, Databases } from "node-appwrite";
import { APP_CONFIG } from "./app-config";
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "@/constants/server";

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(APP_CONFIG.APPWRITE.ENDPOINT)
    .setProject(APP_CONFIG.APPWRITE.PROJECT_ID)
    .setKey(APP_CONFIG.APPWRITE.KEY);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
}

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(APP_CONFIG.APPWRITE.ENDPOINT)
    .setProject(APP_CONFIG.APPWRITE.PROJECT_ID);

  const session = await cookies().get(AUTH_COOKIE_NAME);
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storages() {
      return new Storage(client);
    },
  };
}

export async function createAnonymousClient() {
  const client = new Client()
    .setEndpoint(APP_CONFIG.APPWRITE.ENDPOINT)
    .setProject(APP_CONFIG.APPWRITE.PROJECT_ID);

  return {
    get databases() {
      return new Databases(client);
    },
  };
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}
