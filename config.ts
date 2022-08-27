export const siteName = Deno.env.get("COIL_SITE_NAME") ?? "Coil Blog";
export const siteDesc = Deno.env.get("COIL_SITE_DESC") ?? "A simple blog built with Coil.";
export const siteLogo = Deno.env.get("COIL_SITE_LOGO") ?? "/logo.svg";
export const siteIcon = Deno.env.get("COIL_SITE_ICON") ?? siteLogo;
export const colors = {
    primary: Deno.env.get("COIL_COLOR_PRIMARY") ?? "green",
    onPrimary: Deno.env.get("COIL_COLOR_ON_PRIMARY") ?? "white"
}
