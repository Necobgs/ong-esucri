export default interface Pagination<T>{
    items:T[];
    meta:Meta;
}

interface Meta{
    limit:number
    page:number
    total:number
    totalPages:number
}