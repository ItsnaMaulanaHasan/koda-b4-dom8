requirejs.config({
  baseUrl: "assets/scripts",
  paths: {
    api: "./lib/api",
    createContainer: "./lib/createContainer",
    jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min",
    axios: "//cdnjs.cloudflare.com/ajax/libs/axios/1.11.0/axios.min",
  },
});

require(["main"]);
