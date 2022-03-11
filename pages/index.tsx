import * as React from 'react';
import Head from 'next/head';
import {Layout} from 'components/structures/layout/Layout';
import styles from 'components/structures/main/Main.module.scss';

import {HdgLv1} from 'components/modules/HdgLv1/HdgLv1';
import {HdgLv2} from 'components/modules/HdgLv2/HdgLv2';
import {HdgLv3} from 'components/modules/HdgLv3/HdgLv3';
import {HdgLv4} from 'components/modules/HdgLv4/HdgLv4';
import {HdgLv5} from 'components/modules/HdgLv5/HdgLv5';
import {HdgLv6} from 'components/modules/HdgLv6/HdgLv6';

import {Pgh, PghItm} from 'components/modules/Pgh/Pgh';
import {Lst, LstItm} from 'components/modules/Lst/Lst';
import {Lnk} from 'components/modules/Lnk/Lnk';
import {LnkLst, LnkLstItm} from 'components/modules/LnkLst/LnkLst';
import {Ico} from 'components/modules/Ico/Ico';

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>DUMMY_TITLE</title>
                <meta name="keywords" content="DUMMY_DESC" />
                <meta name="description" content="DUMMY_KEY" />
            </Head>


            <div className={styles.outer}>
                <div className={styles.inner}>
                    <HdgLv1>見出しレベル1見出しレベル1見出しレベル1</HdgLv1>

                    <HdgLv1 subTitle="サブテキストサブテキストサブテキスト">見出しレベル1見出しレベル1見出しレベル1</HdgLv1>

                    <HdgLv2>見出しレベル2見出しレベル2見出しレベル2</HdgLv2>

                    <Pgh>
                        <PghItm>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</PghItm>
                        <PghItm>広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。</PghItm>
                    </Pgh>

                    <HdgLv3>見出しレベル3見出しレベル3見出しレベル3</HdgLv3>

                    <Pgh>
                        <PghItm>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</PghItm>
                        <PghItm>広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。</PghItm>
                    </Pgh>

                    <HdgLv4>見出しレベル4見出しレベル4見出しレベル4</HdgLv4>

                    <Pgh>
                        <PghItm>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</PghItm>
                        <PghItm>広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。</PghItm>
                    </Pgh>

                    <HdgLv5>見出しレベル5見出しレベル5見出しレベル5</HdgLv5>

                    <Pgh>
                        <PghItm>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</PghItm>
                        <PghItm>広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。</PghItm>
                    </Pgh>

                    <HdgLv6>テキストテキスト</HdgLv6>

                    <Pgh>
                        <PghItm>ある日の暮方の事である。<strong>一人の下人</strong>が、<Lnk href="__dummy__">羅生門</Lnk>の下で雨やみを<em>待っていた</em>。</PghItm>
                        <PghItm>広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀<sup>※</sup>が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。</PghItm>
                    </Pgh>

                    <Lst>
                        <LstItm>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</LstItm>
                        <LstItm>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</LstItm>
                        <LstItm>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</LstItm>
                    </Lst>

                    <LnkLst>
                        <LnkLstItm>
                            <Lnk href="__dummy__" mode="blank">別ウィンドウ</Lnk>
                        </LnkLstItm>

                        <LnkLstItm>
                            <Lnk href="__dummy__.pdf" mode="download">PDFファイルダウンロード</Lnk>
                        </LnkLstItm>

                        <LnkLstItm>
                            <Lnk href="__dummy__.xlsx" mode="download">EXCELファイルダウンロード</Lnk>
                        </LnkLstItm>

                        <LnkLstItm>
                            <Lnk href="__dummy__.docx" mode="download">WORDファイルダウンロード</Lnk>
                        </LnkLstItm>

                        <LnkLstItm>
                            <Lnk href="__dummy__.zip" mode="download">ZIPファイルダウンロード</Lnk>
                        </LnkLstItm>
                    </LnkLst>
                </div>
            </div>
        </Layout>
    )
}
