
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    protfolio: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
};
 
const output = `Hi my name is ${user.name}, user name is ${user.username}, the email is ${user.email} and the street is ${user.address.street}, the suite is ${user.address.suite} and the city is ${user.address.city} and the zip code is ${user.address.zipcode}. My phone number is ${user.phone} and my website is ${user.protfolio}. My company name is ${user.company.name}, whose catchphrase is ${user.company.catchPhrase} and the bs is ${user.company.bs}.`;

document.getElementById("output-container").innerText = output;

console.log(output);
