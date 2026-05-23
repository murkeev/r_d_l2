const user = {
    name: "Alex",
    contact: {
        email: "alex@example.com",
        city: "Kyiv"
    },
    skills: ["JS", "HTML", "CSS"],
    showInfo() {
        console.log(`Name: ${this.name}, City: ${this.contact.city}`);
    }
};

user.showInfo();
