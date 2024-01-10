import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
    colors: {
        primary: {
            darkGray: "#1B1B1B",
            lightGray: "CDCDCD",
            darkBlueGray: "#3C4752",
            lightBlueGray: "#586470",
            inactiveGray: "#8D8D8D",

            blue: "#00B6F0",
            onclickBlue: "#0096C6",
            lightGreen: "#49FF45",
            lightRed: "#FF3D3D",
            white: "#FFFFFF",
        },
        secondary: {
            darkGray: "#393939",
            lightGray: "ECECEC",

            lightBlueGray: "#616F7D",

            inactiveDarkGray: "#404040",
            blue: "#49D3FF",
            
            lightRed: "#FF6464",
        },
    },
    components:{
        Button:{
            baseStyle: {
                border: "0px",
                color: "white",
            },
            variants:{
                "blueButton":{
                    bg: "primary.blue",
                    _hover: {
                        bg: "secondary.blue",
                    },
                    _active: {
                        bg: "primary.onclickBlue",
                    },
                },
                "inactiveFormButton":{
                    bg: "primary.inactiveBlueGray",
                    _hover: {
                        bg: "primary.inactiveBlueGray",
                    },
                },
            },
        },
        Checkbox:{
            variants:{
                "statusCheckbox":{
                    control:{
                        color: "primary.white",
                        borderColor: "primary.lightRed",
                        _hover:{
                            borderColor: "secondary.lightRed",
                        },
                        _checked:{
                            bg: "green.500",
                            borderColor: "green.500",
                            _hover:{
                                bg: "green.700",
                                borderColor: "green.500",
                            },
                        },
                    },
                },
            },
        },
        Tooltip:{
            baseStyle: {
                bg: "primary.darkBlueGray",
                color: "white",
                borderRadius: "0.5rem",
            },
        },
    },
});

export default customTheme;