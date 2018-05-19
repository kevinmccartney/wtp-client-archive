import { configure } from '@storybook/react';

import loadStories from './loadStories';

console.log(loadStories());

configure(loadStories(), module);
