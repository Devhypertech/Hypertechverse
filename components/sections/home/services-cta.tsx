"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ScrollAnimation from "../../../src/components/ScrollAnimation";

type Card = {
    tag: string;
    title: string;
    desc: string;
    price: string;
};

const cards: Card[] = [
    {
        tag: "LOGO DESIGN",
        title: "Logo Design",
        desc:
            "We think your logo is not only a symbol. It is the heart of your brand name. Our professional designers will create logos that not only appear truly beautiful but also offer a powerful story, which gives the essence of your business.",
        price: "$299",
    },
    {
        tag: "WEB DEVELOPMENT",
        title: "Web Development",
        desc:
            "We know that the first thing that customers see about your business is your website. Our web development team develops user friendly websites that are user friendly and at the same time aesthetically appealing.",
        price: "$599",
    },
    {
        tag: "APP DEVELOPMENT",
        title: "Application Development",
        desc:
            "Turn your ideas into high-performance applications that are easy to use. Our highly skilled developers make customized apps that offer superior user experiences. Integrating the latest technology, we provide reliable and scalable solutions.",
        price: "$899",
    },
    {
        tag: "BRANDING",
        title: "Branding",
        desc:
            "Create a brand that is memorable. We not only do branding services that include the color and the logo, but we also do it in such a way that we build your brand identity that appeals to your audience. We make sure that everything within your brand has a voice.",
        price: "$499",
    },
    {
        tag: "SOCIAL MEDIA",
        title: "Social Media Marketing",
        desc:
            "We transform social media into a strong marketing platform for your brand. We have plans that will be used to promote this engagement, visibility, and conversion. We reach the right audience with your brand through customized content and personalized campaigns.",
        price: "$399",
    },
    {
        tag: "PAID ADS",
        title: "Paid Advertising",
        desc:
            "Transforming social media into an effective promotional instrument for your brand. Our strategies will help to increase engagement and visibility and make conversions. We reach your target audience by customizing content and specific campaigns.",
        price: "$699",
    },
    {
        tag: "VIDEO ANIMATION",
        title: "Video Animations",
        desc:
            "Making concepts come true through exciting video animation. Our animations create interest and motivation for your viewers, no matter the reason: brand storytelling or product demos. Our creativity and technology bring out visually stunning videos that convey your message effectively.",
        price: "$799",
    },
    {
        tag: "SEO",
        title: "SEO",
        desc:
            "Not only do we optimize the websites, but we also amplify the presence of your brand in the online world. Using information-driven strategies and learning how search engines work, you can make sure that your company stands out to the right individuals.",
        price: "$499",
    },
    {
        tag: "CUSTOM SOFTWARE",
        title: "Custom Software Development",
        desc:
            "The software is created in a very unique way, just like your business. Custom-made applications designed by our staff will streamline your processes, make them more productive, and provide the best solution to the most complex issues with accuracy and creativity.",
        price: "$1299",
    },
];

export default function SmartSolutions() {
    // Section is hidden - return null to prevent rendering
    return null;
}
