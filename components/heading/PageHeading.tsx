import { color } from "config";

import { Stacked, PlainText } from "@unflexible/ui-core";
import { Separator } from "components/element";

type Props = {
  name: string;
};

export const PageHeading = ({ name }: Props) => {
  return (
    <>
      <Stacked padding={{ xl: [1.5, 0], xs: [1, 0] }} wrap>
        <PlainText
          fontSize={{ h2: { xl: 2, xs: 1.5 } }}
          color={{ h2: color.theme }}
        >
          <h2 dangerouslySetInnerHTML={{ __html: name }} />
        </PlainText>
      </Stacked>

      <Stacked wrap padding={{ xl: [1.5, 0], xs: [1, 0] }}>
        <Separator color={color.theme} />
      </Stacked>
    </>
  );
};
