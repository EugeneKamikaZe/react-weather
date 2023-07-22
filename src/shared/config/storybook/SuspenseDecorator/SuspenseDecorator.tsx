import { Decorator } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator: Decorator = (StoryComponent, args) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
);
