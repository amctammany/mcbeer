import { Button } from "@/components/ui/button";
import { TopBar } from "@/components/TopBar/TopBar";
import React from "react";
import { SettingsContainerForm, SettingsForm } from "./SettingsForm";
import { User } from "@/generated/prisma/client";

export type SettingsProps<S = unknown> = {
  action: (prev: S, formData: FormData) => S | Promise<S>;
  user: User;
};
export function Settings({ user, action }: SettingsProps) {
  return (
    <SettingsContainerForm user={user} action={action}>
      <TopBar
        breadcrumbs={[
          { title: "Dashboard", url: "/admin" },
          { title: "Settings", url: "/admin/settings" },
        ]}
      >
        <Button type="submit">Save</Button>
      </TopBar>
      <SettingsForm user={user} />
    </SettingsContainerForm>
  );
}

export default Settings;
