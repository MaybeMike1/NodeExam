function checkCredential(authStatus) {
    if(!authStatus) {
        document.getElementById("login-message").innerText = "Wrong Password - Please try again."
    }
}
