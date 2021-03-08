const initial = [
    {
           name: "Poslední zakázky",
           type: "čekajíci",
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

module.exports = {initial}