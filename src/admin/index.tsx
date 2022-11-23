import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProviderFactory from './dataProvider';

const dataProvider = dataProviderFactory('http://localhost:5036');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="v1/organizations" options={{ label: 'Organizations' }} list={ListGuesser}  />
    <Resource name="v1/donators" options={{ label: 'Donators' }} list={ListGuesser} />
  </Admin>
);

export default App;
