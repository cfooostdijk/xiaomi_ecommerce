import axios from "axios";

const prodAxios = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
});

const catidAxios = axios.create({
    baseURL: 'https://fakestoreapi.com/products/category'
});

const catAxios = axios.create({
  baseURL: 'https://fakestoreapi.com/products/categories'
});


export {
  prodAxios,
  catidAxios,
  catAxios
};
