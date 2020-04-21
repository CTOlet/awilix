import { TestService } from '../test';
import { FirstCarGateway } from '../../gateways/first-car';
import { SecondCarGateway } from '../../gateways/second-car';
import { Logger } from '../../utils/logger';

interface DependentServiceInjections {
  testService: TestService;
  firstCarGateway: FirstCarGateway;
  secondCarGateway: SecondCarGateway;
  logger: Logger;
}

const createDependentService = (injected: DependentServiceInjections) => {
  console.log('Initializing DependentService');

  return ({
    getInnerData: () => injected.testService.getData(),
    getCarNames: () => {
      injected.logger.info('Printing two car names');

      const firstCarName = injected.firstCarGateway.getName();
      const secondCarName = injected.secondCarGateway.getName();

      return { firstCarName, secondCarName };
    },
  });
};

export type DependentService = ReturnType<typeof createDependentService>;

export default createDependentService;
