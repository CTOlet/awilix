export interface Logger {
  info: (text: string) => void;
}

const createLogger = (namespace: string): Logger => ({
  info: (text) => {
    console.log(`${namespace}: ${text}`);
  },
});

export default createLogger;
