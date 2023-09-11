export interface temples
{
    basic:
    {
        name:string,
        bio:string,
        location:{
            pin:string;
            dist:string;
            state:string;
        },
        coordinates:{
            x:number;
            y:number;
        }
    },
    Architecture:
    {
        style:string;
        creator:string;
        completed:string;
        inscriptions:string;
        elevation:number;//in meter

    },
    about:{
        basic_info:string;
        history:string;
        architecture:string;
    },
    photos:{
        cover:string;
        profile:string;

    },
    gallery:string[

    ]

}

