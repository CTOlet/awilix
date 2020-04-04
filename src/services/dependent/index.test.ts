import container from '../../container';
import { TestService } from '../test';
import { asValue } from 'awilix';

it('tests getting hello world', () => {
  const dependentService = container.cradle.dependentService;

  expect(dependentService.getInnerData()).toEqual('Hello world!');
});

it('tests getting foo bar', () => {
  const mockedTestService: Partial<TestService> = {
    getData: () => 'foo bar',
  };
  container.register('testService', asValue(mockedTestService));
  const dependentService = container.cradle.dependentService;

  expect(dependentService.getInnerData()).toEqual('foo bar');
});
