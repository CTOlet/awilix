import container from './container';
import { DependentService } from './services/dependent';

const dependentService = container.resolve<DependentService>(
  'dependentService',
);

console.log(dependentService.getInnerData());
console.log(dependentService.getCarNames());

const dummyService = container.cradle.dummyService;
console.log(container.has('dummyService'));
