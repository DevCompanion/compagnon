<?php

declare(strict_types=1);

namespace Modules\Dashboard\Http\Controllers;

use Illuminate\Routing\Controller;
use MenuFactory;
use Modules\Dashboard\Http\Resources\Api\MenuResourceCollection;

class MenuController extends Controller
{
    /**
     * @response array<string, array{ns: string, route_name: string, icon: ?string, category: string}[]>
     */
    public function index(): MenuResourceCollection
    {
        return new MenuResourceCollection(MenuFactory::create());
    }
}
