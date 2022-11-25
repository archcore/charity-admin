import { Admin, Resource, ListGuesser } from 'react-admin';
import { OrganizationList, OrganizationEdit, OrganizationCreate } from './organizations';
import { DonatorsCreate, DonatorsEdit, DonatorsList } from './donators';
import dataProviderFactory from './dataProvider';

const dataProvider = dataProviderFactory(import.meta.env.VITE_API_URL);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="v1/organizations"
      options={{ label: 'Organizations' }}
      list={OrganizationList}
      edit={OrganizationEdit}
      create={OrganizationCreate}
    />
    <Resource 
      name="v1/donators" 
      options={{ label: 'Donators' }} 
      list={DonatorsList} 
      edit={DonatorsEdit}
      create={DonatorsCreate}
      />
  </Admin>
);

export default App;
