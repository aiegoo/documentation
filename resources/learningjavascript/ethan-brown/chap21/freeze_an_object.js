'use strict'
const appInfo = {
    company: 'White Knight Software, Inc.',
    version: '1.3.5',
    buildId: '0a995448-ead4-4a8b-b050-9c9083279ea2',
    // this function only accesses properties, so it won't be
    // affected by freezing
    copyright() {
        return `© ${new Date().getFullYear()}, ${this.company}`;
    },
};
Object.freeze(appInfo);
Object.isFrozen(appInfo); // true

/* appInfo.newProp = 'test';
// TypeError: Can't add property newProp, object is not extensible */

/* delete appInfo.company;
// TypeError: Cannot delete property 'company' of [object Object] */

/* appInfo.company = 'test';
// TypeError: Cannot assign to read-only property 'company' of [object Object] */

Object.defineProperty(appInfo, 'company', { enumerable: false });
    // TypeError: Cannot redefine property: company 