import Link from "next/link";
import { Stacked } from "@unflexible/ui-core";

import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { color, size } from "config";
import { url } from "lib/util";

type Props = {};

type Route = {
  name: string;
  path: string;
};

export const Sidebar = ({}: Props) => {
  const { pathname } = useRouter();

  const routes: Route[] = [
    { name: "ホーム", path: url("") },
    { name: "事業内容", path: url("#business") },
    { name: "制作実績", path: url("works") },
    { name: "サービス情報", path: url("company") },
    { name: "お問い合わせ", path: url("contact") },
  ];

  return (
    <>
      <Stacked padding={{ xl: [1, 0] }}>
        <Sitelogo href={url("")}>
          <img
            src={url("images/sitelogo.png")}
            alt="スタジオ・スイロ"
            width={size.grid * 3}
          />
        </Sitelogo>
      </Stacked>

      <Stacked padding={{ xl: [1, 1] }}>
        <Menu>
          <ul>
            {routes.map((r: Route, index: number) => {
              return (
                <li key={index}>
                  <Link
                    href={r.path}
                    className={pathname === r.path ? "selected" : ""}
                  >
                    {r.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Menu>
      </Stacked>
    </>
  );
};

const Sitelogo = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  padding: 0 ${size.grid}px;
  text-decoration: none;
`;

const Menu = styled.nav`
  ul {
    list-style: none;
  }

  a {
    display: block;
    padding: ${size.grid * 0.25}px ${size.grid}px;
    color: ${color.white};
    font-weight: 700;
    text-decoration: none;
    transition-duration: 0.3s;

    &:hover,
    &.selected {
      color: ${color.theme};
      background-color: ${color.white};
    }
  }
`;
