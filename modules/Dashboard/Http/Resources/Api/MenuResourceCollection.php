<?php

declare(strict_types=1);

namespace Modules\Dashboard\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Collection;
use Nwidart\Modules\Module;

class MenuResourceCollection extends ResourceCollection
{
    public function toArray(Request $request): array
    {
        return $this->collection->map(function (Collection $itemsByCategory): array {
            return $itemsByCategory->map(function (Module $module): array {
                $categoryPath = config(sprintf('%s.metadata.category_path', $module->getLowerName()), []);
                $icon = config(sprintf('%s.metadata.icon', $module->getLowerName()));

                return [
                    'ns' => $module->getName(),
                    'route_name' => sprintf('%s.index', $module->getLowerName()),
                    'icon' => $icon,
                    'category' => __(\sprintf('module.%s', $categoryPath[0] ?? 'category.others')),
                ];
            })->toArray();
        })->toArray();
    }
}
