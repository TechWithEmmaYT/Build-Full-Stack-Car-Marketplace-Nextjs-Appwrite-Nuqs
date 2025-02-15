"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader, MessageSquareText } from "lucide-react";
import { useRouter } from "next/navigation";
import { createSendBirdUser, createGroupChannel } from "@/lib/sendbird";
import useLogin from "@/hooks/use-login-dialog";
import useCurrentUser from "@/hooks/api/use-current-user";

interface ChatSellerButtonProps {
  displayTitle: string;
  shopOwnerUserId: string;
  shopName: string;
}

const ChatSellerButton = ({
  shopOwnerUserId,
  shopName,
  displayTitle,
}: ChatSellerButtonProps) => {
  const router = useRouter();
  const { onOpen } = useLogin();
  const { data: userData, isPending } = useCurrentUser();
  const user = userData?.user;

  const [isLoading, setIsLoading] = useState(false);

  const handleStartChat = async () => {
    if (!user) {
      onOpen(); // Open the login popup if the user is not logged in
      return;
    }
    setIsLoading(true);

    try {
      // Step 1: Create the customer user
      try {
        await createSendBirdUser({
          userId: user.$id,
          nickname: user.name,
        });
      } catch (error) {
        console.error("Error creating customer SendBird user:", error);
      }

      // Step 2: Create the seller user
      try {
        await createSendBirdUser({
          userId: shopOwnerUserId,
          nickname: shopName,
        });
      } catch (error) {
        console.error("Error creating seller SendBird user:", error);
      }

      // Step 4: Create a channel between the customer and seller
      const channelName = `${shopName}-${displayTitle}`;
      const channel = await createGroupChannel(channelName, [
        user.$id,
        shopOwnerUserId,
      ]);
      router.push(`/profile-messages?channelUrl=${channel.channel_url}`);
      setIsLoading(false);
    } catch (error) {
      console.error("Error starting chat:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mt-4">
        <Button
          variant="default"
          size="lg"
          className="w-full
             border-primary text-white !gap-1 h-10 text-[15px]
              font-medium disabled:pointer-events-none"
          disabled={isLoading || isPending}
          onClick={handleStartChat}
        >
          {isLoading ? (
            <Loader className="!w-5 !h-5 animate-spin" />
          ) : (
            <MessageSquareText className="!w-5 !h-5" />
          )}
          Start chat
        </Button>
      </div>
    </div>
  );
};

export default ChatSellerButton;
