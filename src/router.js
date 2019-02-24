import Vue from "vue";
import Router from "vue-router";
import CustomersList from "./components/CustomersList.vue";
import ProductList from "./components/products/ViewProduct.vue";
import AddCustomer from "./components/AddCustomer.vue";
import SearchCustomers from "./components/SearchCustomers.vue";
import Customer from "./components/Customer.vue";
import SingleProduct from "./components/products/EditProduct.vue";
import AuthLogin from "./components/auth/Login.vue";


//set vuejs to use vue router
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      alias: "/login",
      component: AuthLogin,
    },
    {
      path: "/all/customers",
      name: "customers",
      alias: "/customer",
      component: CustomersList,
      children: [
        {
          path: "/customer/:id",
          name: "customer-details",
          component: Customer
        }
      ]
    },
    {
      path: "/products",
      name: "products",
      alias: "/product",
      component: ProductList,
      children: [
        {
          path: "/product/:id",
          name: "product-details",
          component: SingleProduct
        }
      ]
    },
    {
      path: "/add",
      name: "add",
      component: AddCustomer
    },
    {
      path: "/search",
      name: "search",
      component: SearchCustomers
    }
  ]
});