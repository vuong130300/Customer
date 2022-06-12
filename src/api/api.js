import axios from 'axios';

const axi =  axios.create({
  baseURL: `http://127.0.0.1:3001`
});

const brandAPI = {
  getAll: () => axi.get('/brand'),
  update: (brand) => 
    axi.put(`/brand/${brand.get('_id')}`, 
      brand,
      {headers: { 'content-type': `multipart/form-data; boundary=${brand._boundary}` }}
    ),
  create: (brand) => 
    axi.post(`/brand`, 
      brand,
      {headers: { 'content-type': `multipart/form-data; boundary=${brand._boundary}` }}
  ),
  delete: (id) => axi.delete(`/brand/${id}`)
}

const categoryAPI = {
  getAll: () => axi.get('/category'),
  update: (category) => {
    return axi.put(`/category/${category._id}`,{
      categoryName:category.categoryName,
      categoryImage:category.categoryImage
    })
  }
}

const customerAPI = {
  login: (inputLogin) => axi.post('/customer/login',inputLogin),
  register: (inputRegister) => axi.post('/customer',inputRegister)
}

const employeeAPI = {
  getAll: () => axi.get('/employee'),
  update: (employee) => {
    return axi.put(`/employee/${employee._id}`,{
      employeeName:employee.employeeName,
      employeePhone:employee.employeePhone,
      employeeEmail:employee.employeeEmail,
      employeeRole:employee.employeeRole,
      employeeActive:employee.employeeActive,
      employeePassword:employee.employeePassword,
    })
  }
}

const wareHouseAPI = {
  getAll: () => axi.get('/warehouse'),
  getById: (id) => axi.get(`/warehouse/${id}`)
}

const supplierAPI = {
  getAll: () => axi.get('/supplier'),
  update: (supplier) => {
    return axi.put(`/supplier/${supplier._id}`,{
      supplierName:supplier.supplierName,
      address:supplier.address,
      phone:supplier.phone})
  }
}
export {brandAPI, categoryAPI, customerAPI, employeeAPI, wareHouseAPI, supplierAPI};