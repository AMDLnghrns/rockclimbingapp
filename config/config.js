function getDBConfigFromUrl(url){
  const firstSplit = url.split(":");
  const secondSplit= firstSplit[2].split("@");

  return {
    "username": firstSplit[1].split("//").slice(-1)[0],
    "password": secondSplit[0],
    "database": firstSplit[3].split("/").slice(-1)[0],
    "host": secondSplit[1],
  };
  
}

//NOTE: Using local machine data here to get app running
const config = {
  // "development": {
  //   "username": "e3NKsKpA0A",
  //   "password": "KxhacQ1HhW",
  //   "database": "e3NKsKpA0A",
  //   "host": "remotemysql.com",
  //   "dialect": "mysql",
  //   "operatorsAliases": false
  // },
  "development": {
    "username": "root",
    "password": "$Wordf1sh211986",
    "database": "light_bites_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "ktd3apk9izip3j18",
    "password": "kpcql9uv6u11q7u5",
    "database": "vfb7pcesq16fp2i5",
    "host": "s0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "operatorsAliases": false
  }
};




if(process.env.NODE_ENV === "production"){
  config.production = {
    ...getDBConfigFromUrl(process.env.JAWSDB_URL),
    "dialect": "mysql",
    "operatorsAliases": false
  };
}

module.exports = config;