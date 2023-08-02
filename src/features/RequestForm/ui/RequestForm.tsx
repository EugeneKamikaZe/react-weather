import classnames from 'classnames';
import { useFormik } from 'formik';
import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    geocode,
    geocodeActions,
    geocodeReducer,
    getGeocodeIsLoading,
} from '~/entities/Geocode';
import {
    DynamicModuleLoader,
    ReducersList,
} from '~/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '~/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '~/shared/lib/hooks/useDebounce/useDebounce';
import { GeocodeRequest } from '~/shared/types/request';

import s from './RequestForm.module.scss';

interface RequestFormProps {
    className?: string;
}

const reducers: ReducersList = {
    geocode: geocodeReducer,
};

export const RequestForm = ({ className }: RequestFormProps) => {
    const { t } = useTranslation('form_request');
    const isLoading = useSelector(getGeocodeIsLoading);

    const dispatch = useAppDispatch();

    const formik = useFormik<GeocodeRequest>({
        initialValues: {
            cityName: '',
        },

        onSubmit: async (values) => {
            const result = await dispatch(geocode(values));
            const { meta, payload } = result;

            if (meta.requestStatus === 'fulfilled') {
                // @ts-ignore
                dispatch(geocodeActions.setGeocodeData(payload));
            }
        },
    });

    const debouncedOnChange = useDebounce(() => formik.submitForm(), 500);
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        formik.handleChange(e);

        debouncedOnChange();
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <label
                    htmlFor="cityName"
                    className={classnames(s.label, {}, [className])}
                >
                    {t('form_label')}
                </label>

                {isLoading && <div>LOADING ....................</div>}
                <input
                    id="city"
                    name="cityName"
                    type="text"
                    onChange={handleChange}
                    value={formik.values.cityName}
                    placeholder={t('input_placeholder')}
                    className={s.input}
                />
            </form>
        </DynamicModuleLoader>
    );
};
