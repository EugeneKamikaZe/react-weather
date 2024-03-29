import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import path from 'path';

// Function to customize the snapshot location
const getMatchOptions = ({ context: { fileName } }) => {
    // Generates a custom path based on the file name and the custom directory.
    const snapshotPath = path.join(
        path.dirname(fileName),
        'your-custom-directory',
    );
    return { customSnapshotsDir: snapshotPath };
};

initStoryshots({
    // your own configuration
    test: imageSnapshot({
        // invoke the function above here
        getMatchOptions,
    }),
});
