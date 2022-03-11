import React from 'react';
import { HdgLv1, Props } from './HdgLv1';

export default {
    title: 'Modules/Heading/Level1',
    component: HdgLv1,
    argTypes: {
        label: {
        type: {
            name: 'string',
            required: false,
        },
        description: 'ReactNodes',
        control: {
            type: 'text',
        },
        },
    },
};

interface Arg extends Props {
    label: string,
}

export const Default = (props: Arg) => (
    <HdgLv1 {...props}>
        {props.label || 'テキストテキスト'}
    </HdgLv1>
);

export const SubTitle = (props: Arg) => (
    <HdgLv1 subTitle="サブテキストサブテキストサブテキスト">
        見出しレベル1見出しレベル1見出しレベル1
    </HdgLv1>
);
