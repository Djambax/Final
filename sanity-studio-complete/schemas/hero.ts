export default {
  name: 'hero',
  title: 'Section Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre (pour identification)',
      type: 'string',
      initialValue: 'Hero Section Accueil',
      readOnly: true
    },
    {
      name: 'isActive',
      title: 'Section active',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'branding',
      title: 'Branding/Logo',
      type: 'object',
      fields: [
        {
          name: 'brandName1',
          title: 'Première partie (NOVA)',
          type: 'string',
          initialValue: 'NOVA'
        },
        {
          name: 'brandName2',
          title: 'Deuxième partie (IMPÉRIA)',
          type: 'string',
          initialValue: 'IMPÉRIA'
        }
      ]
    },
    {
      name: 'headline',
      title: 'Titre principal',
      type: 'string',
      initialValue: 'Accompagner tous les entrepreneurs dans la construction d\'une image forte et cohérente'
    },
    {
      name: 'subheadline',
      title: 'Sous-titre',
      type: 'string',
      initialValue: 'Formation d\'excellence et conseil stratégique pour développer votre projet avec succès'
    },
    {
      name: 'backgroundMedia',
      title: 'Média de fond',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Type de média',
          type: 'string',
          options: {
            list: [
              {title: 'Vidéo', value: 'video'},
              {title: 'Image', value: 'image'},
              {title: 'Gradient', value: 'gradient'}
            ]
          },
          initialValue: 'video'
        },
        {
          name: 'videoFile',
          title: 'Fichier vidéo',
          type: 'file',
          options: {
            accept: 'video/*'
          }
        },
        {
          name: 'videoUrl',
          title: 'URL vidéo (alternative)',
          type: 'string',
          initialValue: '/shutterstock_3614788497.mov'
        },
        {
          name: 'backgroundImage',
          title: 'Image de fond',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'overlayOpacity',
          title: 'Opacité de l\'overlay',
          type: 'number',
          validation: Rule => Rule.min(0).max(1),
          initialValue: 0.7
        }
      ]
    },
    {
      name: 'ctaButtons',
      title: 'Boutons d\'action',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Texte du bouton',
              type: 'string'
            },
            {
              name: 'link',
              title: 'Lien',
              type: 'string'
            },
            {
              name: 'style',
              title: 'Style',
              type: 'string',
              options: {
                list: [
                  {title: 'Primaire', value: 'primary'},
                  {title: 'Secondaire', value: 'secondary'},
                  {title: 'Outline', value: 'outline'}
                ]
              }
            },
            {
              name: 'isExternal',
              title: 'Lien externe',
              type: 'boolean',
              initialValue: false
            }
          ]
        }
      ],
      initialValue: [
        {
          text: 'Découvrir nos formations',
          link: '/formations',
          style: 'primary',
          isExternal: false
        },
        {
          text: 'Nos prestations',
          link: '/prestations',
          style: 'secondary',
          isExternal: false
        }
      ]
    },
    {
      name: 'statistics',
      title: 'Statistiques',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Valeur',
              type: 'number'
            },
            {
              name: 'suffix',
              title: 'Suffixe (+, %, etc.)',
              type: 'string'
            },
            {
              name: 'label',
              title: 'Description',
              type: 'string'
            },
            {
              name: 'isActive',
              title: 'Visible',
              type: 'boolean',
              initialValue: true
            }
          ]
        }
      ],
      initialValue: [
        {
          value: 500,
          suffix: '+',
          label: 'entrepreneurs accompagnés',
          isActive: true
        },
        {
          value: 95,
          suffix: '%',
          label: 'taux de satisfaction',
          isActive: true
        },
        {
          value: 7,
          suffix: '',
          label: 'domaines d\'expertise',
          isActive: true
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'headline'
    }
  }
}