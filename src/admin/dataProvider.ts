import { DataProvider, fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const httpClient = fetchUtils.fetchJson;

function dataProviderFactory(apiUrl: string): DataProvider {
  return {
    async getList(resource, params) {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        sort: field,
        order,
        pageIndex: page,
        pageSize: perPage,
        ...params.filter,
      };
      const url = `${apiUrl}/${resource}?${stringify(query)}`;
      const { json } = await httpClient(url);
      return {
        data: json.items,
        total: json.totalCount,
      };
    },

    async getOne(resource, params) {
      const url = `${apiUrl}/${resource}/${params.id}`;
      const { json } = await httpClient(url);
      return {
        data: json,
      };
    },

    async getMany(resource, params) {
      const query = {
        ids: params.ids,
      };
      const url = `${apiUrl}/${resource}?${stringify(query)}`;
      const { json } = await httpClient(url);
      return {
        data: json.items,
      };
    },

    async getManyReference(resource, params) {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        sort: field,
        order,
        pageIndex: page,
        pageSize: perPage,
        ...params.filter,
        [params.target]: params.id,
      };
      const url = `${apiUrl}/${resource}?${stringify(query)}`;
      const { json } = await httpClient(url);
      return {
        data: json.items,
        total: json.totalCount,
      };
    },

    async create(resource, params) {
      const { json } = await httpClient(`${apiUrl}/${resource}`, {
        method: 'POST',
        body: JSON.stringify(params.data),
      });
      return { data: json };
    },

    async update(resource, params) {
      const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify(params.data),
      });
      return { data: json };
    },

    async updateMany(resource, params) {
      const query = {
        ids: params.ids,
      };
      const { json } = await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
        method: 'PUT',
        body: JSON.stringify(params.data),
      });
      return { data: json };
    },

    async delete(resource, params) {
      const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: 'DELETE',
      });
      return { data: json };
    },

    async deleteMany(resource, params) {
      const query = {
        ids: params.ids,
      };
      const { json } = await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
        method: 'DELETE',
      });
      return { data: json };
    },
  };
}

export default (apiUrl: string) => dataProviderFactory(apiUrl);
