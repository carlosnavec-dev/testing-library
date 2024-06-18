export function camelcase(string: string): string {
    if (!string) {
        return '';
    }
    const arrayWords = string.split(/\s|-|_/);

    const arrayWordsWithCapitalize = arrayWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    return arrayWordsWithCapitalize.join('');


}