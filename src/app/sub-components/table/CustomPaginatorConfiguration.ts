import { MatPaginatorIntl } from '@angular/material/paginator';

const hebRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) { return `0 מתוך ${length}`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} מתוך ${length}`;
}

const engRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) { return `0 of ${length}`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} of ${length}`;
}

export function getCustomPaginatorConfiguration() {
    const paginatorIntl = new MatPaginatorIntl();

    if (localStorage.getItem('dir') == 'ltr')
        setCustomPaginatorConfigurationEn(paginatorIntl);
    else
        setCustomPaginatorConfigurationHe(paginatorIntl);

    return paginatorIntl;
}

function setCustomPaginatorConfigurationHe(paginatorIntl) {
    paginatorIntl.itemsPerPageLabel = 'פריטים לעמוד:';
    paginatorIntl.nextPageLabel = 'לעמוד הבא';
    paginatorIntl.previousPageLabel = 'לעמוד הקודם';
    paginatorIntl.getRangeLabel = hebRangeLabel;
}

function setCustomPaginatorConfigurationEn(paginatorIntl) {
    paginatorIntl.itemsPerPageLabel = 'Items per page:';
    paginatorIntl.nextPageLabel = 'Next page';
    paginatorIntl.previousPageLabel = 'Previous page';
    paginatorIntl.getRangeLabel = engRangeLabel;
}