interface GetAverageInput {
  x: number;
  y: number;
}

const createTestService = () => ({
  /**
   * asdf
   */
  getData: () => 'Hello world!',
  getAverage: (input: GetAverageInput) => {
    const { x, y } = input;

    return (x + y) / 2.0;
  },
});

export type TestService = ReturnType<typeof createTestService>;

export default createTestService;
