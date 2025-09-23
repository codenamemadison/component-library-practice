import Section from "../components/Section";

import Badge from "../components/badge/Badge"

import { colorSchemes } from "../components/badge/badgeColorSchemes";

export default function Components() {
    const colors = Object.keys(colorSchemes)
    return (
        <>
            <Section
                title="Badge"
                description="Variations of Badge component"
            >
                {colors.map((color, index) => {
                    return (
                        index < 4 && 
                        (<Badge
                            shape="square"
                            colorScheme={color}
                        >
                            Badge
                        </Badge>)
                    )
                })}
                {colors.map((color, index) => {
                    return (
                        index < 4 && 
                        (<Badge
                            shape="pilled"
                            colorScheme={color}
                        >
                            Badge
                        </Badge>)
                    )
                })}
                {colors.map((color, index) => {
                    return (
                        index >= 4 && 
                        (<Badge
                            shape="square"
                            colorScheme={color}
                        >
                            Badge
                        </Badge>)
                    )
                })}
                {colors.map((color, index) => {
                    return (
                        index >= 4 && 
                        (<Badge
                            shape="pilled"
                            colorScheme={color}
                        >
                            Badge
                        </Badge>)
                    )
                })}

            </Section>
        </>
    )
}