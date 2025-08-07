export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre (pour identification)',
      type: 'string',
      initialValue: 'Configuration Footer',
      readOnly: true
    },
    {
      name: 'branding',
      title: 'Section Marque',
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
        },
        {
          name: 'description',
          title: 'Description de l\'entreprise',
          type: 'text',
          initialValue: 'Accompagner tous les entrepreneurs dans la construction d\'une image forte et cohérente. Formation d\'excellence et conseil stratégique pour développer votre projet avec succès.'
        }
      ]
    },
    {
      name: 'contactInfo',
      title: 'Informations de contact',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          initialValue: 'contact@nova-imperia.fr'
        },
        {
          name: 'phone',
          title: 'Téléphone',
          type: 'string',
          initialValue: '+33 1 23 45 67 89'
        },
        {
          name: 'address',
          title: 'Adresse',
          type: 'string',
          initialValue: 'Paris, France'
        }
      ]
    },
    {
      name: 'entrepriseLinks',
      title: 'Liens Entreprise',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Libellé',
              type: 'string'
            },
            {
              name: 'path',
              title: 'Lien',
              type: 'string'
            }
          ]
        }
      ],
      initialValue: [
        { label: 'À propos', path: '/qui-sommes-nous' },
        { label: 'Notre équipe', path: '/qui-sommes-nous' },
        { label: 'Nos valeurs', path: '/qui-sommes-nous' },
        { label: 'Témoignages', path: '#' }
      ]
    },
    {
      name: 'servicesLinks',
      title: 'Liens Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Libellé',
              type: 'string'
            },
            {
              name: 'path',
              title: 'Lien',
              type: 'string'
            }
          ]
        }
      ],
      initialValue: [
        { label: 'Formations', path: '/formations' },
        { label: 'Prestations OF', path: '/prestations' },
        { label: 'Prestations Entreprise', path: '/prestations' },
        { label: 'Accompagnement', path: '/prestations' }
      ]
    },
    {
      name: 'ressourcesLinks',
      title: 'Liens Ressources',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Libellé',
              type: 'string'
            },
            {
              name: 'path',
              title: 'Lien',
              type: 'string'
            }
          ]
        }
      ],
      initialValue: [
        { label: 'Blog', path: '#' },
        { label: 'Guides pratiques', path: '#' },
        { label: 'Webinaires', path: '#' },
        { label: 'FAQ', path: '/contact' }
      ]
    },
    {
      name: 'legalLinks',
      title: 'Liens Légaux',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Libellé',
              type: 'string'
            },
            {
              name: 'path',
              title: 'Lien',
              type: 'string'
            }
          ]
        }
      ],
      initialValue: [
        { label: 'Mentions légales', path: '#' },
        { label: 'Politique de confidentialité', path: '#' },
        { label: 'CGV', path: '#' },
        { label: 'CGU', path: '#' }
      ]
    },
    {
      name: 'socialLinks',
      title: 'Réseaux Sociaux',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Plateforme',
              type: 'string',
              options: {
                list: [
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'TikTok', value: 'tiktok'}
                ]
              }
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            },
            {
              name: 'isActive',
              title: 'Actif',
              type: 'boolean',
              initialValue: true
            }
          ]
        }
      ],
      initialValue: [
        { platform: 'linkedin', url: '#', isActive: true },
        { platform: 'instagram', url: '#', isActive: true },
        { platform: 'twitter', url: '#', isActive: true },
        { platform: 'facebook', url: '#', isActive: true }
      ]
    },
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
      initialValue: '© 2025 NOVA IMPÉRIA. Made with ❤️ in France'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}