import { Admin, Resource } from 'react-admin';
import { OrganizationList, OrganizationEdit, OrganizationCreate } from './organizations';
import dataProviderFactory from './dataProvider';

const dataProvider = dataProviderFactory('http://localhost:5036');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="v1/organizations"
      options={{ label: 'Organizations' }}
      list={OrganizationList}
      edit={OrganizationEdit}
      create={OrganizationCreate}
    />
    {/* <Resource name="v1/donators" options={{ label: 'Donators' }} list={ListGuesser} /> */}
  </Admin>
);

export default App;
