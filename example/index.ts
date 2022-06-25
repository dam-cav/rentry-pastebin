import {RentryClient, Paste, ILinkCodePair} from "rentry-pastebin";

const client = new RentryClient();
(async () => {
    await client.createToken();
    console.log(`New token is: ${client.getToken()}`);
    const struct = await client.createPaste({content: "Idk some words maybe", customEditCode: "imsostupid"})
    console.log(`Paste url is: "https://rentry.co/${struct.url}" and secret edit key is "${struct.editCode}" and content is "${struct.paste.getContent()}"`);
    //paste.paste.pull(); // Pull or update content from rentry.co
    setTimeout(() => {
        struct.paste.setContent("new content; New message xD");
        console.log(`Updated content. Check the website`);
    }, 5000);

})()