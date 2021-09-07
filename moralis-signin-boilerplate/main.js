Moralis.initialize("uoPAozjVyVvIe6KLvzKGLU7SNYXuWjUrccM2dSDF"); // Application id from moralis.io
Moralis.serverURL = "https://echj3ag7rmrw.bigmoralis.com:2053/server"; //Server url from moralis.io

async function login() {
    try {
        user = await Moralis.Web3.authenticate();
        console.log(user);
        alert("User logged in")
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("login_button").onclick = login;