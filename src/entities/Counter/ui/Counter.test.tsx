/* eslint-disable i18next/no-literal-string */
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  test('Show value from state', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('test increment', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const incrementBtn = screen.getByTestId('increment-btn');

    await userEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('test decrement', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const decrementBtn = screen.getByText('-');

    await userEvent.click(decrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
