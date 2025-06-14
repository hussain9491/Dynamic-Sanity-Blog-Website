export const blog = {
  name: 'blogs',
  type: 'document',
  title: 'The Blog',
  fields: [
    {name:'title',type:'string', title:'Title'},
    {name:'description',type:'text', title:'Description'},
    {name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 34 }},
    {name:'image',type:'image',title:'Image',options:{hotspot:true}},
    {name:"block", type:"array",title:"Block",of:[{type:"block"}]},
    

  ]

}


