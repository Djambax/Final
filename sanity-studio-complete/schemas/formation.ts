export default {
  name: 'formation',
  title: 'Formations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description courte',
      type: 'text',
      description: 'Description qui apparaît sur la page d\'accueil et les listes'
    },
    {
      name: 'iconType',
      title: 'Type d\'icône',
      type: 'string',
      options: {
        list: [
          {title: 'Business & Entrepreneuriat', value: 'business'},
          {title: 'Marketing & Communication', value: 'marketing'},
          {title: 'Recrutement & Management', value: 'management'},
          {title: 'Intelligence Artificielle', value: 'ai'},
          {title: 'Finance & Comptabilité', value: 'finance'},
          {title: 'Commerce & Vente', value: 'commerce'},
          {title: 'Technique & Digital', value: 'technique'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'colorTheme',
      title: 'Thème de couleur',
      type: 'string',
      options: {
        list: [
          {title: 'Bleu', value: 'blue'},
          {title: 'Violet', value: 'purple'},
          {title: 'Indigo', value: 'indigo'},
          {title: 'Ambre/Orange', value: 'amber'},
          {title: 'Vert', value: 'green'},
          {title: 'Rouge', value: 'red'}
        ]
      },
      initialValue: 'blue'
    },
    {
      name: 'duration',
      title: 'Durée',
      type: 'string',
      description: 'Ex: "2-5 jours selon module", "3 jours intensifs"'
    },
    {
      name: 'price',
      title: 'Prix (€)',
      type: 'number',
      description: 'Prix en euros'
    },
    {
      name: 'priceLabel',
      title: 'Libellé du prix',
      type: 'string',
      description: 'Ex: "À partir de", "Sur devis", etc.',
      initialValue: 'À partir de'
    },
    {
      name: 'level',
      title: 'Niveau',
      type: 'string',
      options: {
        list: [
          {title: 'Débutant', value: 'beginner'},
          {title: 'Intermédiaire', value: 'intermediate'},
          {title: 'Avancé', value: 'advanced'},
          {title: 'Tous niveaux', value: 'all'}
        ]
      },
      initialValue: 'all'
    },
    {
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'galleryImages',
      title: 'Galerie d\'images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'modules',
      title: 'Modules/Points clés',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Liste des modules ou points clés de la formation'
    },
    {
      name: 'objectives',
      title: 'Objectifs pédagogiques',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'targetAudience',
      title: 'Public cible',
      type: 'text'
    },
    {
      name: 'prerequisites',
      title: 'Prérequis',
      type: 'text'
    },
    {
      name: 'format',
      title: 'Format',
      type: 'object',
      fields: [
        {
          name: 'inPerson',
          title: 'Présentiel',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'remote',
          title: 'Distanciel',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'hybrid',
          title: 'Mixte',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'customLocation',
          title: 'Sur site entreprise',
          type: 'boolean',
          initialValue: false
        }
      ]
    },
    {
      name: 'certification',
      title: 'Certification',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Certification disponible',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'name',
          title: 'Nom de la certification',
          type: 'string'
        },
        {
          name: 'organization',
          title: 'Organisme certificateur',
          type: 'string'
        }
      ]
    },
    {
      name: 'content',
      title: 'Contenu détaillé',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'trainer',
      title: 'Formateur',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Nom',
          type: 'string'
        },
        {
          name: 'bio',
          title: 'Biographie',
          type: 'text'
        },
        {
          name: 'photo',
          title: 'Photo',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'expertise',
          title: 'Domaines d\'expertise',
          type: 'array',
          of: [{type: 'string'}]
        }
      ]
    },
    {
      name: 'schedule',
      title: 'Calendrier',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'startDate',
              title: 'Date de début',
              type: 'date'
            },
            {
              name: 'endDate',
              title: 'Date de fin',
              type: 'date'
            },
            {
              name: 'location',
              title: 'Lieu',
              type: 'string'
            },
            {
              name: 'availableSpots',
              title: 'Places disponibles',
              type: 'number'
            },
            {
              name: 'isActive',
              title: 'Session active',
              type: 'boolean',
              initialValue: true
            }
          ]
        }
      ]
    },
    {
      name: 'testimonials',
      title: 'Témoignages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nom',
              type: 'string'
            },
            {
              name: 'company',
              title: 'Entreprise',
              type: 'string'
            },
            {
              name: 'testimonial',
              title: 'Témoignage',
              type: 'text'
            },
            {
              name: 'rating',
              title: 'Note /5',
              type: 'number',
              validation: Rule => Rule.min(1).max(5)
            },
            {
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Titre SEO',
          type: 'string'
        },
        {
          name: 'metaDescription',
          title: 'Description SEO',
          type: 'text'
        },
        {
          name: 'keywords',
          title: 'Mots-clés',
          type: 'array',
          of: [{type: 'string'}]
        }
      ]
    },
    {
      name: 'isActive',
      title: 'Formation active',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'isFeatured',
      title: 'Formation mise en avant',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Plus le nombre est petit, plus la formation apparaît en premier'
    }
  ],
  orderings: [
    {
      title: 'Par ordre d\'affichage',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
    {
      title: 'Par date de création',
      name: 'createdAtDesc',
      by: [
        {field: '_createdAt', direction: 'desc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image'
    }
  }
}