# Compagnon Modules

You can [create a module for this project](https://github.com/DevCompanion/compagnon/) by following the instructions below.

## Module structure

A module created with the command `php artisan module:make <ModuleName>` will have the following structure:

```
modules/<ModuleName>/
├── Config
│   └── config.php
├── Console
├── Database
│   ├── Migrations
│   ├── Seeders
│   └── factories
├── Entities
├── Http
│   ├── Controllers
│   │   └── <ModuleName>Controller.php
│   ├── Middleware
│   └── Requests
├── Providers
│   ├── RouteServiceProvider.php
│   └── <ModuleName>ServiceProvider.php
├── Resources
│   ├── assets
│   │   ├── js
│   │   │   ├── Components
│   │   │   ├── Pages
│   │   │   │   └── Index.tsx
│   │   │   ├── app.js
│   │   └── sass
│   │       └── app.scss
│   ├── lang
│   │   └── en
│   │       ├── common.json
│   └── views
├── Routes
│   ├── api.php
│   └── web.php
├── Tests
│   ├── Feature
│   ├── Unit
│   └── e2e
│       └── module.spec.ts
├── composer.json
├── composer.lock
├── module.json
├── package-lock.json
├── package.json
└── tsconfig.json
```

This structure is similar to the default Laravel Module structure in the original [nwidart/laravel-modules](https://github.com/nWidart/laravel-modules) package.

A few changes have been made so that it works with Inertia, React and Typescript on the front-end.

## Create a new module

To create a new module, you can run the following commands:

```bash
php artisan module:make <ModuleName>
npm run build # or `npm run dev`
```

This will create a new module in the `modules` folder.

## How to translate a module

See [translations.md](translations.md).

## How to enable/disable a module

You can enable or disable a module by running the following commands:

```bash
php artisan module:enable <ModuleName>
php artisan module:disable <ModuleName>
```

It may be changed in the future.

## Categorize your module

You can categorize your module by adding the `metadata.category_path` property in the `module.json` file.

For example, in `modules/UuidGenerator/module.json`:
```json
{
    ...
    "metadata": {
        "category_path": [
            "category.generators"
        ]
    },
    ...
}
```

Pass the key of the category in the array.

You can find the list of categories in the file `resources/lang/<lang>/module.json` prefixed with `category.`.

Feel free to add your own categories in the file `resources/lang/<lang>/module.json` and make a pull request if you think it can be useful to the project.

## Access to the module (front-end)

You can access to the module by going to the following URL: `http://localhost/<modulename>` (replace `localhost` by the URL of your project if different).

Note the module name is in lowercase.

For the front-end, we use Inertia.js and React. 

In the module folder, `Http/Controllers/<ModuleName>Controller.php` is the controller that will be called when you access the module.
To access to a React page, you need to return the `Inertia::render()` method and prefix the page name with the module name.

For example, in `Http/Controllers/<ModuleName>Controller.php`:
```php
// For this example, We'll assume that we have a React page in `Resources/assets/js/Pages/Index.tsx`

public function index(): Response
{
    return Inertia::render(\sprintf('%s::Index', $this->module_name), [
        'ns' => $this->module_name,
        // another data
    ]);
}
```

Note you'll need to add the `ns` property in the data. This is the namespace of the translations for the module.

## Testing

Coming soon...

# External modules

Coming soon...

---

Feel free to add/update a module in the project and make a pull request if you think it can be useful to someone.

Please let us know if you have any questions or need help with the module process.
