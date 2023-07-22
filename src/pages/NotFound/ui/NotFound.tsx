import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getRouteMain } from '~/shared/const/router';
import { Button, ButtonSize } from '~/shared/ui/Button/Button';

import s from './NotFound.module.scss';

export const NotFound = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('translations');

    return (
        <div className={s.wrapper}>
            <div className={s.text}>
                404
                {/* <Icon className={s.icon} Svg={NotFoundIcon} /> */}
            </div>

            <h1 className={s.title}>{t('Title')}</h1>
            <p className={s.description}>{t('Description')}</p>

            <Button
                onClick={() => navigate(getRouteMain())}
                size={ButtonSize.SMALL}
            >
                {t('Go back')}
            </Button>
        </div>
    );
};
