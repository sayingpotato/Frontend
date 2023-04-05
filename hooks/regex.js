function isNull(v) {
    return (v === undefined || v === null) ? true : false;
}

export const isEnglish = (input) => {
    return !isNull(input.match(/[a-zA-Z]/g));
}

export const isNumber = (input) => {
    return !isNull(input.match(/[0-9]/g));;
}

export const isMoreThan = (input, length) => {
    if (isNull(input) || !input.length || input.includes(' ')) {
        return 0;
    }
    return input.length >= length;
}

export const isSpecialCharacter = (input) => {
    return !isNull(input.match(/[^\w ]/g));
}

export const isKoreanEnglish = (input) => {
    return !isNull(input.match(/^[가-힣a-zA-Z]+$/g));
}