import { WEB_PATH } from ".//util/commons";

export default class AbstractCrudService {
    
    constructor($http, url) {
      this._http = $http
      this._url = `${WEB_PATH}/${url}`;
    }
  
    findAll() {
      return this._http.get(`${this._url}`)
        .then(response => response.data)
    }
  
    findById(id) {
      return this._http.get(`${this._url}/${id}`)
        .then(response => response.data)
    }
  
    save(record) {
      if (record.id) {
        return this._http.put(`${this._url}/${record.id}`, record)
      } else {
        return this._http.post(this._url, record)
      }
    }
  
    remove(id) {
      return this._http.delete(`${this._url}/${id}`)
    }
  
  }