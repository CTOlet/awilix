import container from './container';
import { DependentService } from './services/dependent';

const dependentService = container.resolve<DependentService>(
  'dependentService',
);

console.log(dependentService.getInnerData());
console.log(dependentService.getCarNames());
console.log(container.has('firstCarGateway'));
