<?php

namespace Modules\PDFCompressor\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Factory;
use Modules\PDFCompressor\Contracts\Providers\PDFCompressorProviderInterface;
use Modules\PDFCompressor\Services\Providers\Ghostscript\GhostscriptWrapper;

class PDFCompressorServiceProvider extends ServiceProvider
{
    public const MODULE_NAME = 'PDFCompressor';

    public const MODULE_LOWER_NAME = 'pdfcompressor';

    /**
     * Boot the application events.
     *
     * @return void
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
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->register(RouteServiceProvider::class);
        $this->app->tag(
            [GhostscriptWrapper::class],
            PDFCompressorProviderInterface::class
        );
    }

    /**
     * Register config.
     *
     * @return void
     */
    protected function registerConfig()
    {
        $this->publishes([
            module_path(self::MODULE_NAME, 'Config/config.php') => config_path(self::MODULE_LOWER_NAME . '.php'),
        ], 'config');
        $this->mergeConfigFrom(
            module_path(self::MODULE_NAME, 'Config/config.php'), self::MODULE_LOWER_NAME
        );
    }

    /**
     * Register views.
     *
     * @return void
     */
    public function registerViews()
    {
        $viewPath = resource_path('views/modules/' . self::MODULE_LOWER_NAME);

        $sourcePath = module_path(self::MODULE_NAME, 'Resources/views');

        $this->publishes([
            $sourcePath => $viewPath
        ], ['views', self::MODULE_LOWER_NAME . '-module-views']);

        $this->loadViewsFrom(array_merge($this->getPublishableViewPaths(), [$sourcePath]), self::MODULE_LOWER_NAME);
    }

    /**
     * Register translations.
     *
     * @return void
     */
    public function registerTranslations()
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

    private function getPublishableViewPaths(): array
    {
        $paths = [];
        foreach (\Config::get('view.paths') as $path) {
            if (is_dir($path . '/modules/' . self::MODULE_LOWER_NAME)) {
                $paths[] = $path . '/modules/' . self::MODULE_LOWER_NAME;
            }
        }
        return $paths;
    }
}
