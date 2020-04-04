const createFirstCarGateway = () => ({
  /**
   * first car
   */
  getName: () => 'first car',
});

export type FirstCarGateway = ReturnType<typeof createFirstCarGateway>;

export default createFirstCarGateway;
