import { Machines } from '@/store/reducers/machines.reducers';
import { http, HttpResponse } from 'msw'

export const machinesMock : Machines[] =  [
  {
  uuid: 'fakeuuid',
  name: 'fakename',
  type: 'faketype'
},
{
  uuid: 'fakeuuid2',
  name: 'fakename2',
  type: 'faketype2'
}];

export const handlers = [
  http.get('api/be/machines', () => {
    return HttpResponse.json(machinesMock)
  }),

]

