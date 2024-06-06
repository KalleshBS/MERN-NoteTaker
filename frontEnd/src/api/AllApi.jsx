const domain = "http://localhost:6061/";

const AllApi = {
  signup: {
    url: `${domain}api/user/signup/`,
    method: "post",
  },
  login: {
    url: `${domain}api/user/login/`,
    method: "post",
  },
};

export default AllApi;
