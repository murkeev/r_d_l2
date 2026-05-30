import type { User } from "./interfaces/user";
import { toUserDTO, type UserDTO } from "./dtos/userDTO";
import { UserSummary } from "./classes/userSummary";
import { Article } from "./classes/article";
import { Video } from "./classes/video";
import { ContentFeed } from "./classes/contentFeed";

const feed = new ContentFeed();

feed.add(new Article(
    1,
    "TypeScript Basics",
    new Date("2024-01-10"),
    "TypeScript is a strongly typed superset of JavaScript that adds static typing and class-based OOP.",
    "Alice",
));

feed.add(new Video(
    2,
    "Async/Await Explained",
    new Date("2024-02-05"),
    375,
    "https://example.com/async-video",
));

feed.add(new Article(
    3,
    "OOP in TypeScript",
    new Date("2024-03-01"),
    "Object-oriented programming in TypeScript covers classes, interfaces, inheritance, and polymorphism in depth.",
    "Bob",
));

feed.add(new Video(
    4,
    "TypeScript Generics",
    new Date("2024-04-12"),
    520,
    "https://example.com/generics-video",
));

console.log("All content (feed.describeAll)");
feed.describeAll();

console.log("\nArticles only (feed.getByType)");
feed.getByType("Article").forEach(item => console.log(item.describe()));

console.log("\nVideos only (feed.getByType)");
feed.getByType("Video").forEach(item => console.log(item.describe()));

// UserSummary | UserDTO

(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();

    console.log("\nUserDTO (all users)");
    const dtos: UserDTO[] = users.map(toUserDTO);
    dtos.forEach(dto =>
        console.log(`#${dto.id} ${dto.fullName} | ${dto.email} | ${dto.city} | ${dto.company}`)
    );

    console.log("\nUserSummary (first user)");
    const first = new UserSummary(users[0]);
    console.log("Summary:", first.summary);
    console.log("Contact:", first.contactInfo);
    console.log("Location:", first.location);
    console.log("TotalChars:", first.totalChars);

    console.log("\nUserSummary (sorted by totalChars)");
    const summaries = users
        .map(u => new UserSummary(u))
        .sort((a, b) => b.totalChars - a.totalChars);

    summaries.forEach(s =>
        console.log(`[${s.totalChars} chars] ${s.summary}`)
    );

    console.log("\nUsers from city 'South Elvis' OR 'Wisokyburgh'");
    const filtered = dtos.filter(d =>
        ["South Elvis", "Wisokyburgh"].includes(d.city)
    );
    filtered.forEach(d => console.log(`${d.fullName} -> ${d.city}`));
})();