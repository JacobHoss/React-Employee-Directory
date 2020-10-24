import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getEmployeeList: function() {
    return axios.get("https://randomuser.me/api/?results=50&inc=name,phone,email,dob&nat=us&noinfo")
  }
};