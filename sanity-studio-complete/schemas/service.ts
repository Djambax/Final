export default {
  name: 'service',
  title: 'Services/Prestations',
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
      }
    },
    {
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description courte',
      type: 'text',
      description: 'Description qui apparaît sur la page d\'accueil'
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Pack OF (Organisme de Formation)', value: 'pack_of'},
          {title: 'Pack Communication', value: 'pack_communication'},
          {title: 'Pack Entreprise', value: 'pack_entreprise'},
          {title: 'Conseil stratégique', value: 'conseil'},
          {title: 'Accompagnement', value: 'accompagnement'},
          {title: 'Autre', value: 'autre'}
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
          {title: 'Orange', value: 'orange'},
          {title: 'Vert', value: 'green'},
          {title: 'Rouge', value: 'red'},
          {title: 'Indigo', value: 'indigo'}
        ]
      },
      initialValue: 'blue'
    },
    {
      name: 'pricing',
      title: 'Tarification',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Type de tarif',
          type: 'string',
          options: {
            list: [
              {title: 'Prix fixe', value: 'fixed'},
              {title: 'À partir de', value: 'from'},
              {title: 'Sur devis', value: 'quote'},
              {title: 'Sur mesure', value: 'custom'}
            ]
          },
          initialValue: 'from'
        },
        {
          name: 'amount',
          title: 'Montant (€)',
          type: 'number'
        },
        {
          name: 'label',
          title: 'Libellé du prix',
          type: 'string',
          description: 'Ex: "À partir de 2500€", "Sur devis"'
        }
      ]
    },
    {
      name: 'isPopular',
      title: 'Service populaire/recommandé',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'features',
      title: 'Caractéristiques incluses',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Liste des services/fonctionnalités inclus'
    },
    {
      name: 'benefits',
      title: 'Avantages',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Bénéfices pour le client'
    },
    {
      name: 'deliverables',
      title: 'Livrables',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Ce qui sera livré au client'
    },
    {
      name: 'timeline',
      title: 'Délai de réalisation',
      type: 'string',
      description: 'Ex: "2-4 semaines", "3 mois", "Selon projet"'
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
      name: 'gallery',
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
      name: 'icon',
      title: 'Icône du service',
      type: 'string',
      options: {
        list: [
          {title: 'Graphique/Analytics', value: 'chart'},
          {title: 'Communication', value: 'megaphone'},
          {title: 'Utilisateurs', value: 'users'},
          {title: 'Briefcase', value: 'briefcase'},
          {title: 'Lightning', value: 'lightning'},
          {title: 'Cog/Settings', value: 'cog'},
          {title: 'Globe', value: 'globe'},
          {title: 'Bulb', value: 'bulb'}
        ]
      }
    },
    {
      name: 'targetAudience',
      title: 'Public cible',
      type: 'text'
    },
    {
      name: 'process',
      title: 'Processus/Méthodologie',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'step',
              title: 'Étape',
              type: 'number'
            },
            {
              name: 'title',
              title: 'Titre de l\'étape',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            },
            {
              name: 'duration',
              title: 'Durée',
              type: 'string'
            }
          ]
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
      name: 'prerequisites',
      title: 'Prérequis',
      type: 'text'
    },
    {
      name: 'team',
      title: 'Équipe dédiée',
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
              name: 'role',
              title: 'Rôle',
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
            }
          ]
        }
      ]
    },
    {
      name: 'testimonials',
      title: 'Témoignages clients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'clientName',
              title: 'Nom du client',
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
            },
            {
              name: 'project',
              title: 'Projet réalisé',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'caseStudies',
      title: 'Études de cas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Titre du projet',
              type: 'string'
            },
            {
              name: 'client',
              title: 'Client',
              type: 'string'
            },
            {
              name: 'challenge',
              title: 'Défi/Problématique',
              type: 'text'
            },
            {
              name: 'solution',
              title: 'Solution apportée',
              type: 'text'
            },
            {
              name: 'results',
              title: 'Résultats obtenus',
              type: 'text'
            },
            {
              name: 'image',
              title: 'Image du projet',
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
      name: 'ctaSection',
      title: 'Appel à l\'action',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Titre CTA',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'buttonText',
          title: 'Texte du bouton',
          type: 'string'
        },
        {
          name: 'buttonLink',
          title: 'Lien du bouton',
          type: 'string'
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
      title: 'Service actif',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'isFeatured',
      title: 'Service mis en avant',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number'
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
      title: 'Par catégorie',
      name: 'categoryAsc',
      by: [
        {field: 'category', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image'
    }
  }
}