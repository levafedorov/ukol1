const initial = [
    {
           name: "Poslední zakázky",
           type: "čekajíci",
           link: 1,
           items: [
               {
                   id: 10000000   
               },
               {
                   id: 10000001
               },
               {
                   id: 10000002
               },
               {
                   id: 10000003
               },
               {
                   id: 10000004
               }
           ]
   },
   {
       name: "Nevyzvednuté zakázky",
       type: "nevyzvednuto",
       link: 404,
       items: [
           {
               id: 10000010
           },
           {
               id: 10000011
           },
           {
               id: 10000012
           },
           {
               id: 10000013
           },
           {
               id: 10000014
           }
       ],

},
{
   name: "K vyzkoušení",
   type: "k vyzkoušení",
   link: 8,
   items: [
       {
           id: 10000110
       },
       {
           id: 10000111
       },
       {
           id: 10000112
       },
       {
           id: 10000113
       },
       {
           id: 10000114
       }
   ],
   
},
{
   name: "Kontaktovat klienta",
   type: "kontaktovat klienta",
   link: 9,
   items: [
       {
           id: 10001110
       },
       {
           id: 10001111
       },
       {
           id: 10001112
       },
       {
           id: 10001113
       },
       {
           id: 10001114
       }
   ],
   
},
]

var ddItems = {
    name: "Procházet stavy",
    items:[
        {
            name: "Čekajíci",
            link: "/sections#1",
        },
        {
            name: "Kontrola plantogramu",
            link: "/sections#2",
        },
        {
            name: "K výrobě",
            link: "/sections#3",
        },
        { 
            name: "K realizaci",
            link: "/sections#4",  
        },
        {
            name: "Kontrola výrobku",
            link: "/sections#5",
        },
        {
            name: "K expedici",
            link: "/sections#6",
        },
        {
            name: "K vyzvednutí",
            link: "/sections#7",
        },
        {
            name: "K vyzkoušení",
            link: "/sections#8",
        },
        {
            name: "Kontaktovat klienta",
            link: "/sections#9",
        },
        {
            name: "Uzavřeno",
            link: "/sections#10",
        },
        {
            name: "Reklamace",
            link: "/sections/#11",
        },     
        
    ]
}



export {initial, ddItems}