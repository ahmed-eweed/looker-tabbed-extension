import React, { useState } from "react";
import { ComponentsProvider, Tabs2, Tab2 } from "@looker/components";
import { EmbeddedDashboard } from "./Dashboards";

export const Tabs = () => {
  const [activeId, setActiveId] = useState("1");

  return (
    <ComponentsProvider>
      <Tabs2 activeId={activeId} onChange={setActiveId}>
        <Tab2 id="1" label="Pulse">
          {activeId === "1" && <EmbeddedDashboard key="1" id={1} />}
        </Tab2>
        <Tab2 id="3" label="Transactions">
          {activeId === "3" && <EmbeddedDashboard key="3" id={3} />}
        </Tab2>
        <Tab2 id="197" label="Prod Pulse">
          {activeId === "197" && <EmbeddedDashboard key="197" id={197} />}
        </Tab2>
      </Tabs2>
    </ComponentsProvider>
  );
};

