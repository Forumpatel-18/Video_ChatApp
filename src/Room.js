import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export const Room = () => {
  const { roomID } = useParams();
  console.log(roomID);
  const meeting = async (element) => {
    // generate Kit Token
    const appID = 970540625;
    const serverSecret = "0dd303a4a5a324777130ed058b3a004b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Forum Patel"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return (
    <div
      //   className="myCallContainer"
      ref={meeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};
