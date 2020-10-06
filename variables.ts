import Context from 'fig/Context.js';

/**
 * @file
 *
 * Dynamic variables.
 */
const variables = {
    get identity() {
        if (
            Context.attributes.username === 'dmouraneto'
        ) {
            return 'dmouraneto';
        } else {
            return 'unknown';
        }
    },
};

export default variables;
