export const getLinkHeaderUrl = (header) => {
    return header.split(';')[0].replace('<', '').replace('>', '');
}
