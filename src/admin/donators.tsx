import { List, Datagrid, TextField, DateField, Edit, TabbedForm, FormTab, TextInput, Create, DateInput } from 'react-admin';

export const DonatorsList = () => (
  <List>
    <Datagrid rowClick="edit" size="medium">
      <TextField source="name" />
      <TextField source="document" />
      <TextField source="occupation" />
      <DateField source="dateOfBirth" options={{ year: 'numeric', month: 'long', day: 'numeric' }} />

    </Datagrid>
  </List>
);

export const DonatorsEdit = () => (
    <Edit>
      <TabbedForm>
        <FormTab label="Summary">
          <TextInput source="id" disabled />
          <TextInput source="name" />
          <TextInput source="document" />
          <TextInput source="occupation" />
          <TextInput source="description" multiline />
          <DateInput source="dateOfBirth" />
        </FormTab>
      </TabbedForm>
    </Edit>
  );

  export const DonatorsCreate = () => (
    <Create>
      <TabbedForm>
        <FormTab label="Summary">
          <TextInput source="name" />
          <TextInput source="document" />
          <TextInput source="occupation" />
          <TextInput source="description" multiline />
          <DateInput source="dateOfBirth" />
        </FormTab>
      </TabbedForm>
    </Create>
  );