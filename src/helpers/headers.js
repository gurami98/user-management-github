export const getLinkHeaderUrlForSearch = (header) => {
    const headerArr = header.split(',')
    let neededHeader;
    headerArr.forEach(item => {
        if(item.includes('next')) {
            neededHeader = item;
        }
    })
    if(!neededHeader) return ''
    return neededHeader.split(';')[0].replace('<', '').replace('>', '').replace(/\s+/g, '');
}
