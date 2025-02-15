import axios from "axios";
import { APP_CONFIG } from "./app-config";

interface CreateUserParams {
  userId: string;
  nickname: string;
  profileUrl?: string;
  issueAccessToken?: boolean;
}
const SEND_BIRD_APP_ID = APP_CONFIG.SEND_BIRD.APP_ID;
const SEND_BIRD_API_TOKEN = APP_CONFIG.SEND_BIRD.API_TOKEN;

const SEND_BIRD_USER_API_URL = `https://api-${SEND_BIRD_APP_ID}.sendbird.com/v3/users`;
const SEND_BIRD_GROUP_CHANNEL_API_URL = `https://api-${APP_CONFIG.SEND_BIRD.APP_ID}.sendbird.com/v3/group_channels`;

const createSendBirdUser = async (params: CreateUserParams) => {
  const headers = {
    "Content-Type": "application/json",
    "Api-Token": SEND_BIRD_API_TOKEN,
  };
  const data = {
    user_id: params.userId,
    nickname: params.nickname,
    profile_url: params.profileUrl || "",
  };
  try {
    const response = await axios.post(SEND_BIRD_USER_API_URL, data, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating SendBird user:", error);
  }
};

const createGroupChannel = async (name: string, user_ids: string[]) => {
  const headers = {
    "Content-Type": "application/json",
    "Api-Token": SEND_BIRD_API_TOKEN,
  };
  const data = {
    name: name,
    user_ids: user_ids,
    is_distinct: true,
  };
  try {
    const response = await axios.post(SEND_BIRD_GROUP_CHANNEL_API_URL, data, {
      headers,
    });
    console.log("Group channel created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating group channel:", error);
    throw error;
  }
};

export { createSendBirdUser, createGroupChannel };
