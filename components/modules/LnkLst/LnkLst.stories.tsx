import React from 'react';
import { LnkLst, LnkLstItm, Props } from './LnkLst';
import { Lnk } from '../Lnk/Lnk';

export default {
    title: 'Modules/Link/Link List',
    component: LnkLst,
};

interface Arg extends Props {
    label: string,
}

export const Default = (props: Arg) => (
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
);
