/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { colors } from "../config.ts";

export type Props = {
    active: boolean,
    href: string,
    text: string
}

export default function NavLink(props: Props) {
    return <a class={tw`${props.active && `bg-${colors.primary}-700 text-${colors.onPrimary}` || `text-${colors.primary}-700 hover:bg-gray-300`} rounded-lg p-2 block transition`} href={props.href}>{props.text}</a>
}
