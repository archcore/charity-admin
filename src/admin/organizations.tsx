import { List, Datagrid, TextField, BooleanField, DateField, Edit, TabbedForm, TextInput, FormTab, DateInput, BooleanInput, Create, ReferenceManyField, SimpleList } from "react-admin";

export const OrganizationList = () => (
  <List>
    <Datagrid rowClick="edit" size="medium" sx={{
          '& .column-isAcceptingDonations': { width: '100px', textAlign: 'center' },
          '& .column-country': { width: '100px' },
          '& .column-foundationDate': { width: '200px' },
      }}>
      <BooleanField source="isAcceptingDonations" label="Accepts donations?" />
      <TextField source="legalName" />
      <TextField source="friendlyName" />
      <TextField source="country" />
      <DateField source="foundationDate" options={{ year: 'numeric', month: 'long', day: 'numeric' }} />
    </Datagrid>
  </List>
);

export const OrganizationEdit = () => (
  <Edit>
    <TabbedForm>
      <FormTab label="Summary">
        <TextInput source="id" disabled />
        <TextInput source="legalName" />
        <TextInput source="friendlyName" />
        <TextInput source="cause" />
        <TextInput source="description" multiline />
        <DateInput source="foundationDate" />
        <BooleanInput source="isAcceptingDonations" />
      </FormTab>
      <FormTab label="Address">
        <TextInput source="street" />
        <TextInput source="city" />
        <TextInput source="state" />
        <TextInput source="zipCode" />
        <TextInput source="country" />
      </FormTab>
      <FormTab label="donations">
        <ReferenceManyField reference="v1/donations" target="organizationId">
            <SimpleList
              primaryText={d => `${d.value} was donated at ${d.donatedAt}`}
              secondaryText={d => d.description} />
        </ReferenceManyField>
      </FormTab>
    </TabbedForm>
  </Edit>
);

export const OrganizationCreate = () => (
  <Create>
    <TabbedForm>
      <FormTab label="Summary">
        <TextInput source="legalName" />
        <TextInput source="friendlyName" />
        <TextInput source="cause" />
        <TextInput source="description" multiline />
        <DateInput source="foundationDate" />
        <BooleanInput source="isAcceptingDonations" />
      </FormTab>
      <FormTab label="Address">
        <TextInput source="street" />
        <TextInput source="city" />
        <TextInput source="state" />
        <TextInput source="zipCode" />
        <TextInput source="country" />
      </FormTab>
    </TabbedForm>
  </Create>
);