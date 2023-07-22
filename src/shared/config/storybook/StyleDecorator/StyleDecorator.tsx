import { Decorator } from '@storybook/react';
import classnames from 'classnames';

import s from './StyleDecorator.module.scss';

export const StyleDecorator =
    (withPadding?: boolean, height?: number): Decorator =>
    (StoryComponent) => (
        <div
            className={classnames({
                [s.padding]: withPadding,
                [s.minHeight]: !height,
            })}
            style={{
                height: `${height}px`,
            }}
        >
            <StoryComponent />
        </div>
    );
