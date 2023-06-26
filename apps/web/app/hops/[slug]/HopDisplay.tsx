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
  if (!hop) return <>Not Ready</>;
  return (
    <>
      <Header text={`Hop: ${hop.name}`} />
      {["name", "description", "country", "alphaRange", "betaRange"].map(
        (p) => (
          <Prop key={p} label={p}>
            {hop[p]}
          </Prop>
        )
      )}
      <Prop label={"Alpha Range"}>
        {hop?.alphaRange?.[0]} - {hop?.alphaRange?.[1]}
      </Prop>
      <Prop label={"Beta Range"}>
        {hop?.betaRange?.[0]} - {hop?.betaRange?.[1]}
      </Prop>
    </>
  );
};
