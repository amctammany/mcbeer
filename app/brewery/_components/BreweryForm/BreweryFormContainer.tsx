"use client";
import { Form } from "@/components/Form/Form";
import { TextField } from "@/components/Form/TextField";

import { BreweryType } from "@/types/Brewery";
import React, { useActionState, useContext, useEffect, useState } from "react";

export type BreweryFormContainerProps = {
  src: BreweryType;
  action: any;
  toolbar?: React.ReactNode | React.ReactNode[];
  modals?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
};
export function BreweryFormContainer({
  src,
  toolbar,
  modals,
  action,
  children,
}: BreweryFormContainerProps) {
  return (
    <Form src={src} action={action} toolbar={toolbar} modals={modals}>
      {children}
    </Form>
  );
}

export default BreweryFormContainer;
