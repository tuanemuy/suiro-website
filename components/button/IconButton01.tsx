import styled from "@emotion/styled";
import { size, breakpoint, color as colorPallet } from "config";

import Link from "next/link";

type Props = {
  name: string;
  en: string;
  icon: string;
  color: string;
  kind: "button" | "link" | "submit";
  href?: string;
  onClick?: () => void;
  target?: string;
  reverse?: boolean;
};

export const IconButton01 = ({
  name,
  en,
  icon,
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
          en={en}
          icon={icon}
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
          en={en}
          icon={icon}
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
  en: string;
  icon: string;
  color: string;
  reverse: boolean;
};

const Inner = ({ name, en, icon, color, reverse }: InnerProps) => {
  return (
    <InnerComponent color={color} reverse={reverse}>
      <div className="icon" dangerouslySetInnerHTML={{ __html: icon }}></div>

      <div className="text">
        <p className="en" dangerouslySetInnerHTML={{ __html: en }} />
        <p className="name" dangerouslySetInnerHTML={{ __html: name }} />
      </div>
    </InnerComponent>
  );
};

type InnerComponentProps = {
  color: string;
  reverse: boolean;
};

const InnerComponent = styled.div<InnerComponentProps>`
  padding: ${size.grid * 1}px;
  color: ${(p) => (p.reverse ? colorPallet.white : p.color)};
  background-color: ${(p) => (p.reverse ? p.color : colorPallet.white)};
  transition-duration: 0.3s;

  .icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-shrink: 0;
    width: 56px;

    svg {
      width: 100%;
      fill: ${(p) => (p.reverse ? colorPallet.white : p.color)};
    }
  }

  .text {
    margin-top: ${size.grid * 0.75}px;

    .en {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0;
    }

    .name {
      margin-top: ${size.grid * 0.5}px;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1;
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
    .icon {
      width: 48px;
    }

    .text {
      margin-top: ${size.grid * 0.5}px;

      .en {
        font-size: 1.5rem;
      }

      .name {
        margin-top: ${size.grid * 0.25}px;
        font-size: 0.9rem;
      }
    }
  }
`;
