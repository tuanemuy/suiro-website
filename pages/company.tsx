import { url } from "lib/util";

import { Page } from "@unflexible/ui-next-page";
import { Stacked, PlainText } from "@unflexible/ui-core";
import { Scaffold, Sidebar, Footer } from "components/layout";
import { PageHeading } from "components/heading";

export default function CompanyPage() {
  return (
    <Page
      title="サービス情報 | Studio.Suiro（スタジオ・スイロ）"
      description="群馬県高崎市のシステム開発サービスStudio.Suiro（スタジオ・スイロ）のサービス情報です。Webサイトやソフトウェアの開発、各種デザイン、写真や動画の撮影及び編集、Web広告のコンサルティング等を行っています。"
      path={url("company")}
      color="#fafafa"
      ogImage={url("images/og.png")}
      ogType="article"
    >
      <Scaffold
        title="サービス情報 | 群馬県高崎市でシステム開発ならStudio.Suiro（スタジオ・スイロ）"
        sidebar={<Sidebar />}
        footer={<Footer />}
      >
        <PageHeading name="サービス情報" />

        <section>
          <Stacked padding={{ xl: [3, 3], xs: [2, 2] }} wrap>
            <PlainText>
              <h3>事業者名</h3>
              <p>Studio.Suiro（スタジオ・スイロ）</p>

              <h3>代表者</h3>
              <p>大田部 晃</p>

              <h3>所在地</h3>
              <p>
                〒370-0055
                <br />
                群馬県高崎市羅漢町1-1 フラワーマンション50A
              </p>

              <h3>連絡先</h3>
              <p>contact@suiro.ink</p>

              <h3>事業内容</h3>
              <ol>
                <li>
                  <span className="en">Web</span>
                  サイト、ソフトウェアの企画、設計、開発、制作、運営、販売、運用、保守、管理及びコンサルティング
                </li>
                <li>
                  広告物、出版物、デジタルコンテンツのデザインの企画、制作及び販売
                </li>
                <li>写真、映像の企画、撮影、編集及び販売</li>
                <li>インターネットによる広告業務及びそのコンサルティング</li>
              </ol>
            </PlainText>
          </Stacked>
        </section>
      </Scaffold>
    </Page>
  );
}
