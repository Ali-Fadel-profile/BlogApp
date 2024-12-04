import { createTheme } from "@mui/material";

const colors = {
    light: {
        primaryMain: "#141624",
        primaryText: "#3B3C4A",
        primaryBorder: "#E8E8EA",
        buttonBorder: "rgb(105, 106, 117,30)",
        backgroundDefault: "#ffffff",
        backgroundSection: "#E8E8EA",
        backgrondComponent: "#ffffff",
        inputBackground: "#F4F4F5",
        buttonBackground: "#E8E8EA",
        categoryBackground: "#E8E8EA",
        textHover: "#4b6bfb",
    },
    dark: {
        primaryMain: "#fffffff3",
        primaryText: "#ffffffe5",
        primaryBorder: "#242535",
        buttonBorder: "#696A75",
        backgroundDefault: "#181A2A",
        backgroundSection: "#141624",
        backgrondComponent: "#242535",
        inputBackground: "#242535",
        buttonBackground: "#4b6bfb",
        categoryBackground: "#4b6bfb",
        textHover: "#4b6bfb",
    },
};

const typography = {
    h1: {
        fontSize: "28px",
        fontWeight: "600",
        lineHeight: 1.4,
    },
    h2: {
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: 1.2,
    },
    h6: {
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: 1.2,
    },
    body1: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: 1.5,
    },
    body2: {
        fontSize: "12px",
        fontWeight: "500",
        lineHeight: 1.5,
    },
    link: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: 1.5,
        textDecoration: "none",
    },
};

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: colors.light.primaryMain,
            cardBorder: colors.light.primaryBorder,
            buttonBorder: colors.light.buttonBorder,
        },
        background: {
            default: colors.light.backgroundDefault,
            section: colors.light.backgroundSection,
            component: colors.light.backgrondComponent,
            button: colors.light.buttonBackground,
            input: colors.light.inputBackground,
            category: colors.light.categoryBackground,
        },
        text: {
            primary: colors.light.primaryText,
            hover: colors.light.textHover,
        },
    },
    typography: {
        h1: {
            ...typography.h1,
            color: colors.light.primaryMain,
        },
        h2: {
            ...typography.h2,
            color: colors.light.primaryMain,
        },
        h6: {
            ...typography.h6,
            color: colors.light.primaryText,
        },
        body1: {
            ...typography.body1,
            color: colors.light.primaryText,
        },
        body2: {
            ...typography.body2,
            color: colors.light.primaryText,
        },
        link: {
            ...typography.link,
            color: colors.light.primaryText,
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: colors.dark.primaryMain,
            cardBorder: colors.dark.primaryBorder,
            buttonBorder: colors.dark.buttonBorder,
        },
        background: {
            default: colors.dark.backgroundDefault,
            section: colors.dark.backgroundSection,
            component: colors.dark.backgrondComponent,
            button: colors.dark.buttonBackground,
            input: colors.dark.inputBackground,
            category: colors.dark.categoryBackground,
        },
        text: {
            primary: "#FFFFFF",
            hover: colors.dark.textHover,
        },
    },
    typography: {
        h1: {
            ...typography.h1,
            color: colors.dark.primaryMain,
        },
        h2: {
            ...typography.h2,
            color: colors.dark.primaryMain,
        },
        h6: {
            ...typography.h6,
            color: colors.dark.primaryText,
        },
        body1: {
            ...typography.body1,
            color: colors.dark.primaryText,
        },
        body2: {
            ...typography.body2,
            color: colors.dark.primaryText,
        },
        link: {
            ...typography.link,
            color: colors.dark.primaryText,
        },
    },
});
