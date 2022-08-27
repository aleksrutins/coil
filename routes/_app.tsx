/** @jsx h */
import { h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { siteName, siteIcon, siteLogo, siteDesc } from "../config.ts";
import { Head } from "$fresh/runtime.ts";
import NavLink from "../components/NavLink.tsx";

export default function App({Component, ...props}: AppProps) {
    return <html class={tw`w-screen h-screen`}>
        <Head>
            <title>{siteName}</title>
            <link rel="icon" href={siteIcon}/>
        </Head>
        <body class={tw`w-screen h-screen flex flex-row`}>
            <div class={tw`bg-gray-100 p-3`}>
                <div class={tw`flex flex-col lg:flex-row items-center mb-8`}>
                    <img src={siteLogo} width={100} height={100}/>
                    <div>
                        <h1 class={tw`text-2xl`}>{siteName}</h1>
                        <h2 class={tw`text-gray-700`}>{siteDesc}</h2>
                    </div>
                </div>
                <NavLink href="/" text="Posts" active={true}/>
            </div>
            <div class={tw`p-6 flex-1 overflow-auto`}>
                <Component/>
            </div>
        </body>
    </html>
}
