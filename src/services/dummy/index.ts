import { Logger } from '../../utils/logger';

interface DummyServiceInjections {
  logger: Logger;
}

const createDummyService = (input: DummyServiceInjections) => {
  console.log('Initializing DummyService');

  return {};
};

export type DummyService = ReturnType<typeof createDummyService>;

export default createDummyService;
