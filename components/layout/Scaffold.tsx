import styled from "@emotion/styled";
import { ReactNode, useState } from "react";
import { color, size, breakpoint } from "config";

import { Stacked, PlainText } from "@unflexible/ui-core";

type Props = {
  title: string;
  sidebar: ReactNode;
  footer?: ReactNode;
  modal?: ReactNode;
  children: ReactNode;
};

export const Scaffold = ({
  title,
  sidebar,
  footer,
  modal,
  children,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Component isExpanded={isExpanded}>
      <header>{sidebar}</header>

      <div className="body">
        <Stacked padding={{ xl: [0.1, 0] }} wrap>
          <PlainText
            fontSize={{ h1: { xl: 0.7, s: 0.5 } }}
            fontWeight={{ h1: 400 }}
          >
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
          </PlainText>
        </Stacked>

        <main>{children}</main>

        {footer && <footer>{footer}</footer>}
      </div>

      {modal && <div className="modal">{modal}</div>}

      <button onClick={() => setIsExpanded((v) => !v)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </Component>
  );
};

type ComponentProps = {
  isExpanded: boolean;
};

const Component = styled.div<ComponentProps>`
  display: flex;

  &::before {
    content: "";
    display: block;
  }

  > header {
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    height: 100vh;
    background-color: ${color.theme};
    transition-duration: 0.5s;
  }

  &::before,
  > header {
    width: ${size.grid * 7}px;
  }

  > .body {
    position: relative;
    z-index: 1;
    flex-grow: 1;
    min-height: 100vh;

    .title h1 {
      font-size: 0.7rem;
      font-weight: 400;
      text-align: left;
    }
  }

  > .modal {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.75);
  }

  @media only screen and (max-width: ${breakpoint.xl_l}px) {
    &::before,
    > header {
      width: ${size.grid * 6}px;
    }
  }

  @media only screen and (max-width: ${breakpoint.l_m}px) {
    &::before {
      width: 0;
    }

    > header {
      transform: ${(p) =>
        p.isExpanded ? "translateX(0)" : "translateX(-100%)"};
    }

    > button {
      position: fixed;
      z-index: 2;
      right: 4vw;
      bottom: 4vw;
      display: inline-block;
      width: 65px;
      height: 65px;
      background-color: ${color.theme};
      border-radius: 50%;
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      transition-duration: 0.3s;

      ${(p) =>
        p.isExpanded &&
        `
          transform: rotate(360deg);
      `}

      span {
        position: absolute;
        left: 22%;
        display: inline-block;
        width: 56%;
        height: 3px;
        background-color: #fff;
        border-radius: 4px;

        &:nth-of-type(1) {
          top: 19px;

          ${(p) =>
            p.isExpanded &&
            `
              width: 18px;
              transform: translate(-1.5px, 6px) rotate(-45deg);
          `}
        }

        &:nth-of-type(2) {
          top: 31px;
        }

        &:nth-of-type(3) {
          bottom: 19px;

          ${(p) =>
            p.isExpanded &&
            `
              width: 18px;
              transform: translate(-1.5px, -6px) rotate(45deg);
          `}
        }
      }
    }
  }
`;
