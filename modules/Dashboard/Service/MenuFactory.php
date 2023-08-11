<?php

declare(strict_types=1);

namespace Modules\Dashboard\Service;

use Illuminate\Support\Collection;
use Modules\Dashboard\Providers\DashboardServiceProvider;
use Nwidart\Modules\Facades\Module;
use function strcmp;

class MenuFactory
{
    private const KEY_PATTERN_METADATA_CATEGORY_PATH = '%s.metadata.category_path';

    private const KEY_PATTERN_MODULE = 'module.%s';

    private const CATEGORY_OTHERS = 'module.category.others';

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
                $categoryPath = config(sprintf(self::KEY_PATTERN_METADATA_CATEGORY_PATH, $module->getLowerName()), []);

                return \sprintf(self::KEY_PATTERN_MODULE, $categoryPath[0] ?? 'category.others');
            })
            ->sortKeysUsing(static function (string $a, string $b): int {
                if (self::CATEGORY_OTHERS === $a) {
                    return 1;
                }

                if (self::CATEGORY_OTHERS === $b) {
                    return -1;
                }

                return strcmp($a, $b);
            });
    }
}
