import { Decorator } from '@storybook/react';

import { StateSchema, StoreProvider } from '~/app/providers/StoreProvider';
import { ReducersList } from '~/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

// const defaultAsyncReducers: ReducersList = {
//     loginForm: loginReducer,
// };

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: ReducersList,
    ): Decorator =>
    (StoryComponent) => (
        <StoreProvider
            store={state}
            // @ts-ignore
            asyncReducers={{
                // ...defaultAsyncReducers,
                ...asyncReducers,
            }}
        >
            <StoryComponent />
        </StoreProvider>
    );
