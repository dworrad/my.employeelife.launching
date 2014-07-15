console.log("Initializing Config");
module.exports = conf = {
    application_name: "LEMP Framework",

    production: {
        database_connection: "mongodb://ELUSER:3LAdm1n01@sydney.luna.employeelife.com:37901/myemployeelife"
    },
    staging: {
        database_connection: "mongodb://ELUSER:3LAdm1n02@sydney.luna.employeelife.com:37911/myemployeelife"
    },
    test: {
        database_connection: "mongodb://ELUSER:3LAdm1n03@sydney.luna.employeelife.com:37921/myemployeelife"
    },
    demo: {
        database_connection: "mongodb://ELUSER:3LAdm1n04@sydney.luna.employeelife.com:37931/myemployeelife"
    },

    development: {
        database_connection: "mongodb://localhost:27017/myemployeelife"
    }

}
