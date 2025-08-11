import React, { useState } from "react";
import { ComponentsProvider, Tabs2, Tab2 } from "@looker/components";
import { EmbeddedDashboard } from "./Dashboards";

export const Tabs = () => {
  const [activeId, setActiveId] = useState("1");

  return (
    <ComponentsProvider>
      <Tabs2 activeId={activeId} onChange={setActiveId}>
        <Tab2 id="1" label="Pulse">
          <EmbeddedDashboard id={1} />
        </Tab2>
        <Tab2 id="3" label="Transactions">
          <EmbeddedDashboard id={3} />
        </Tab2>
        <Tab2 id="197" label="Prod Pulse">
          <EmbeddedDashboard id={197} />
        </Tab2>
      </Tabs2>
    </ComponentsProvider>
  );
};

