import styled from "@emotion/styled";
import { url } from "lib/util";
import { breakpoint } from "config";

import Link from "next/link";

type Props = {
  name: string;
  sub?: string;
  color: string;
  kind: "button" | "link" | "submit";
  href?: string;
  onClick?: () => void;
  target?: string;
};

export const Button01 = ({
  name,
  sub,
  color,
  kind,
  href,
  onClick,
  target,
}: Props) => {
  if (kind === "link") {
    return (
      <LinkButton href={href || ""} target={target || "_self"}>
        <Inner name={name} sub={sub} color={color} />
      </LinkButton>
    );
  } else {
    return (
      <Button onClick={onClick} type={kind}>
        <Inner name={name} sub={sub} color={color} />
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
  sub?: string;
  color: string;
};

const Inner = ({ name, sub, color }: InnerProps) => {
  return (
    <InnerComponent color={color} className={sub !== undefined ? "" : "single"}>
      <div className="arrow">
        <img src={url("images/arrow_01.png")} alt="→" />
      </div>

      <div className="text">
        <p className="sub" dangerouslySetInnerHTML={{ __html: sub || "" }} />
        <p className="name" dangerouslySetInnerHTML={{ __html: name }} />
      </div>
    </InnerComponent>
  );
};

type InnerComponentProps = {
  color: string;
};

const InnerComponent = styled.div<InnerComponentProps>`
  display: flex;
  align-items: center;
  transition-duration: 0.3s;

  &:hover {
    transform: translateX(10px);
  }

  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    background-color: ${(p) => p.color};
    border-radius: 50%;

    img {
      width: 50%;
    }
  }

  .text {
    color: ${(p) => p.color};

    p {
      margin-left: 1rem;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1;
      text-align: left;
    }
  }

  .name {
    margin-top: 0.5rem;
  }

  &.single {
    .arrow {
      width: 40px;
      height: 40px;
    }

    .name {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: ${breakpoint.m_s}px) {
    .arrow {
      width: 48px;
      height: 48px;
    }

    .text {
      p {
        margin-left: 0.75rem;
        font-size: 1rem;
      }
    }

    &.single {
      .arrow {
        width: 32px;
        height: 32px;
      }
    }
  }
`;
