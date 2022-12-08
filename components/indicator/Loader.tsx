import styled from "@emotion/styled";
import { color } from "config";

type Props = {};

export const Loader = ({}: Props) => {
  return (
    <Component>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Component>
  );
};

const Component = styled.div`
  width: 50px;
  height: 60px;

  > span {
    background-color: ${color.theme};
    height: 100%;
    width: 7px;
    display: inline-block;
    margin-right: 3px;
    animation: stretchdelay 1.25s infinite ease-in-out;

    &:nth-of-type(2) {
      animation-delay: -1.1s;
    }

    &:nth-of-type(3) {
      animation-delay: -1s;
    }

    &:nth-of-type(4) {
      animation-delay: -0.9s;
    }

    &:nth-of-type(5) {
      animation-delay: -0.8s;
    }
  }

  @keyframes stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
    }
  }
`;
