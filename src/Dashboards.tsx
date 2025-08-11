import React, { useCallback } from "react";
import styled from "styled-components";
import { LookerEmbedSDK } from "@looker/embed-sdk";

// Initialize SDK once globally
LookerEmbedSDK.init("https://q84sale.de.looker.com");

export const EmbeddedDashboard = ({ id }: { id: number }) => {
  const embedCtrRef = useCallback((el: HTMLDivElement | null) => {
    if (el) {
      el.innerHTML = ""; // Clear previous embed
      LookerEmbedSDK.createDashboardWithId(id)
        .appendTo(el)
        .build()
        .connect()
        .catch((error) => console.error("Embed error", error));
    }
  }, [id]); // Re-run when ID changes

  return <EmbedContainer ref={embedCtrRef} key={id} />;
};

const EmbedContainer = styled.div`
  width: 100%;
  height: 95vh;
  & > iframe {
    width: 100%;
    height: 100%;
  }
`;

