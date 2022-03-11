import React from 'react';
import { Pgh, PghItm, Props } from './Pgh';

export default {
    title: 'Modules/Text/Paragraph',
};

interface Arg extends Props {
    label: string,
}

export const Default = (props: Arg) => (
    <Pgh>
        <PghItm>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</PghItm>
    </Pgh>
);

export const MultipleLines = (props: Arg) => (
    <Pgh>
        <PghItm>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</PghItm>
        <PghItm>広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。</PghItm>
    </Pgh>
);
