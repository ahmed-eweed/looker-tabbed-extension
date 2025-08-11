import React, { useCallback } from "react";
import { LookerEmbedSDK } from "@looker/embed-sdk";
import styled from "styled-components";

export const EmbeddedDashboard = ({ id }: { id: number }) => {
  const embedCtrRef = useCallback((el: HTMLDivElement | null) => {
    if (el) {
      el.innerHTML = "";
      LookerEmbedSDK.init("https://q84sale.de.looker.com");
      LookerEmbedSDK.createDashboardWithId(id)
        .appendTo(el)
        .build()
        .connect()
        .catch((error) => console.error("Embed error", error));
    }
  }, []);

  return <EmbedContainer ref={embedCtrRef} />;
};

const EmbedContainer = styled.div`
  width: 100%;
  height: 95vh;
  & > iframe {
    width: 100%;
    height: 100%;
  }
`;

