import React from 'react';
import { HdgLv2, Props } from './HdgLv2';

export default {
    title: 'Modules/Heading/Level2',
    component: HdgLv2,
};

interface Arg extends Props {
    label: string,
}

export const Default = (props: Arg) => (
    <HdgLv2>見出しレベル2見出しレベル2見出しレベル2</HdgLv2>
);
