import { type HopIngredient } from "@mcbeer/types";
import { Button, Header } from "@mcbeer/ui";

export type HopDisplayProps = {
  hop: HopIngredient;
};

const Prop = ({ label, children }) => {
  return (
    <div>
      <b>{label}:</b>
      <span>{children}</span>
    </div>
  );
};
export const HopDisplay = ({ hop }: HopDisplayProps) => {
  return (
    <>
      <Header text={`Hop: ${hop.name}`} />
      <Button />
      {["name", "description", "country", "alphaRange", "betaRange"].map(
        (p) => (
          <Prop key={p} label={p}>
            {hop[p]}
          </Prop>
        )
      )}
    </>
  );
};
