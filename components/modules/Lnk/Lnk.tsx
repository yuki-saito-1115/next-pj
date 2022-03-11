
import * as React from 'react';
import styles from './Lnk.module.scss';
import {Ico} from '../Ico/Ico';

export type Props = {
    children: React.ReactNode,
    href: string,
    mode?: 'download' | 'blank',
};

export function Lnk(props: Props) {
    const {children, href, mode} = props;
    const target =  mode === 'blank' ? '_blank' : undefined;
    const rel =  mode === 'blank' ? 'noopener noreferrer' : undefined;
    const donload =  mode === 'download';
    const icon =  setIcon();

    function setIcon() {
        switch (true) {
            case mode === 'blank':
                return <Ico.external/>;
                break;
            case /.pdf$/.test(href):
                return <Ico.pdf/>;
                break;
            case /.xlsx?$/.test(href):
                return <Ico.excel/>;
                break;
            case /.docx?$/.test(href):
                return <Ico.word/>;
                break;
            case /.zip$/.test(href):
                return <Ico.zip/>;
                break;
            default:
                break;
        }
    }

    return (
        <a
            className={styles.root}
            href={href}
            target={target}
            rel={rel}
            download={donload}
        >
            {children}
            {setIcon()}
        </a>
    );
}
