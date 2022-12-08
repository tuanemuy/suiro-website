import styled from "@emotion/styled";
import { color as colorPallet, breakpoint } from "config";

import Link from "next/link";

type Props = {
  name: string;
  illust: string;
  color: string;
  kind: "button" | "link" | "submit";
  href?: string;
  onClick?: () => void;
  target?: string;
  reverse?: boolean;
};

export const IllustButton01 = ({
  name,
  illust,
  color,
  kind,
  href,
  onClick,
  target,
  reverse,
}: Props) => {
  if (kind === "link") {
    return (
      <LinkButton href={href || ""} target={target || "_self"}>
        <Inner
          name={name}
          illust={illust}
          color={color}
          reverse={reverse || false}
        />
      </LinkButton>
    );
  } else {
    return (
      <Button onClick={onClick}>
        <Inner
          name={name}
          illust={illust}
          color={color}
          reverse={reverse || false}
        />
      </Button>
    );
  }
};

const Button = styled.button``;

const LinkButton = styled(Link)`
  text-decoration: none;
`;

type InnerProps = {
  name: string;
  illust: string;
  color: string;
  reverse: boolean;
};

const Inner = ({ name, illust, color, reverse }: InnerProps) => {
  return (
    <InnerComponent color={color} reverse={reverse}>
      <div
        className="illust"
        dangerouslySetInnerHTML={{ __html: illust }}
      ></div>

      <div className="text">
        <p>{name}</p>
      </div>
    </InnerComponent>
  );
};

type InnerComponentProps = {
  color: string;
  reverse: boolean;
};

const InnerComponent = styled.div<InnerComponentProps>`
  display: flex;
  align-items: center;
  height: 136px;
  color: ${(p) => (p.reverse ? colorPallet.white : p.color)};
  background-color: ${(p) => (p.reverse ? p.color : colorPallet.white)};
  transition-duration: 0.3s;

  .text {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .illust {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-shrink: 0;
    width: 136px;
    height: 100%;

    svg {
      height: 84%;
      fill: ${(p) => (p.reverse ? colorPallet.white : p.color)};
    }
  }

  &:hover {
    color: ${(p) => (p.reverse ? p.color : colorPallet.white)};
    background-color: ${(p) => (p.reverse ? colorPallet.white : p.color)};

    svg {
      fill: ${(p) => (p.reverse ? p.color : colorPallet.white)};
    }
  }

  @media only screen and (max-width: ${breakpoint.m_s}px) {
    height: 112px;

    .text {
      font-size: 1rem;
    }
  }
`;
