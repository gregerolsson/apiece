import * as UI from './templates';
import { render } from 'preact-render-to-string';
import { h } from 'preact';
import result from './tests/b';

import { addSchema } from './schemas';

addSchema(require('./tests/schemas/definitions').default);
addSchema(require('./tests/schemas/assessment/assessment').default);
addSchema(require('./tests/schemas/assessment/assessment-list-setting').default);
addSchema(require('./tests/schemas/assessment/assessment-filter').default);
addSchema(require('./tests/schemas/entity').default);
addSchema(require('./tests/schemas/change').default);
addSchema(require('./tests/schemas/list-setting').default);
addSchema(require('./tests/schemas/report').default);
addSchema(require('./tests/schemas/sequence').default);
addSchema(require('./tests/schemas/asset/aspect-list').default);
addSchema(require('./tests/schemas/asset/aspect').default);
addSchema(require('./tests/schemas/asset/asset').default);
addSchema(require('./tests/schemas/asset/asset-report').default);
addSchema(require('./tests/schemas/asset/asset-list-setting').default);
addSchema(require('./tests/schemas/asset/asset-filter').default);
addSchema(require('./tests/schemas/asset/link').default);
addSchema(require('./tests/schemas/risk/risk').default);
addSchema(require('./tests/schemas/risk/matrix').default);
addSchema(require('./tests/schemas/risk/risk-report').default);
addSchema(require('./tests/schemas/risk/risk-list-setting').default);
addSchema(require('./tests/schemas/risk/risk-filter').default);
addSchema(require('./tests/schemas/user/user').default);
addSchema(require('./tests/schemas/tree').default);
addSchema(require('./tests/schemas/page').default);
addSchema(require('./tests/schemas/task/task').default);
addSchema(require('./tests/schemas/task/task-list-setting').default);
addSchema(require('./tests/schemas/task/task-filter').default);

console.log('<!DOCTYPE html>')
console.log(render(<UI.ParseResult element={result} />));