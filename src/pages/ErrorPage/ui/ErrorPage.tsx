import classnames from 'classnames';

import { Button } from '~/shared/ui/Button/Button';

import s from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const reloadPage = () => {
        //  eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classnames(s.wrapper, className)}>
            {/* TODO */}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p className={s.text}>Some Error</p>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={reloadPage}>Reload Page</Button>
        </div>
    );
};
