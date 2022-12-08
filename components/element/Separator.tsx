import styled from "@emotion/styled";

type Props = { color: string };

export const Separator = ({ color }: Props) => {
  return <Component color={color} />;
};

const Component = styled.hr<Props>`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${(p) => p.color};
`;
