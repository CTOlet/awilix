import { TestService } from '../test';
import { FirstCarGateway } from '../../gateways/first-car';
import { SecondCarGateway } from '../../gateways/second-car';

interface DependentServiceInjections {
  testService: TestService;
  firstCarGateway: FirstCarGateway;
  secondCarGateway: SecondCarGateway;
}

const createDependentService = (injected: DependentServiceInjections) => ({
  getInnerData: () => injected.testService.getData(),
  getCarNames: () => {
    const firstCarName = injected.firstCarGateway.getName();
    const secondCarName = injected.secondCarGateway.getName();

    return { firstCarName, secondCarName };
  },
});

export type DependentService = ReturnType<typeof createDependentService>;

export default createDependentService;
