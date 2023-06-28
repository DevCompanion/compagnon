# Compagnon

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An application with a set of development tools and resources to help developers.

## Download (MacOS, Windows, Linux)

Comming soon

## How to install

### With [composer](https://getcomposer.org/) and [npm](https://www.npmjs.com/)
Follow these steps to install and set up Compagnon on your local machine:

- Navigate to the project directory: `cd compagnon`
- Install dependencies: 
    ```sh
    composer install
    npm install
  ```
- Configure the application settings by modifying the .env file:
  ```sh
  cp .env.example .env
  php artisan key:generate
  ```
- Build the application: 
    ```sh
    npm run build    
    ```

### With [docker](https://www.docker.com/)

```sh
docker compose up -d 
docker compose exec laravel.test composer install
docker compose exec laravel.test npm install
```

Access Compagnon in your web browser at http://localhost/

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
