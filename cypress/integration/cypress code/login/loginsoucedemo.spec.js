import { Login } from "../POM/login"
describe("Verify login functionality", function () {
    let login = new Login()
    it("verify the valid credantial", function () {

        login.navigation()
        login.validlogin("standard_user", "secret_sauce")
        //login.validlogin("locked_out_user","secret_sauce")
    })
    it("verify the invalid credantial", function () {
        login.navigation()
        login.invalidlogin("fgfg", "trtr")
        login.validatelogo()
    })

})