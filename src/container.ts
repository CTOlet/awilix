import * as awilix from 'awilix';
import { asFunction, listModules } from 'awilix';
import createLogger from './utils/logger';

const container = awilix.createContainer();

listModules(['src/@(services|gateways)/**/index.ts']).forEach((module) => {
  const loadedModule = require(module.path);

  const functionName = loadedModule.default.name;
  const capitalizedResolvedName = functionName.slice('create'.length);
  const moduleName =
    capitalizedResolvedName.charAt(0).toLowerCase() +
    capitalizedResolvedName.slice(1);

  container.register(
    moduleName,
    asFunction(loadedModule.default, {
      injector: () => ({
        logger: createLogger(moduleName),
      }),
    }),
  );
});

export default container;
