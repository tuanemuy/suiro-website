import { Page } from "@unflexible/ui-next-page";
import { Stacked, Columns, Block, PlainText } from "@unflexible/ui-core";
import { Scaffold, Sidebar, Footer } from "components/layout";
import { PageHeading } from "components/heading";
import { Button01 } from "components/button";

import { url } from "lib/util";
import { color } from "config";

export default function WorksPage() {
  return (
    <Page
      title="制作実績 | Studio.Suiro（スタジオ・スイロ）"
      description="群馬県高崎市のシステム開発サービスStudio.Suiro（スタジオ・スイロ）の制作実績です。「ことば」を大切にしたWebサイトを制作しています。他にも、誰でも使えるシステムや誰にでも伝わるデザインを作るのが得意です。"
      path={url("works")}
      color="#fafafa"
      ogImage={url("images/og.png")}
      ogType="article"
    >
      <Scaffold
        title="制作実績 | 群馬県高崎市でシステム開発ならStudio.Suiro（スタジオ・スイロ）"
        sidebar={<Sidebar />}
        footer={<Footer />}
      >
        <PageHeading name="制作実績" />

        <section>
          <Stacked padding={{ xl: [3, 3], xs: [2, 2] }} wrap>
            <Stacked>
              <Columns
                gap={{ xl: 4, l: 3, m: 2, s: 1 }}
                align="flex-start"
                wrap={{ xl: "nowrap", m: "wrap" }}
              >
                <Block shrink={0}>
                  <PlainText
                    fontSize={{ h3: { xl: 2, s: 1.5 } }}
                    lineHeight={{ h3: 1.5 }}
                  >
                    <h3>
                      ヤナガワ村役場様
                      <br />
                      <span className="en">Web</span>
                      サイト
                    </h3>
                  </PlainText>
                </Block>

                <Block shrink={1} grow={1}>
                  <Stacked>
                    <PlainText
                      fontSize={{
                        p: { xl: 1.25, s: 1 },
                        h3: { xl: 1.25, s: 1 },
                      }}
                      margin={{
                        h3: [1, 0, 0.5, 0],
                        p: [0.5, 0, 0.5, 0],
                        ul: [0.5, 0, 0.5, 0],
                      }}
                      liPadding={0.25}
                    >
                      <p>
                        群馬県高崎市柳川町で地域活性化・街づくりに尽力するヤナガワ村役場様の公式
                        <span className="en">Web</span>
                        サイトを制作させていただきました。
                      </p>

                      <h3>【対応機能】</h3>
                      <ul>
                        <li>お知らせ</li>
                        <li>店舗／イベント情報</li>
                        <li>問い合わせフォーム</li>
                        <li>オリジナルCMS</li>
                        <li>静的サイト生成</li>
                        <li>Googleアナリティクス</li>
                      </ul>
                    </PlainText>
                  </Stacked>

                  <Stacked padding={{ xl: [1, 0] }}>
                    <Button01
                      name="<span class='en'>Webサイト</span>を訪問する"
                      sub="<span class='en'>https://www.yanagawa.one</span>"
                      color={color.accent}
                      kind="link"
                      href="https://www.yanagawa.one"
                      target="_blank"
                    />
                  </Stacked>
                </Block>
              </Columns>
            </Stacked>

            <Stacked padding={{ xl: [2, 0] }}>
              <Columns repeat={{ xl: 2, s: 1 }} gap={{ xl: 2, l: 1 }}>
                <Block height={{ xl: "66.66%" }} fixRatio>
                  <img
                    src={url("images/mock_yanagawa.jpg")}
                    alt="Webサイトの例"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </Block>

                <Block height={{ xl: "66.66%" }} fixRatio>
                  <img
                    src={url("images/mock_yanagawa_1.jpg")}
                    alt="Webサイトの例"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </Block>
              </Columns>
            </Stacked>
          </Stacked>
        </section>
      </Scaffold>
    </Page>
  );
}
