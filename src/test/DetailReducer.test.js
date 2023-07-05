import { GET_DETAILS } from '../redux/actions/Details';
import reducer from '../redux/reducers/Details';

describe('reducer', () => {
  it('should return the updated state when receiving GET_DETAILS action', () => {
    // Define the initial state and the action with GET_DETAILS type
    const initialState = {};
    const action = { type: GET_DETAILS, payload: { active: 20, death: 25 } };

    // Call the reducer with the initial state and the action
    const newState = reducer(initialState, action);

    // Verify that the state is updated correctly with the payload of the action
    expect(newState).toEqual({ active: 20, death: 25});
  });

  it('should return the current state when receiving an unhandled action', () => {
    // Define the initial state and the action with unknown type
    const initialState = { active: 20, death: 25};
    const action = { type: 'UNKNOWN_TYPE', payload: 'some data' };

    // Call the reducer with the initial state and the action
    const newState = reducer(initialState, action);

    // Verify that the state remains unchanged
    expect(newState).toEqual(initialState);
  });
});