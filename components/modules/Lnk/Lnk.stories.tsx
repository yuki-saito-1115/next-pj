import React from 'react';
import { Lnk, Props } from './Lnk';

export default {
    title: 'Modules/Link/Text Link',
    component: Lnk,
};

interface Arg extends Props {
    label: string,
}

export const Default = (props: Arg) => (
    <Lnk href="__dummy__">羅生門</Lnk>
);
