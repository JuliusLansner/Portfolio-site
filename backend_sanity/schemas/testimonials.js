//Don't think i'll include this in the final version, as I'm not too keen on the testimonials part.
export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields:[
     {
            name: 'name',
            title: 'Name',
            type: 'string',
     },
    {
        name: 'company',
        title: 'Company',
        type: 'string',
    },
    {
        name: 'imageurl',
        title: 'ImgURL',
        type: 'image',
        options: {
            hotspot: true,
        }
    },
    {
        name: 'feedback',
        title: 'Feedback',
        type: 'string',
    },
    ]
}