import * as awilix from 'awilix';
import { TestService } from './services/test';
import { DependentService } from './services/dependent';

interface ICradle {
  testService: TestService;
  dependentService: DependentService;
}

const container = awilix.createContainer<ICradle>();

container.loadModules(['src/@(services|gateways)/**/index.ts'], {
  formatName: (_, descriptor) => {
    // @ts-ignore
    const functionName = descriptor.value.name;
    const capitalizedResolvedName = functionName.slice('create'.length);
    return (
      capitalizedResolvedName.charAt(0).toLowerCase() +
      capitalizedResolvedName.slice(1)
    );
  },
});

export default container;
