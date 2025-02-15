"use client";
import React from "react";
import { Loader } from "lucide-react";
import { GroupChannelList } from "@sendbird/uikit-react/GroupChannelList";
import GroupChannel from "@sendbird/uikit-react/GroupChannel";
import SendbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
import useCurrentUser from "@/hooks/api/use-current-user";
import { APP_CONFIG } from "@/lib/app-config";
import { Button } from "@/components/ui/button";

import "@sendbird/uikit-react/dist/index.css";
import { useQueryState } from "nuqs";

const myColorSet = {
  "--sendbird-light-primary-500": "#00B840", // Primary color
  "--sendbird-light-primary-400": "#00D147", // Lighter shade
  "--sendbird-light-primary-300": "#00EA4E", // Even lighter shade
  "--sendbird-light-primary-200": "#00FF55", // Lightest shade
  "--sendbird-light-primary-100": "#E5F7E5", // Lightest shade (90% lighter)
};

const ProfileMessages = () => {
  const [selectedChannel, setSelectedChannel] = useQueryState("channelUrl");

  const { data: userData, isPending, isError, refetch } = useCurrentUser();
  const user = userData?.user;

  return (
    <main className="container mx-auto px-4 pt-3 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-auto flex flex-col items-center justify-center pt-5">
          {isPending && <Loader className="animate-spin w-10 h-10" />}

          {isError && (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-center text-sm text-muted-foreground">
                Could not load Chat, try again later
              </p>
              <Button onClick={() => refetch()}>Try again</Button>
            </div>
          )}

          <div style={{ width: "100%", height: "80vh" }}>
            {user && (
              <>
                <SendbirdProvider
                  appId={APP_CONFIG.SEND_BIRD.APP_ID}
                  userId={user.$id}
                  //nickname={user.name}
                  colorSet={myColorSet}
                  allowProfileEdit={false}
                  isUserIdUsedForNickname={false}
                >
                  <div className="flex items-center h-full">
                    <GroupChannelList
                      allowProfileEdit={false}
                      selectedChannelUrl={selectedChannel || undefined}
                      onChannelSelect={(channel: any) => {
                        setSelectedChannel(channel?._url);
                      }}
                      channelListQueryParams={{
                        includeEmpty: true,
                      }}
                      onChannelCreated={() => {}}
                      className="col-span-1"
                    />
                    <GroupChannel channelUrl={selectedChannel || ""} />
                  </div>
                </SendbirdProvider>

                {/* <SendbirdApp
                  appId={APP_CONFIG.SEND_BIRD.APP_ID}
                  userId={user.$id}
                  colorSet={myColorSet}
                  nickname={user.name}
                  allowProfileEdit={false}
                  isUserIdUsedForNickname={false}
                /> */}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileMessages;
