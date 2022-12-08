import { ReactNode } from "react";
import styled from "@emotion/styled";
import { color } from "config";

import { Stacked } from "@unflexible/ui-core";
import { Button01 } from "components/button";

type Props = {
  onSubmit: () => void;
  children: ReactNode;
};

export const Form = ({ onSubmit, children }: Props) => {
  return (
    <Component onSubmit={onSubmit}>
      <Stacked>{children}</Stacked>

      <Stacked padding={{ xl: [2, 0], xs: [1.5, 0] }}>
        <Button01
          name="送信する"
          sub="<span class='en'>Submit</span>"
          kind="submit"
          color={color.accent}
        />
      </Stacked>
    </Component>
  );
};

const Component = styled.form`
  .line:not(:first-of-type) {
    margin-top: 2rem;
  }

  .error {
    margin-top: 0.5rem;
    color: ${color.error};

    &::before {
      content: "！ ";
    }
  }

  .label {
    &.required::after {
      content: "*";
      margin-left: 0.25rem;
      color: ${color.accent};
    }
  }

  label {
    font-size: 1rem;
    font-weight: 700;
  }

  .input {
    margin-top: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 16px;
    font-weight: 400;
    background-color: ${color.white};
    border: 1px solid ${color.lightGray};
    border-radius: 3px;

    &:focus {
      border: 1px solid ${color.accent};
    }
  }

  .checkbox {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
      width: 1rem;
    }

    label {
      margin-left: 1rem;
    }
  }
`;
