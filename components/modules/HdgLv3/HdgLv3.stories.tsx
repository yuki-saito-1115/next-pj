import React from 'react';
import { HdgLv3, Props } from './HdgLv3';

export default {
    title: 'Modules/Heading/Level3',
    component: HdgLv3,
};

interface Arg extends Props {
    label: string,
}

export const Default = (props: Arg) => (
    <HdgLv3>見出しレベル3見出しレベル3見出しレベル3</HdgLv3>
);
