<?php

declare(strict_types=1);

namespace Modules\Dashboard\Service;

use Illuminate\Support\Collection;
use Modules\Dashboard\Providers\DashboardServiceProvider;
use Nwidart\Modules\Facades\Module;

class MenuFactory
{
    /**
     * @return Collection<array<string, \Nwidart\Modules\Module[]>>
     */
    public function create(): Collection
    {
        return collect(Module::all())
            ->map(function (\Nwidart\Modules\Module $module): ?\Nwidart\Modules\Module {
                if (DashboardServiceProvider::MODULE_LOWER_NAME === $module->getLowerName()) {
                    return null;
                }

                return $module;
            })
            ->filter()
            ->groupBy(static function (\Nwidart\Modules\Module $module): string {
                $categoryPath = config(sprintf('%s.metadata.category_path', $module->getLowerName()), []);

                return __(\sprintf('module.%s', $categoryPath[0] ?? 'category.others'));
            });
    }
}
