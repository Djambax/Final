export default {
  name: 'navbar',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre (pour identification)',
      type: 'string',
      initialValue: 'Configuration Navigation',
      readOnly: true
    },
    {
      name: 'logo',
      title: 'Logo & Branding',
      type: 'object',
      fields: [
        {
          name: 'brandName1',
          title: 'Première partie du nom (NOVA)',
          type: 'string',
          initialValue: 'NOVA'
        },
        {
          name: 'brandName2',
          title: 'Deuxième partie du nom (IMPÉRIA)',
          type: 'string',
          initialValue: 'IMPÉRIA'
        },
        {
          name: 'logoImage',
          title: 'Logo (optionnel)',
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'navigationItems',
      title: 'Éléments de navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Libellé',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'path',
              title: 'Chemin (URL)',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'iconType',
              title: 'Type d\'icône',
              type: 'string',
              options: {
                list: [
                  {title: 'Accueil', value: 'home'},
                  {title: 'Utilisateurs', value: 'users'},
                  {title: 'Livre/Formation', value: 'book'},
                  {title: 'Services', value: 'services'},
                  {title: 'Contact', value: 'contact'},
                  {title: 'Graphique', value: 'chart'},
                  {title: 'Lightning', value: 'lightning'}
                ]
              }
            },
            {
              name: 'isActive',
              title: 'Élément actif',
              type: 'boolean',
              initialValue: true
            }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'path'
            }
          }
        }
      ],
      initialValue: [
        {
          label: 'Accueil',
          path: '/',
          iconType: 'home',
          isActive: true
        },
        {
          label: 'Qui sommes-nous',
          path: '/qui-sommes-nous',
          iconType: 'users',
          isActive: true
        },
        {
          label: 'Nos formations',
          path: '/formations',
          iconType: 'book',
          isActive: true
        },
        {
          label: 'Prestations',
          path: '/prestations',
          iconType: 'services',
          isActive: true
        },
        {
          label: 'Contact',
          path: '/contact',
          iconType: 'contact',
          isActive: true
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}