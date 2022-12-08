import styled from "@emotion/styled";
import { color, size, breakpoint } from "config";

type Props = {
  name: string;
  en: string;
  rank: 1 | 2 | 3 | 4 | 5;
};

const tags = [
  styled.h2(),
  styled.h1(),
  styled.h2(),
  styled.h3(),
  styled.h4(),
  styled.h5(),
];

export const SectionHeading = ({ name, en, rank }: Props) => {
  const Tag = tags[rank];

  return (
    <Component>
      <p dangerouslySetInnerHTML={{ __html: en }} />
      <Tag dangerouslySetInnerHTML={{ __html: name }} />
    </Component>
  );
};

const Component = styled.div`
  p {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    display: flex;
    align-items: center;
    margin-top: ${size.grid * 0.5}px;
    line-height: 1;
    font-size: 1.25rem;
    font-weight: 700;

    &::before {
      content: "";
      display: flex;
      width: 1em;
      height: 1em;
      margin-right: 0.25em;
      border-radius: 50%;
      background-color: ${color.theme};
    }
  }

  @media only screen and (max-width: ${breakpoint.m_s}px) {
    p {
      font-size: 2.5rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: ${breakpoint.s_xs}px) {
    p {
      font-size: 2rem;
    }
  }
`;
