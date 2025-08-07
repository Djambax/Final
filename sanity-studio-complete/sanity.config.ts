import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Nova Impéria CMS',

  projectId: 'ton-project-id', // À remplacer par ton vrai Project ID
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            // Configuration Layout (singleton documents)
            S.listItem()
              .title('🔧 Configuration')
              .child(
                S.list()
                  .title('Configuration du site')
                  .items([
                    S.listItem()
                      .title('Navigation')
                      .child(
                        S.document()
                          .schemaType('navbar')
                          .documentId('navbar-config')
                      ),
                    S.listItem()
                      .title('Footer')
                      .child(
                        S.document()
                          .schemaType('footer')
                          .documentId('footer-config')
                      ),
                    S.listItem()
                      .title('Section Hero')
                      .child(
                        S.document()
                          .schemaType('hero')
                          .documentId('hero-config')
                      ),
                  ])
              ),

            // Divider
            S.divider(),

            // Content sections
            S.listItem()
              .title('📚 Formations')
              .child(
                S.documentTypeList('formation')
                  .title('Formations')
                  .defaultOrdering([{field: 'order', direction: 'asc'}])
              ),

            S.listItem()
              .title('🛠️ Services/Prestations')
              .child(
                S.documentTypeList('service')
                  .title('Services & Prestations')
                  .defaultOrdering([{field: 'order', direction: 'asc'}])
              ),
          ])
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },

  // Configuration initiale des documents singleton
  document: {
    // Empêcher la suppression des documents de configuration
    actions: (prev, context) => {
      if (['navbar-config', 'footer-config', 'hero-config'].includes(context.documentId)) {
        return prev.filter(action => !['delete', 'duplicate'].includes(action.action))
      }
      return prev
    }
  }
})