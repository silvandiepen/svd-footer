const settings = {
    breakpoints: ["small", "medium", "large", "xlarge", "xxlarge"],
    partials: {
        full: 1,
        half: 0.5,
        third: 0.33,
        quarter: 0.25,
        fifth: 0.2,
        sixth: 0.16,
        "two-third": 0.67,
        "three-quarter": 0.75
    }
};

export function mergeSettings(newSettings) {
    for (const setting in newSettings) {
        settings[setting] = newSettings[setting];
    }
}

export default settings;
