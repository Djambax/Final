# 🚀 Guide de Configuration Sanity CMS pour Nova Imperia

## ✅ Ce qui est déjà fait

- ✅ Installation des dépendances Sanity (`@sanity/client`, `@sanity/image-url`)
- ✅ Configuration du client Sanity (`src/lib/sanity.ts`)
- ✅ Création des hooks React (`src/hooks/useSanity.ts`)
- ✅ Exemple d'intégration avec la page Formations (`src/pages/FormationsWithSanity.tsx`)
- ✅ Types TypeScript pour le contenu
- ✅ Configuration des variables d'environnement

## 🎯 Prochaines étapes

### 1. Créer ton projet Sanity Studio

```bash
# Dans un nouveau dossier (à côté de ton projet React)
npm create sanity@latest nova-imperia-studio

# Suis les instructions :
# - Choisir "Yes" pour TypeScript
# - Choisir "Clean project with no predefined schemas"
# - Note bien ton Project ID qui s'affiche
```

### 2. Configurer les variables d'environnement

Édite le fichier `.env` avec tes vraies valeurs :

```env
VITE_SANITY_PROJECT_ID=ton-project-id-ici
VITE_SANITY_DATASET=production
```

### 3. Créer les schémas dans ton studio

Dans le dossier `nova-imperia-studio/schemas/`, crée ces fichiers :

**schemas/formation.ts**
```typescript
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
      options: { source: 'title' }
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
    },
    {
      name: 'price',
      title: 'Prix (€)',
      type: 'number'
    },
    {
      name: 'iconType',
      title: 'Type d\'icône',
      type: 'string',
      options: {
        list: [
          {title: 'Business', value: 'business'},
          {title: 'Marketing', value: 'marketing'},
          {title: 'Commerce', value: 'commerce'},
          {title: 'Finance', value: 'finance'},
          {title: 'Management', value: 'management'},
          {title: 'Technique', value: 'technique'},
          {title: 'Digital', value: 'digital'}
        ]
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
}
```

**schemas/index.ts**
```typescript
import formation from './formation'

export const schemaTypes = [formation]
```

**sanity.config.ts** (dans le studio)
```typescript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Nova Imperia CMS',
  projectId: 'ton-project-id',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
```

### 4. Lancer le studio et ajouter du contenu

```bash
cd nova-imperia-studio
npm run dev
```

Va sur `http://localhost:3333` et ajoute tes premières formations !

### 5. Tester l'intégration

Dans ton projet React, tu peux maintenant :

1. **Remplacer la page Formations actuelle** :
```bash
# Sauvegarde l'ancienne version
mv src/pages/Formations.tsx src/pages/FormationsOld.tsx

# Utilise la nouvelle version avec Sanity
mv src/pages/FormationsWithSanity.tsx src/pages/Formations.tsx
```

2. **Ou tester en parallèle** en ajoutant une route dans `App.tsx` :
```tsx
<Route path="/formations-sanity" element={<FormationsWithSanity />} />
```

## 🔧 Fonctionnalités disponibles

### Gestion intelligente des données
- **Fallback automatique** : Si Sanity n'est pas configuré, affiche du contenu statique
- **États de chargement** : Indicateurs visuels pendant le chargement
- **Gestion d'erreurs** : Affichage gracieux en cas de problème

### Optimisation des images
```tsx
// Automatic image optimization
urlFor(formation.image).width(400).height(200).url()
```

### Hooks personnalisés
```tsx
// Récupérer toutes les formations
const { data: formations, loading, error } = useFormations()

// Récupérer une formation spécifique
const { data: formation } = usePage('ma-formation')
```

## 🎨 Personnalisation

### Ajouter d'autres types de contenu

Pour ajouter des Services, Pages, etc., suis le même modèle :

1. Crée le schéma dans le studio
2. Ajoute les types TypeScript dans `src/lib/sanity.ts`
3. Crée des hooks spécialisés dans `src/hooks/useSanity.ts`
4. Met à jour tes composants React

### Exemple pour les Services

**Studio Schema (schemas/service.ts)** :
```typescript
export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  // ... champs similaires aux formations
}
```

**Hook React** :
```typescript
export function useServices() {
  return useSanityData(`*[_type == "service"] | order(_createdAt desc)`)
}
```

## 📱 Avantages de cette intégration

1. **Flexibilité** : Contenu modifiable sans redéploiement
2. **Performance** : CDN intégré pour les images
3. **Évolutivité** : Facile d'ajouter de nouveaux types de contenu
4. **Collaboration** : Interface admin simple pour les non-développeurs
5. **Backup automatique** : Sanity sauvegarde automatiquement
6. **API robuste** : Queries puissantes avec GROQ

## 🚨 Points important

- **Variables d'environnement** : N'oublie pas de configurer ton `.env`
- **Dataset** : Commence par "production", tu pourras créer d'autres environnements plus tard
- **CORS** : Sanity gère automatiquement les CORS pour ton domaine
- **Déploiement** : N'oublie pas d'ajouter tes variables d'environnement sur ton serveur de production

## 🎉 Résultat

Ton site peut maintenant :
- Afficher du contenu dynamique depuis Sanity
- Fonctionner même si Sanity n'est pas configuré (fallback)
- Être mis à jour facilement via l'interface admin
- Gérer les images avec optimisation automatique