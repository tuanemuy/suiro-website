import { Button01 } from "components/button";

import styled from "@emotion/styled";
import { size, breakpoint } from "config";

type Props = {
  name: string;
  overview: string;
  thumbnail: string;
  readMore: string;
  href: string;
  color: string;
};

export const Article01 = ({
  name,
  overview,
  thumbnail,
  readMore,
  href,
  color,
}: Props) => {
  return (
    <Component>
      <div className="thumbnail">
        <img
          src={thumbnail}
          alt={name}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </div>

      <div className="text">
        <h3 dangerouslySetInnerHTML={{ __html: name }} />
        <p dangerouslySetInnerHTML={{ __html: overview }} />
      </div>

      <div className="button">
        <Button01 name={readMore} color={color} kind="link" href={href} />
      </div>
    </Component>
  );
};

const Component = styled.article`
  position: relative;

  .thumbnail {
    position: relative;
    width: 100%;

    &::before {
      content: "";
      display: block;
      padding-top: 66.66%;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  > .text {
    margin-top: ${size.grid * 0.5}px;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    p {
      margin-top: ${size.grid * 0.25}px;
      font-size: 1rem;
      font-weight: 400;
    }
  }

  .button {
    margin-top: ${size.grid * 0.5}px;
  }

  @media only screen and (max-width: ${breakpoint.m_s}px) {
    > .text {
      h3 {
        font-size: 1.25rem;
      }
    }
  }
`;
