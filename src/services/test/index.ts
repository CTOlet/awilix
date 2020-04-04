const createTestService = () => ({
  /**
   * asdf
   */
  getData: () => 'Hello world!',
});

export type TestService = ReturnType<typeof createTestService>;

export default createTestService;
