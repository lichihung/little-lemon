// import {render, waitFor, screen, fireEvent} from '@testing-library/react';
// import Main from './Main';
// import {fetchAPI} from './mockAPI';
// import { BrowserRouter } from 'react-router-dom';
// import BookingForm from './components/BookingForm';

// jest.mock('./mockAPI', () => ({
//   fetchAPI: jest.fn(),
//   submitAPI: jest.fn(),
// }));

// describe('Main component', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('fetches and initializes times on mount', async () => {
//     const mockInitialTimes = ["10:00", "11:00", "12:00"];
//     fetchAPI.mockResolvedValue(mockInitialTimes);

//     render(
//       <BrowserRouter>
//         <Main />
//       </BrowserRouter>
//     );

//     await waitFor(() => {
//       expect(fetchAPI).toHaveBeenCalled();
//     });

//     await waitFor(() => {
//       mockInitialTimes.forEach(async (time) => {
//         const timeElement = await screen.findByText(time);
//         expect(timeElement).toBeInTheDocument();
//       });
//     });
//   });

//   it('updates times on date change', async () => {
//     const mockInitialTimes = ["10:00", "11:00", "12:00"];
//     const mockUpdatedTimes = ["14:00", "15:00"];
//     const mockOnFormSubmit = jest.fn();
//     fetchAPI.mockResolvedValueOnce(mockInitialTimes); // First call for initialization
//     fetchAPI.mockResolvedValueOnce(mockUpdatedTimes); // Second call for updateTimes

//     render(
//       <BookingForm availableTimes={mockInitialTimes} updateTimes={mockUpdatedTimes} onSubmit={mockOnFormSubmit} />
//     );
//     const dateInput = screen.getByLabelText(/Choose date/);
//     expect(dateInput).toBeInTheDocument();
//   });

//   it('updates times and fetchAPI', async () => {
//     const mockInitialTimes = ["10:00", "11:00", "12:00"];
//     const mockUpdatedTimes = ["14:00", "15:00", "16:00"];
//     const mockOnFormSubmit = jest.fn();
//     fetchAPI.mockResolvedValueOnce(mockInitialTimes) // Initial call on component mount
//            .mockResolvedValueOnce(mockUpdatedTimes); // Supposed second call on date change

//     render(
//       <BrowserRouter>
//         <Main/>
//       </BrowserRouter>,
//       { container: document.createElement('div') }
//     );

//     await waitFor(() => expect(fetchAPI).toHaveBeenCalledTimes(1));

//     render(
//       <BookingForm availableTimes={mockInitialTimes} updateTimes={mockUpdatedTimes} onSubmit={mockOnFormSubmit} />
//     );
//     const dateInput = screen.getByLabelText(/Choose date/);
//     fireEvent.change(dateInput, {target: {value: "03/13/2024"}});
//     await waitFor(() => {
//       mockUpdatedTimes.forEach(async (time) => {
//         expect(await screen.findByText(time)).toBeInTheDocument();
//       });
//     });
//     expect(fetchAPI).toHaveBeenCalledWith("2024-03-13");
//   });
// });
