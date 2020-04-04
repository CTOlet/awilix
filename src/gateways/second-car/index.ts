const createSecondCarGateway = () => ({
  /**
   * second car
   */
  getName: () => 'second car',
});

export type SecondCarGateway = ReturnType<typeof createSecondCarGateway>;

export default createSecondCarGateway;
