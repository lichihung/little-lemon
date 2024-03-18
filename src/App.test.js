// import {render, screen, fireEvent} from '@testing-library/react';
// import BookingForm from './components/BookingForm';
// import {initializeTimes, reducer} from './Main';

/*
describe("render texts", () => {
  test('Renders the BookingForm heading', () => {
    mockDispatch = jest.fn();
    render(<BookingForm availableTimes={[]} dispatch={mockDispatch}/>);
    const headingElement = screen.getByText("Book now");
    expect(headingElement).toBeInTheDocument();
  });
})

describe("initialize function", () => {
  test("returns the correct initial times", () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(initializeTimes()).toEqual(expectedTimes);
  });
});

describe("updateTimes action in reducer", () =>{
  test("returns the current state when updateTimes is dispatched", ()=>{
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = {type: "updateTimes", payload:"2024-03-11"};
    expect(reducer(initialState, action)).toEqual(initialState);
  });
});

describe("Form submission", () =>{
  test("user can submit the form", () =>{
    const handleSubmit = jest.fn();
    const mockDispatch = jest.fn();
    render(<BookingForm availableTimes={[]} dispatch={mockDispatch} onSubmit={handleSubmit}/>);
    const submitButton = screen.getByDisplayValue("Make Your reservation");
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalled();
  })
})
*/
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

import {render, waitFor, screen, fireEvent} from '@testing-library/react';
import BookingForm from './components/BookingForm';

describe('BookingForm component', () => {
    it('HTML5 validation attributes are applied', () =>{
        const mockInitialTimes = ["10:00", "11:00", "12:00"];
        const mockUpdatedTimes = ["14:00", "15:00"];
        const mockOnFormSubmit = jest.fn();
        render(
            <BookingForm availableTimes={mockInitialTimes} updateTimes={mockUpdatedTimes} onSubmit={mockOnFormSubmit} />
        )

        const dateInput = screen.getByLabelText(/Choose date/);
        expect(dateInput).toHaveAttribute("type","date");

        const timeInput = screen.getByLabelText(/Choose time/);
        expect(timeInput).toBeInTheDocument();

        const guestInput = screen.getByLabelText(/Number of guests/);
        expect(guestInput).toHaveAttribute("type","number");
        expect(guestInput).toHaveAttribute("min","1");
        expect(guestInput).toHaveAttribute("max","10");

    });
  //   it('JavaScript validation functions work correctly', async () =>{
  //     const handleSubmit = jest.fn();
  //     render(
  //         <BookingForm vailableTimes={["10:00", "11:00", "12:00"]} onSubmit={handleSubmit}/>
  //     );
  //     //Valid submission
  //     const dateInput = screen.getByLabelText(/Choose date/);
  //     fireEvent.change(dateInput, {target: {value:"2024-03-13"}});

  //     const timeSelect = screen.getByLabelText(/Choose time/);
  //     fireEvent.change(timeSelect, {target: {value:"11:00"}});

  //     const guestInput = screen.getByLabelText(/Number of guests/);
  //     fireEvent.change(guestInput, {target: {value:"5"}});

  //     const occasionSelect = screen.getByLabelText(/Occasion/);
  //     fireEvent.change(occasionSelect, {target: {value:"Birthday"}});

  //     const submitButton = screen.getByRole('button', { name: /Reserve now/ });
  //     // fireEvent.click(submitButton);
  //     // await waitFor(() => expect(handleSubmit).toHaveBeenCalled());

  //     // Invalid submission (no date selected)
  //   fireEvent.change(dateInput, { target: { value: '' } });
  //   fireEvent.click(submitButton);

  //   // Check if the appropriate error message is shown
  //   await waitFor(() => {
  //     expect(screen.getByText('Required')).toBeInTheDocument();
  //   });

  //   fireEvent.change(dateInput, {target: {value:"2024-03-13"}});
  // });
});