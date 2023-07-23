# Compagnon Translations

You can [translate this project into your language](https://github.com/DevCompanion/compagnon/) by following the instructions below.

## How to translate Compagnon app

Here is the translation files for the Compagnon app. They are located at the root of the application.

```
resources/
├── lang
│   └── en
│       └── en.json
│   └── fr
│       └── fr.json
```

You can also translate the modules of the Compagnon app. They are located inside the respective module folders.

```
modules/
├── <ModuleName> (e.g. UuidGenerator)
│   ├── Resources
│   │   └── lang
│   │       └── en
│   │           ├── common.json
│   │           ├── generator.json
│   │           └── validator.json
```

### Global scope

When you translate in a file `en.json`, `common.json` or `translation.json` of the Compagnon app, 
you are in the global scope. This means that the translations will have no namespace and will be accessible from any page of the application.

For example, in `resources/lang/en.json`:

```json
{
  "title": "Compagnon"
}
```

You can use it on any page that uses React in the application:

```jsx
import {useTranslation} from "react-i18next";

export default function Index() {
    const { t } = useTranslation();
    return (
        <>
            <h1>{t('title')}</h1>
            <!-- OR -->
            <h1>{t('title', {ns: ''})}</h1>
        </>
    );
}
```

# Module scope

When you translate in a file `en.json`, `common.json` or `translation.json` of a Compagnon module,
you are in the module scope. This means that the translations will have the namespace of the module and will be accessible from any page if you specify the namespace.

For example, in `modules/UuidGenerator/Resources/lang/en.json`:

```json
{
  "title": "Uuid Generator"
}
```

You can use it on any page that uses React in the application:

```tsx
import {useTranslation} from "react-i18next";
import { type PageProps } from '@/types';
export default function Index({ ns }: PageProps<{ ns: string }>) {
    const { t } = useTranslation();
    return (
        <>
            <h1>{t('title', {ns: 'UuidGenerator'})}</h1>
            {/* OR */}
            <h1>{t('title', { ns })}</h1>
        </>
    );
}
```

### Sub scope

When you use a translation file which is not `en.json`, `common.json` or `translation.json`, you are in the sub scope.
This means that the translations will have a prefix of the file name and will be accessible from any page if you specify the prefix.

For example (1), in `resources/lang/en/validator.json`:
```json
{
  "title": "Validator"
}
```

You can use it on any page that uses React in the application:

```tsx
import {useTranslation} from "react-i18next";
import { type PageProps } from '@/types';
export default function Index() {
    const { t } = useTranslation();
    return (
        <>
            <h1>{t('validator.title', {ns: ''})}</h1>
        </>
    );
}
```

For example (2), in `modules/UuidGenerator/Resources/lang/en/generator.json`:

```json
{
  "title": "Generator"
}
```

You can use it on any page that uses React in the application:

```tsx
import {useTranslation} from "react-i18next";
import { type PageProps } from '@/types';

export default function Index({ ns }: PageProps<{ ns: string }>) {
    const { t } = useTranslation();
    return (
        <>
            <h1>{t('generator.title', { ns })}</h1>
        </>
    );
}
```

---

Feel free to add your language to the list below and make a pull request.

Please let us know if you have any questions or need help with the translation process.
