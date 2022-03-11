import React from 'react';
import { HdgLv6, Props } from './HdgLv6';

export default {
    title: 'Modules/Heading/Level6',
    component: HdgLv6,
};

interface Arg extends Props {
    label: string,
}

export const Default = (props: Arg) => (
    <HdgLv6>テキストテキスト</HdgLv6>
);
