<?php

declare(strict_types=1);

namespace Modules\Dashboard\Providers;

use Config;
use Illuminate\Support\ServiceProvider;
use Modules\Dashboard\Service\MenuFactory;

class DashboardServiceProvider extends ServiceProvider
{
    public const MODULE_NAME = 'Dashboard';

    public const MODULE_LOWER_NAME = 'dashboard';

    /**
     * Boot the application events.
     */
    public function boot(): void
    {
        $this->registerTranslations();
        $this->registerConfig();
        $this->registerViews();
        $this->loadMigrationsFrom(module_path(self::MODULE_NAME, 'Database/Migrations'));
    }

    /**
     * Register the service provider.
     */
    public function register(): void
    {
        $this->app->register(RouteServiceProvider::class);

        $this->app->bind('menu-factory', fn () => new MenuFactory());
    }

    /**
     * Register views.
     */
    public function registerViews(): void
    {
        $viewPath = resource_path('views/modules/' . self::MODULE_LOWER_NAME);

        $sourcePath = module_path(self::MODULE_NAME, 'Resources/views');

        $this->publishes([
            $sourcePath => $viewPath,
        ], ['views', self::MODULE_LOWER_NAME . '-module-views']);

        $this->loadViewsFrom(array_merge($this->getPublishableViewPaths(), [$sourcePath]), self::MODULE_LOWER_NAME);
    }

    /**
     * Register translations.
     */
    public function registerTranslations(): void
    {
        $langPath = resource_path('lang/modules/' . self::MODULE_LOWER_NAME);

        if (is_dir($langPath)) {
            $this->loadTranslationsFrom($langPath, self::MODULE_LOWER_NAME);
            $this->loadJsonTranslationsFrom($langPath);
        } else {
            $this->loadTranslationsFrom(module_path(self::MODULE_NAME, 'Resources/lang'), self::MODULE_LOWER_NAME);
            $this->loadJsonTranslationsFrom(module_path(self::MODULE_NAME, 'Resources/lang'));
        }
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }

    /**
     * Register config.
     */
    protected function registerConfig(): void
    {
        $this->publishes([
            module_path(self::MODULE_NAME, 'Config/config.php') => config_path(self::MODULE_LOWER_NAME . '.php'),
        ], 'config');
        $this->mergeConfigFrom(
            module_path(self::MODULE_NAME, 'Config/config.php'),
            self::MODULE_LOWER_NAME
        );
    }

    private function getPublishableViewPaths(): array
    {
        $paths = [];
        foreach (Config::get('view.paths') as $path) {
            if (is_dir($path . '/modules/' . self::MODULE_LOWER_NAME)) {
                $paths[] = $path . '/modules/' . self::MODULE_LOWER_NAME;
            }
        }

        return $paths;
    }
}
