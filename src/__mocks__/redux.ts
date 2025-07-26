export const mockStore = {
  getState: () => ({
    favorites: {
      users: [],
    },
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn(),
  replaceReducer: jest.fn(),
};