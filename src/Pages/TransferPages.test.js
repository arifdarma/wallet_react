import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TransferPages from './TransferPages';

function memoryRouter({ children }) {
  return (
    <MemoryRouter initialEntries={['/transfer']}>
      {children}
    </MemoryRouter>
  );
}

afterEach(() => {
  jest.clearAllMocks();
});

describe('Transfer', () => {
  test('should render transfer when called', () => {
    render(<TransferPages />, { wrapper: memoryRouter });

    expect(screen.getByTestId('transfer')).toBeInTheDocument();
  });

  test('should called handleChange when user type', () => {
    const { rerender } = render(<TransferPages />, { wrapper: memoryRouter });

    const desTransfer = screen.getByTestId('desTransfer');
    fireEvent.change(desTransfer, { target: { value: 'testing target' } });
    rerender(<TransferPages />);

    expect('testing target').toEqual(desTransfer.value);
  });

  test('should post transfer when submit transfer', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: jest.fn(),
      ok: true,
    }));
    const { rerender } = render(<TransferPages />, { wrapper: memoryRouter });

    const submitTransfer = screen.getByTestId('submitTransfer');
    fireEvent.change(screen.getByTestId('desTransfer'), { target: { value: 'testing target' } });
    fireEvent.change(screen.getByTestId('destinationTransfer'), { target: { value: '10001' } });
    fireEvent.change(screen.getByTestId('amtTransfer'), { target: { value: '123456' } });

    fetch.mockResolvedValue({
      json: () => Promise.resolve(
        {
          id: 1,
          transactionType: 'DEBIT',
          amount: Number(screen.getByTestId('amtTransfer')),
          sourceWalletID: 9009090,
          destinationWalletID: Number(screen.getByTestId('destinationTransfer')),
          description: screen.getByTestId('desTransfer'),
          date: '2022-07-12T11:14:50+07:00',
        },
      ),
      ok: true,
    });

    fireEvent.click(submitTransfer);
    rerender(<TransferPages />);

    expect(screen.getByTestId('descriptionModal')).toBeInTheDocument();
  });

  test('should failed transfer when submit wrong transfer', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: jest.fn(),
      ok: false,
    }));
    const { rerender } = render(<TransferPages />, { wrapper: memoryRouter });
    const submitTransfer = screen.getByTestId('submitTransfer');

    fetch.mockResolvedValue({
      ok: false,
      text: () => Promise.resolve('{"error":"exceeds balance","status":400}'),
    });

    fireEvent.click(submitTransfer);
    await rerender(<TransferPages />);
    const modalFailed = await screen.findByTestId('modal-failed');

    expect(modalFailed).toBeInTheDocument();
  });
});
