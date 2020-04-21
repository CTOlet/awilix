import { Logger } from '../../utils/logger';

interface GetAverageInput {
  x: number;
  y: number;
}
interface TestServiceInjections {
  logger: Logger;
}

const createTestService = (input: TestServiceInjections) => {
  console.log('Initializing TestService');

  return ({
    /**
     * asdf
     */
    getData: () => {
      input.logger.info('Saying hello');

      return 'Hello world!';
    },
    getAverage: (input: GetAverageInput) => {
      const { x, y } = input;

      return (x + y) / 2.0;
    },
  });
};

export type TestService = ReturnType<typeof createTestService>;

export default createTestService;
