import React from 'react';
import { HdgLv4, Props } from './HdgLv4';

export default {
    title: 'Modules/Heading/Level4',
    component: HdgLv4,
};

interface Arg extends Props {
    label: string,
}

export const Default = (props: Arg) => (
    <HdgLv4>見出しレベル4見出しレベル4見出しレベル4</HdgLv4>
);
