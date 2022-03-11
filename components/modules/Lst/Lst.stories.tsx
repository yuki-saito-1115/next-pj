import React from 'react';
import { Lst, LstItm, Props } from './Lst';

export default {
    title: 'Modules/List/Bullet List',
    component: Lst,
};

interface Arg extends Props {
    label: string,
}

export const Default = (props: Arg) => (
    <Lst>
        <LstItm>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</LstItm>
        <LstItm>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</LstItm>
        <LstItm>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</LstItm>
    </Lst>
);
