import { Page } from "@unflexible/ui-next-page";
import { Stacked, Columns, Block, PlainText } from "@unflexible/ui-core";
import { url } from "lib";

export default function Home() {
  return (
    <Page
      title="Studio.Suiro（スタジオ・スイロ）"
      description="群馬県高崎市でシステム開発ならStudio.Suiro（スタジオ・スイロ）。"
      path=""
      color="#fafafa"
    >
      <Stacked height={{ xl: "100vh" }} wrap>
        <Columns align="center" justify="center">
          <Block height={{ xl: "auto" }}>
            <Stacked height={{ xl: "auto" }}>
              <Block width={{ xl: "320px" }}>
                <img
                  src={url("images/sitelogo.png")}
                  alt="スタジオ・スイロ"
                  width="100%"
                />
              </Block>
            </Stacked>

            <Stacked height={{ xl: "auto" }} padding={{ xl: [0.25, 0] }}>
              <PlainText
                fontSize={{ h1: { xl: 1.25 } }}
                textAlign={{ h1: "center" }}
                color={{ h1: "#4f8395" }}
              >
                <h1>スタジオ・スイロ</h1>
              </PlainText>
            </Stacked>

            <Stacked height={{ xl: "auto" }} padding={{ xl: [1, 0] }}>
              <PlainText textAlign={{ p: "center" }}>
                <p>Under construction...</p>
              </PlainText>
            </Stacked>
          </Block>
        </Columns>
      </Stacked>
    </Page>
  );
}
