import { Stacked, PlainText } from "@unflexible/ui-core";

type Props = {};

export const Footer = ({}: Props) => {
  return (
    <Stacked padding={{ xl: [0.5, 0.5] }} wrap>
      <PlainText textAlign={{ p: "left" }}>
        <p>
          ©<span className="en">Studio.Suiro</span>（スタジオ・スイロ）
        </p>
      </PlainText>
    </Stacked>
  );
};
