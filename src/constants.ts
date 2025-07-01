
import { BuildCardProps } from "./types"
import { SlateIt, Flow, Emelle, Wolfpackapp, BrainBeatReal } from "./assets"

export const builds: BuildCardProps[] = [
    {
        title: "Slate",
        description: "Our AI voice agent 🤖, Slate, let's you make bookings without needing to pick up the phone. Simply, give us some details, an agent will make the call, you get a recording and invite, enjoy the time taken back.",
        imageUrl: SlateIt,
        link: "https://www.justslateit.com/"
    },
    {
        title: "Flowxie",
        description: "Inspired when doing my Chinese homework ✍️, Flowxie provides a seamless experience between writing chinese and semantic meaning. In other translation software, there is friction between enabling the writing keyboard then waiting for the translation, nor are there always real examples. Here, you can directly write, see translations and generate AI examples for understanding. Used by my Chinese teacher, it's writing that just flows!",
        imageUrl: Flow,
        link: "https://flowxie.vercel.app/"
    },
    {
        title: "Emelle",
        description: "YC S24 (rejected): Emelleblocks is a platform that lets users create AI applications with no code. Users can create and customize user interfaces for their machine learning models through a drag and drop builder, similar to Wix for websites. They can customize the backend logic with a flowchart builder, similar to Voiceflow. Anyone can build and deploy their own version of Chat-GPT or DALL-E in just 5 minutes.",
        imageUrl: Emelle,
        link: "https://www.youtube.com/watch?v=v0yFuV06JIs"
    },
    {
        title: "BrainBeatReal",
        description: "🏆 Hack the North 2024 Winner (Canada's largest hackathon!): Imagine Bereal but everytime your brainwaves and heartbeat spike, you have to be real... An app built to challenge the unrealistic beauty standards set by typical social media turned into one of the giants it aimed to destroy. With BrainbeatReal we capture the real 'you'.",
        imageUrl: BrainBeatReal,
        link: "https://devpost.com/software/heartbeatreal"
    },
    {
        title: "wolfpackapp",
        description: "Officially endorsed by YRDSB and adopted as the official mobile app of 1200+ students 🚸: wolfpackapp is designed to be a one-stop-shop for all student to get their daily info at a glance. With quick access to links, built in calendars, and live announcements, wolfpackapp will help students stay up to date on all important info.",
        imageUrl: Wolfpackapp,
        link: "https://www.sarinali.me/projects/wolfpackapp"
    },
]