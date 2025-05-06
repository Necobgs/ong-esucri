export default interface ProfessionInterface{
    title:string;
    image:string;
    description:string;
    details:Details[];
}

interface Details{
    icon:string;
    title:string;
    subtitle:string;
}