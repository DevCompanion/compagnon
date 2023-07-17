# Compagnon

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An application with a set of development tools and resources to help developers.

## Download (MacOS, Windows, Linux)

Coming soon

## How to install

After cloning the repository, run the following commands in your terminal:

```sh
cp .env.example .env
cp external-modules/composer.json.example external-modules/composer.json
cp external-modules/composer.lock.example external-modules/composer.lock
touch database/database.sqlite
touch database/database.testing.sqlite

# OR

make init.app
```

### With [composer](https://getcomposer.org/) and [npm](https://www.npmjs.com/)
Follow these steps to install and set up Compagnon on your local machine:

- Navigate to the project directory: `cd compagnon`
- Install dependencies:
  ```sh
    make composer_ci
    make npm_ci
  ```
- Generate a new application key:
  ```sh
  php artisan key:generate
  ```
- Build the application: 
  ```sh
  npm run build
  ```

### With [docker](https://www.docker.com/)

```sh
docker compose up -d
docker compose exec laravel.test make composer_ci
docker compose exec laravel.test php artisan key:generate
docker compose exec laravel.test make npm_ci
docker compose exec laravel.test npm run build
```

Access Compagnon in your web browser at http://localhost/

## Next steps

- [x] i18n support
- [x] Add testing tools for PHP and Javascript, add tests
- [x] Add a documentation for Compagnon
- [ ] Remove default views
- [ ] Update the UI layout
- [ ] Add required modules as Dashboard and Settings
- [ ] Add a documentation for (external) modules
- [ ] Add stubs for modules
- [ ] Support NativePHP

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

Compagnon is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT) (see our [LICENSE](LICENSE) file).

## Credits

- NativePHP
- [Laravel](https://laravel.com/)
- [Laravel Modules](https://docs.laravelmodules.com/)
- [Inertia.js](https://inertiajs.com/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- And more...

Thanks to all [contributors](https://github.com/DevCompanion/compagnon/graphs/contributors)!
