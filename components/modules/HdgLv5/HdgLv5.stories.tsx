import React from 'react';
import { HdgLv5, Props } from './HdgLv5';

export default {
    title: 'Modules/Heading/Level5',
    component: HdgLv5,
};

interface Arg extends Props {
    label: string,
}

export const Default = (props: Arg) => (
    <HdgLv5>見出しレベル5見出しレベル5見出しレベル5</HdgLv5>
);
