import { render, waitFor } from '@testing-library/react';
import store from "../../../store/store";

import Page from './page';
import { Provider } from 'react-redux';
import { getAll } from '@/store/reducers/machines.reducers';
import { machinesMock } from '@/services/mock-api/handlers';



describe('', () => {
  it('trying to mock api calls',  async() => {
    render(
      <Provider store={store}>
        <Page />
      </Provider>
    );

   await waitFor(() => {
    const {machines} = store.getState().machinesReducer;

    console.log(machines)

    expect(machines).toEqual(machinesMock);
   })

  });
});
