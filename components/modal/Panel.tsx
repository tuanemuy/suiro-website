import { ReactNode } from "react";
import styled from "@emotion/styled";
import { size, color } from "config";

type Props = {
  children: ReactNode;
  onDismiss: () => void;
};

export const Panel = ({ children, onDismiss }: Props) => {
  return (
    <Component>
      <div className="content">{children}</div>

      <div className="dismiss">
        <button onClick={() => onDismiss()}>閉じる</button>
      </div>
    </Component>
  );
};

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  padding: ${size.grid * 1}px;
  background-color: ${color.white};
  border: 1px solid ${color.lightGray};
  border-radius: 5px;

  .dismiss {
    display: flex;
    justify-content: center;
    margin-top: ${size.grid * 0.5}px;

    button {
      padding: ${size.grid * 0.25}px ${size.grid * 0.5}px;
      color: ${color.white};
      background-color: ${color.theme};
      border: 1px solid ${color.theme};
      border-radius: 3px;
      transition-duration: 0.3s;

      &:hover {
        color: ${color.theme};
        background-color: ${color.white};
      }
    }
  }
`;
