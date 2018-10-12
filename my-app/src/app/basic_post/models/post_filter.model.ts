// This defines the filter of the posts for when it is
// retrieved from the MongoDB server

export enum FilterType
{
    DATE,
    ALPHABETICAL
}

export class PostFilterModel
{
    // Count of the elements
    mNumAttributes: number;
    mNumPagination: number;

    // The filter type for which the elements are received
    mFilterType: FilterType;
}