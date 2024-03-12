import {render, screen, fireEvent} from '@testing-library/react';
import BookingForm from './components/BookingForm';
import {initializeTimes, reducer} from './Main';

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