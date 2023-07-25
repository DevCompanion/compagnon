<?php

declare(strict_types=1);

namespace Modules\Dashboard\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Dashboard\Providers\DashboardServiceProvider;
use Nwidart\Modules\Facades\Module;

class MenuController extends Controller
{
    public function index()
    {
        $modules = collect(Module::all())
            ->map(function (\Nwidart\Modules\Module $module): ?array {
                if (DashboardServiceProvider::$moduleNameLower === $module->getLowerName()) {
                    return null;
                }

                $categoryPath = config(sprintf('%s.metadata.category_path', $module->getLowerName()), []);
                $icon = config(sprintf('%s.metadata.icon', $module->getLowerName()));

                return [
                    'ns' => $module->getName(),
                    'route_name' => sprintf('%s.index', $module->getLowerName()),
                    'icon' => $icon,
                    'category' => __(\sprintf('module.%s', $categoryPath[0] ?? 'category.others')),
                ];
            })
            ->filter()
            ->groupBy('category')
            ->toArray();

        return response()->json($modules);
    }
}
