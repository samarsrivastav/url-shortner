export const isValidUrl = (url: string): boolean => {
    const urlPattern = new RegExp('^(https?://)');
    return urlPattern.test(url);
};
